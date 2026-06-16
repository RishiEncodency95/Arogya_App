/**
 * OnboardingScreen.tsx — Arogya Sangoshthi
 * Living Mandala Splash Screen — v2
 *
 * Changes from v1:
 *  - Flower/petal color → green palette (#2E7D32, #4CAF50, #81C784)
 *  - Logo PNG visible at center, blooms WITH the flower animation
 *  - Light dark overlay on bg image (opacity 0.38) so mandala pops
 *  - "LOADING" text below loader bar with letter-spacing
 *  - Logo spring-pops in sync with inner petal draw start (500ms)
 *
 * Timeline:
 *   0ms    — Bg + overlay + sonar pulse rings
 *   0ms    — Outer 12 petals draw (green)
 *   500ms  — Inner 6 petals draw + Logo spring-slams in together
 *   900ms  — Yantra geometry fades in
 *   1400ms — Dual orbiting rings counter-rotate
 *   1700ms — Center glow blooms
 *   2400ms — Corner ornaments appear
 *   2800ms — Loader + "LOADING" text fade in, bar fills
 *   5800ms — navigate to Login
 */

import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  Image,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedProps,
  withTiming,
  withSpring,
  withDelay,
  withRepeat,
  withSequence,
  runOnJS,
  Easing,
} from 'react-native-reanimated';
import Svg, {
  Circle,
  Path,
  G,
  Polygon,
  Defs,
  RadialGradient,
  Stop,
} from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const { width, height } = Dimensions.get('window');

// ── Palette — Theme ─────────────────────────────────
const C = {
  bg: '#FFFFFF',
  logoGold: '#a27429',
  logoGreen: '#19582d',
  green: '#2E7D32',        // loader
  greenLight: '#81C784',   // glow + loader tip
  saffron: '#D4681C',      // center dot
  saffronLt: '#F7B85A',    // extra
  ivory: '#F0F4F0',        // corner ornaments
  white: '#FFFFFF',
};

// ── Layout ───────────────────────────────────────────────────────
const CX = width / 2;
const CY = height * 0.42;

const MANDALA_R = 112;
const INNER_R = 68;
const ORBIT_R_A = 132;
const ORBIT_R_B = 115;
const CENTER_R = 28;
const LOGO_SIZE = 200;   // logo image size

// ── Animated SVG components ──────────────────────────────────────
const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedPath = Animated.createAnimatedComponent(Path);
const AnimatedG = Animated.createAnimatedComponent(G);

// ────────────────────────────────────────────────────────────────
// Sonar pulse ring
// ────────────────────────────────────────────────────────────────
const SonarRing = ({ delay }: { delay: number }) => {
  const scale = useSharedValue(0.3);
  const op = useSharedValue(0);

  useEffect(() => {
    const fire = () => {
      scale.value = 0.3;
      op.value = 0;
      scale.value = withDelay(delay,
        withTiming(2.6, { duration: 2500, easing: Easing.out(Easing.cubic) }),
      );
      op.value = withDelay(delay,
        withSequence(
          withTiming(0.45, { duration: 200 }),
          withTiming(0, { duration: 2300, easing: Easing.out(Easing.quad) }),
        ),
      );
    };
    fire();
    const id = setInterval(fire, 2900);
    return () => clearInterval(id);
  }, []);

  const aStyle = useAnimatedStyle(() => ({
    position: 'absolute',
    top: CY - 58,
    left: CX - 58,
    width: 116,
    height: 116,
    borderRadius: 58,
    borderWidth: 0.8,
    borderColor: C.green,
    opacity: op.value,
    transform: [{ scale: scale.value }],
  }));

  return <Animated.View style={aStyle} />;
};

// ────────────────────────────────────────────────────────────────
// Lotus petal — stroke-dashoffset draw animation
// ────────────────────────────────────────────────────────────────
type PetalProps = {
  angleDeg: number;
  tipRadius: number;
  color: string;
  strokeW: number;
  delay: number;
  pathLength: number;
};

