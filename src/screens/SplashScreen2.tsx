/**
 * OnboardingScreen.tsx — Arogya Sangoshthi
 * Modern Breath of Life (Prana) Splash Screen — Ultimate Premium Re-imagination
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
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const { width, height } = Dimensions.get('window');

// ── New Organic Luxury Palette ─────────────────────────────
const C = {
  bg: '#FCFDFB',            // Super clean pristine off-white
  goldPremium: '#BF9043',   // Metallic refined gold
  forestGreen: '#1B5E20',   // Deep spiritual green
  mintGlow: '#E8F5E9',      // Soft ambient pulse backing
  textMuted: '#5F7D61',     // Soft green-gray for elegant typography
};

// ── Perfect Visual Balance Alignment ───────────────────────
const CX = width / 2;
const CY = height * 0.44;   // Golden ratio placement for focus point
const LOGO_SIZE = 190;      // Enhanced presence for the central brand

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedG = Animated.createAnimatedComponent(G);

// ────────────────────────────────────────────────────────────────
// Individual Premium Ray Element
// ────────────────────────────────────────────────────────────────
type RayProps = {
  angle: number;
  delay: number;
  color: string;
};

const PetalRay = ({ angle, delay, color }: RayProps) => {
  const scaleY = useSharedValue(0.1);
  const opacity = useSharedValue(0);

  useEffect(() => {
    scaleY.value = withDelay(delay, withSpring(1, { damping: 14, stiffness: 60 }));
    opacity.value = withDelay(delay, withTiming(0.7, { duration: 600 }));
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { rotate: `${angle}deg` },
      { scaleY: scaleY.value },
    ],
    opacity: opacity.value,
  }));

  return (
    <Animated.View style={[s.rayBase, animatedStyle]}>
      <View style={[s.rayFinial, { backgroundColor: color }]} />
    </Animated.View>
  );
};

// ────────────────────────────────────────────────────────────────
// Screen Component
// ────────────────────────────────────────────────────────────────
export const OnboardingScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  // Shared Animation Values
  const auraScale = useSharedValue(0.5);
  const auraOp = useSharedValue(0);
  const logoScale = useSharedValue(0.4);
  const logoOp = useSharedValue(0);
  const logoBreathe = useSharedValue(1);
  const ringRotation = useSharedValue(0);
  
  const bottomUIOp = useSharedValue(0);
  const progressBarWidth = useSharedValue(0);

  const goLogin = () => navigation.replace('Login');

  useEffect(() => {
    // 1. Core Ambient Sunburst Activation
    auraOp.value = withTiming(1, { duration: 800 });
    auraScale.value = withSpring(1, { damping: 15, stiffness: 45 });

    // 2. Central Brand Identity Pop (Perfect Sync at 500ms)
    logoOp.value = withDelay(500, withTiming(1, { duration: 700 }));
    logoScale.value = withDelay(500, withSpring(1, { damping: 11, stiffness: 80 }));

    // 3. Subtle Infinite Floating/Breathing Animation
    logoBreathe.value = withDelay(1300, withRepeat(
      withSequence(
        withTiming(1.05, { duration: 2200, easing: Easing.inOut(Easing.sin) }),
        withTiming(1, { duration: 2200, easing: Easing.inOut(Easing.sin) })
      ), -1, true
    ));

    // 4. Fine-line Ring Rotation
    ringRotation.value = withRepeat(
      withTiming(1, { duration: 35000, easing: Easing.linear }),
      -1, false
    );

    // 5. Minimalist Bottom Loader Sequence
    bottomUIOp.value = withDelay(2000, withTiming(1, { duration: 600 }));
    progressBarWidth.value = withDelay(2200, withTiming(1, { duration: 3200, easing: Easing.inOut(Easing.quad) }, (done) => {
      if (done) runOnJS(goLogin)();
    }));
  }, []);

  // Animated Styles Coordination
  const animatedAura = useAnimatedStyle(() => ({
    transform: [{ scale: auraScale.value }],
    opacity: auraOp.value,
  }));

  const animatedLogo = useAnimatedStyle(() => ({
    transform: [{ scale: logoScale.value * logoBreathe.value }],
    opacity: logoOp.value,
  }));

  const animatedRing = useAnimatedStyle(() => ({
    transform: [{ rotate: `${ringRotation.value * 360}deg` }],
  }));

  const animatedBottomUI = useAnimatedStyle(() => ({
    opacity: bottomUIOp.value,
  }));

  const animatedProgress = useAnimatedStyle(() => ({
    width: `${progressBarWidth.value * 100}%` as any,
  }));

  // Generating 16 mathematically perfect clean structural rays
  const RAYS = Array.from({ length: 16 }).map((_, i) => ({
    angle: i * (360 / 16),
    delay: 300 + (i % 4) * 100, // Elegant staggered burst ripple
    color: i % 2 === 0 ? C.goldPremium : C.forestGreen,
  }));

  return (
    <View style={s.root}>
      <StatusBar barStyle="dark-content" backgroundColor={C.bg} />

      {/* Background Ambience Layers */}
      <View style={s.solidBackground} />
      
      {/* Central Visual Cluster Base */}
      <View style={[s.centerAnchoredContainer, { top: CY, left: CX }]}>
        
        {/* Layer 1: Soft Volumetric Radial Aura backing */}
        <Animated.View style={[s.ambientGlowDisk, animatedAura]} />

        {/* Layer 2: Geometric Soft Ray Burst */}
        {RAYS.map((ray, index) => (
          <PetalRay key={`ray-${index}`} angle={ray.angle} delay={ray.delay} color={ray.color} />
        ))}

        {/* Layer 3: Dynamic Technical Ring Intersect */}
        <Animated.View style={[s.spinningRingWrapper, animatedRing]}>
          <Svg width={230} height={230} viewBox="0 0 100 100">
            <Circle cx="50" cy="50" r="46" fill="none" stroke="rgba(191, 144, 67, 0.2)" strokeWidth="0.6" />
            <Circle cx="50" cy="50" r="46" fill="none" stroke={C.forestGreen} strokeWidth="0.8" strokeDasharray="8 25 4 15" opacity="0.6" />
          </Svg>
        </Animated.View>

        {/* Layer 4: Brand Identity Centerpiece */}
        <Animated.View style={[s.logoFrame, animatedLogo]}>
          <View style={s.logoCardBody}>
            <Image
              source={require('../assets/logo/logo.png')} // Kept exactly identical path
              style={s.brandImage}
              resizeMode="contain"
            />
          </View>
        </Animated.View>

      </View>

      {/* Sophisticated Minimalist Footer Controls */}
      <Animated.View style={[s.footerContainer, animatedBottomUI]}>
        <Text style={s.brandTitle}>AROGYA SANGOSHTHI</Text>
        <Text style={s.brandSubtitle}>Nurturing Wellness, Sustaining Life</Text>
        
        <View style={s.progressTrack}>
          <Animated.View style={[s.progressFill, animatedProgress]} />
        </View>
      </Animated.View>
    </View>
  );
};