const LotusPetal = ({ angleDeg, tipRadius, color, strokeW, delay, pathLength }: PetalProps) => {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withDelay(delay,
      withTiming(1, { duration: 720, easing: Easing.out(Easing.cubic) }),
    );
  }, []);

  const rad = (angleDeg * Math.PI) / 180;
  const tx = Math.cos(rad) * tipRadius;
  const ty = Math.sin(rad) * tipRadius;
  const px = -Math.sin(rad) * tipRadius * 0.36;
  const py = Math.cos(rad) * tipRadius * 0.36;

  const d = `M ${CX} ${CY} `
    + `C ${CX + px} ${CY + py} ${CX + tx + px * 0.4} ${CY + ty + py * 0.4} ${CX + tx} ${CY + ty} `
    + `C ${CX + tx - px * 0.4} ${CY + ty - py * 0.4} ${CX - px} ${CY - py} ${CX} ${CY}`;

  const animProps = useAnimatedProps(() => ({
    strokeDashoffset: pathLength * (1 - progress.value),
  }));

  return (
    <AnimatedPath
      d={d}
      fill="none"
      stroke={color}
      strokeWidth={strokeW}
      strokeDasharray={pathLength}
      animatedProps={animProps}
      strokeLinecap="round"
    />
  );
};

// ────────────────────────────────────────────────────────────────
// Orbit ring — continuous dashed rotation
// ────────────────────────────────────────────────────────────────
const OrbitRing = ({
  r, dash, gap, dir, startDelay, color, strokeW,
}: {
  r: number; dash: number; gap: number;
  dir: 1 | -1; startDelay: number;
  color: string; strokeW: number;
}) => {
  const rot = useSharedValue(0);
  const op = useSharedValue(0);

  useEffect(() => {
    op.value = withDelay(startDelay, withTiming(1, { duration: 600 }));
    rot.value = withDelay(startDelay,
      withRepeat(
        withTiming(dir, { duration: dir === 1 ? 20000 : 13000, easing: Easing.linear }),
        -1, false,
      ),
    );
  }, []);

  const aStyle = useAnimatedStyle(() => ({
    position: 'absolute',
    top: CY - r,
    left: CX - r,
    width: r * 2,
    height: r * 2,
    opacity: op.value,
    transform: [{ rotate: `${rot.value * 360}deg` }],
  }));

  return (
    <Animated.View style={aStyle}>
      <Svg width={r * 2} height={r * 2} style={{ overflow: 'visible' }}>
        <Circle
          cx={r} cy={r} r={r}
          fill="none"
          stroke={color}
          strokeWidth={strokeW}
          strokeDasharray={`${dash} ${gap}`}
        />
      </Svg>
    </Animated.View>
  );
};

// ────────────────────────────────────────────────────────────────
// Corner ornament
// ────────────────────────────────────────────────────────────────
const CornerOrnament = ({
  x, y, flipX, flipY, delay,
}: {
  x: number; y: number; flipX: boolean; flipY: boolean; delay: number;
}) => {
  const op = useSharedValue(0);
  useEffect(() => { op.value = withDelay(delay, withTiming(1, { duration: 700 })); }, []);

  const aStyle = useAnimatedStyle(() => ({
    position: 'absolute',
    top: y,
    left: x,
    width: 34,
    height: 34,
    opacity: op.value,
    transform: [{ scaleX: flipX ? -1 : 1 }, { scaleY: flipY ? -1 : 1 }],
  }));

  return (
    <Animated.View style={aStyle}>
      <Svg width={34} height={34} viewBox="0 0 34 34">
        <Path d="M4,20 Q4,4 20,4" stroke={C.greenLight} strokeWidth={0.8} fill="none" opacity={0.5} />
        <Path d="M4,28 Q4,4 28,4" stroke={C.greenLight} strokeWidth={0.4} fill="none" opacity={0.25} />
        <Circle cx={4} cy={4} r={2} fill={C.greenLight} opacity={0.55} />
      </Svg>
    </Animated.View>
  );
};

// ────────────────────────────────────────────────────────────────
// Main Screen
// ────────────────────────────────────────────────────────────────
export const OnboardingScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const yantraOp = useSharedValue(0);
  const glowR = useSharedValue(0);
  const glowOp = useSharedValue(0);

  // Logo — synced with inner petals at 500ms
  const logoScale = useSharedValue(0.8);
  const logoOp = useSharedValue(0);
  const logoBreathe = useSharedValue(1);
  const logoRotZ = useSharedValue(0);
  const logoY = useSharedValue(20);

  const loaderOp = useSharedValue(0);
  const loaderW = useSharedValue(0);
  const loadingTxtOp = useSharedValue(0);

  const goLogin = () => navigation.replace('Login');

  useEffect(() => {
    // Logo blooms WITH inner petals at 500ms
    logoOp.value = withDelay(500, withTiming(1, { duration: 800, easing: Easing.out(Easing.cubic) }));
    logoScale.value = withDelay(500, withTiming(1, { duration: 800, easing: Easing.out(Easing.cubic) }));
    logoRotZ.value = 0;
    logoY.value = withDelay(500, withTiming(0, { duration: 800, easing: Easing.out(Easing.cubic) }));

    // Yantra geometry
    yantraOp.value = withDelay(900, withTiming(1, { duration: 600 }));

    // Center glow
    glowR.value = withDelay(1700, withSpring(CENTER_R, { damping: 10, stiffness: 100 }));
    glowOp.value = withDelay(1700, withTiming(1, { duration: 500 }));

    // Logo breathe
    logoBreathe.value = withDelay(1200,
      withRepeat(
        withSequence(
          withTiming(1.055, { duration: 2100, easing: Easing.inOut(Easing.sin) }),
          withTiming(1, { duration: 2100, easing: Easing.inOut(Easing.sin) }),
        ), -1, true,
      ),
    );

    // Loader
    loaderOp.value = withDelay(2800, withTiming(1, { duration: 350 }));
    loadingTxtOp.value = withDelay(3000, withTiming(1, { duration: 400 }));
    loaderW.value = withDelay(2900,
      withTiming(1, { duration: 2800, easing: Easing.inOut(Easing.quad) }, (done) => {
        if (done) runOnJS(goLogin)();
      }),
    );
  }, []);

  // Animated styles
  const logoWrapStyle = useAnimatedStyle(() => ({
    opacity: logoOp.value,
    transform: [
      { translateY: logoY.value },
      { scale: logoScale.value * logoBreathe.value },
      { rotateZ: `${logoRotZ.value}deg` },
    ],
  }));

  const glowProps = useAnimatedProps(() => ({ r: glowR.value, opacity: glowOp.value }));
  const centerDotProps = useAnimatedProps(() => ({ opacity: glowOp.value }));
  const yantraProps = useAnimatedProps(() => ({ opacity: yantraOp.value }));

  const loaderWrapStyle = useAnimatedStyle(() => ({ opacity: loaderOp.value }));
  const loaderFillStyle = useAnimatedStyle(() => ({ width: `${loaderW.value * 100}%` as any }));
  const loadingTxtStyle = useAnimatedStyle(() => ({ opacity: loadingTxtOp.value }));

  // 12 outer petals — alternating between logo colors
  const OUTER_PETALS = Array.from({ length: 12 }).map((_, i) => ({
    angleDeg: i * 30 - 90,
    tipRadius: MANDALA_R,
    color: i % 2 === 0 ? C.logoGold : C.logoGreen,
    strokeW: 2.5,
    delay: i * 75,
    pathLength: 265,
  }));

  // 6 inner petals — logo gold
  const INNER_PETALS = Array.from({ length: 6 }).map((_, i) => ({
    angleDeg: i * 60 - 75,
    tipRadius: INNER_R,
    color: C.logoGold,
    strokeW: 2.0,
    delay: 500 + i * 75,
    pathLength: 185,
  }));

  // Shatkona (Yantra) triangles
  const tri1 = `${CX},${CY - 55} ${CX + 48},${CY + 27} ${CX - 48},${CY + 27}`;
  const tri2 = `${CX},${CY + 55} ${CX + 48},${CY - 27} ${CX - 48},${CY - 27}`;

  return (
    <View style={s.root}>
      <StatusBar hidden />

      {/*
       * ── Background image ──
       * Replace the solid View below with your image:
       *
       * <Image
       *   source={require('../assets/logo/splace1.png')}
       *   style={StyleSheet.absoluteFill}
       *   resizeMode="cover"
       * />
       */}
      <View style={s.bg} />

      {/* Light overlay — softens bg so mandala pops */}
      <View style={s.overlay} />

      {/* Sonar pulses */}
      <SonarRing delay={0} />
      <SonarRing delay={960} />
      <SonarRing delay={1920} />

      {/* Orbit rings */}
      <OrbitRing r={ORBIT_R_A} dash={5} gap={10} dir={1} startDelay={1400} color="rgba(46,125,50,0.4)" strokeW={0.5} />
      <OrbitRing r={ORBIT_R_B} dash={2} gap={10} dir={-1} startDelay={1400} color="rgba(129,199,132,0.25)" strokeW={0.5} />

      {/* ── Logo — centered on mandala, blooms with inner petals ── */}
      <Animated.View style={[s.logoWrap, logoWrapStyle]}>
        <Image
          source={require('../assets/logo/logo.png')}
          style={s.logoImg}
          resizeMode="contain"
        />
      </Animated.View>

      {/* Main SVG — petals + yantra + center glow */}
      <Svg
        width={width}
        height={height}
        style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}
        pointerEvents="none"
      >
        <Defs>
          <RadialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
            <Stop offset="0%" stopColor={C.logoGold} stopOpacity={0.15} />
            <Stop offset="100%" stopColor={C.logoGreen} stopOpacity={0} />
          </RadialGradient>
        </Defs>

        {/* Ambient glow behind everything */}
        <Circle cx={CX} cy={CY} r={130} fill="url(#centerGlow)" opacity={0.3} />

        {/* Outer petals */}
        {OUTER_PETALS.map((p, i) => <LotusPetal key={`op-${i}`} {...p} />)}

        {/* Inner petals */}
        {INNER_PETALS.map((p, i) => <LotusPetal key={`ip-${i}`} {...p} />)}

        {/* Yantra geometry */}
        <AnimatedG animatedProps={yantraProps}>
          <Polygon points={tri1} fill="none" stroke="rgba(162,116,41,0.4)" strokeWidth={1.5} />
          <Polygon points={tri2} fill="none" stroke="rgba(162,116,41,0.4)" strokeWidth={1.5} />
          <Circle cx={CX} cy={CY} r={45} fill="none" stroke="rgba(25,88,45,0.3)" strokeWidth={1.2} />
          <Circle cx={CX} cy={CY} r={62} fill="none" stroke="rgba(25,88,45,0.2)" strokeWidth={1.2} strokeDasharray="3 7" />
        </AnimatedG>

        {/* Center glow bloom */}
        <AnimatedCircle cx={CX} cy={CY} fill="rgba(46,125,50,0.15)" animatedProps={glowProps} />

        {/* Center accent dot (saffron for contrast) */}
        <AnimatedCircle cx={CX} cy={CY} r={4} fill={C.saffron} animatedProps={centerDotProps} />
      </Svg>

      {/* Corner ornaments */}
      <CornerOrnament x={16} y={20} flipX={false} flipY={false} delay={2400} />
      <CornerOrnament x={width - 50} y={20} flipX={true} flipY={false} delay={2500} />
      <CornerOrnament x={16} y={height - 54} flipX={false} flipY={true} delay={2500} />
      <CornerOrnament x={width - 50} y={height - 54} flipX={true} flipY={true} delay={2600} />

      {/* Loader bar + LOADING text */}
      <Animated.View style={[s.loaderWrap, loaderWrapStyle]}>
        <View style={s.loaderTrack}>
          <Animated.View style={[s.loaderFill, loaderFillStyle]}>
            <View style={s.loaderTip} />
          </Animated.View>
        </View>

        <Animated.Text style={[s.loadingText, loadingTxtStyle]}>
          LOADING
        </Animated.Text>
      </Animated.View>
    </View>
  );
};