// ────────────────────────────────────────────────────────────────
// Polished Component Stylesheet
// ────────────────────────────────────────────────────────────────
const s = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: C.bg,
  },
  solidBackground: {
    position: 'absolute', top: 0, bottom: 0, left: 0, right: 0,
    backgroundColor: C.bg,
  },
  centerAnchoredContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ambientGlowDisk: {
    position: 'absolute',
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: C.mintGlow,
    opacity: 0.6,
  },
  rayBase: {
    position: 'absolute',
    width: 2,
    height: 210,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  rayFinial: {
    width: 3,
    height: 16,
    borderRadius: 1.5,
  },
  spinningRingWrapper: {
    position: 'absolute',
    width: 230,
    height: 230,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoFrame: {
    position: 'absolute',
    width: LOGO_SIZE,
    height: LOGO_SIZE,
    shadowColor: C.forestGreen,
    shadowRadius: 16,
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },
  logoCardBody: {
    width: '100%',
    height: '100%',
    borderRadius: LOGO_SIZE / 2,
    backgroundColor: '#FFFFFF',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(27, 94, 32, 0.05)',
  },
  brandImage: {
    width: '88%',
    height: '88%',
  },
  footerContainer: {
    position: 'absolute',
    bottom: 60,
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  brandTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: C.forestGreen,
    letterSpacing: 4,
    textAlign: 'center',
    marginBottom: 4,
  },
  brandSubtitle: {
    fontSize: 10,
    fontWeight: '400',
    color: C.textMuted,
    letterSpacing: 1,
    textAlign: 'center',
    opacity: 0.8,
    marginBottom: 24,
  },
  progressTrack: {
    width: width * 0.45,
    height: 3,
    backgroundColor: 'rgba(27, 94, 32, 0.06)',
    borderRadius: 1.5,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: C.goldPremium,
    borderRadius: 1.5,
  },
});