// ────────────────────────────────────────────────────────────────
// Styles
// ────────────────────────────────────────────────────────────────
const LOADER_W = width * 0.58;

const s = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: C.bg,
    alignItems: 'center',
    justifyContent: 'center',
  },

  bg: {
    position: 'absolute', top: 0, bottom: 0, left: 0, right: 0,
    backgroundColor: C.bg,
  },

  // Light dark overlay — transparent since bg is white
  overlay: {
    position: 'absolute', top: 0, bottom: 0, left: 0, right: 0,
    backgroundColor: 'transparent',
  },

  // Logo wrapper — positioned below the mandala
  logoWrap: {
    position: 'absolute',
    bottom: 125,
    alignSelf: 'center',
    width: LOGO_SIZE,
    height: LOGO_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logoImg: {
    width: LOGO_SIZE,
    height: LOGO_SIZE,
  },

  logoPlaceholder: {
    width: LOGO_SIZE,
    height: LOGO_SIZE,
    borderRadius: LOGO_SIZE / 2,
    backgroundColor: 'transparent',
  },

  loaderWrap: {
    position: 'absolute',
    bottom: 58,
    width: LOADER_W,
    alignSelf: 'center',
    alignItems: 'center',
  },

  loaderTrack: {
    width: '100%',
    height: 1.5,
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 1,
    overflow: 'hidden',
  },

  loaderFill: {
    height: '100%',
    backgroundColor: C.green,
    borderRadius: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    overflow: 'visible',
  },

  loaderTip: {
    position: 'absolute',
    right: -3,
    top: -2.5,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: C.greenLight,
    shadowColor: C.greenLight,
    shadowRadius: 8,
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 0 },
    elevation: 4,
  },

  loadingText: {
    marginTop: 10,
    fontSize: 10,
    letterSpacing: 4,
    color: C.green,
    fontFamily: 'System',
    fontWeight: '300' as const,
    textAlign: 'center',
  },
});