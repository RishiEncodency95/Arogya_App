import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Animated,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

// ── Design Tokens ──────────────────────────────────────────────
const FOREST = '#063A28';   // deep forest green – primary brand
const EMERALD = '#065F46';   // emerald – secondary surfaces
const SAGE = '#D1FAE5';   // light sage – chip bg
const GOLD = '#B45309';   // warm amber gold – accent
const GOLD_LT = '#FEF3C7';   // gold tint – stat bg
const INK = '#111827';   // near-black text
const MUTED = '#6B7280';   // body grey
const WHITE = '#FFFFFF';
const DIVIDER = '#E5E7EB';

// ── Stats Data ──────────────────────────────────────────────────
const STATS = [
  { icon: 'book-outline', num: '18+', label: 'Editions' },
  { icon: 'people-outline', num: '1000+', label: 'Delegates' },
  { icon: 'globe-outline', num: '25+', label: 'Countries' },
  { icon: 'desktop-outline', num: '100+', label: 'Sessions' },
];

// ── Animated Stat Card ──────────────────────────────────────────
const StatCard = ({
  icon,
  num,
  label,
  delay,
}: {
  icon: string;
  num: string;
  label: string;
  delay: number;
}) => {
  const anim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(anim, {
      toValue: 1,
      duration: 500,
      delay,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View
      style={[
        styles.statCard,
        {
          opacity: anim,
          transform: [
            {
              translateY: anim.interpolate({
                inputRange: [0, 1],
                outputRange: [16, 0],
              }),
            },
          ],
        },
      ]}>
      {/* Icon bubble */}
      <View style={styles.statIconBubble}>
        <Ionicons name={icon as any} size={18} color={FOREST} />
      </View>

      {/* Divider */}
      <View style={styles.statDividerV} />

      {/* Text */}
      <View style={styles.statTextCol}>
        <Text style={styles.statNum}>{num}</Text>
        <Text style={styles.statLabel}>{label}</Text>
      </View>
    </Animated.View>
  );
};

// ── Main Component ──────────────────────────────────────────────
export const HeroSection = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(24)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 600, useNativeDriver: true }),
      Animated.timing(slideAnim, { toValue: 0, duration: 600, useNativeDriver: true }),
    ]).start();
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scroll}>

      {/* ── Hero Image with overlay badge ── */}
      <View style={styles.imageWrap}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1585938389612-a552a28d6914?auto=format&fit=crop&q=80&w=900',
          }}
          style={styles.heroImage}
          resizeMode="cover"
        />

        {/* Dark gradient overlay at bottom */}
        <View style={styles.imageGradient} />

        {/* Floating pill badge */}
        <View style={styles.badgePill}>
          <View style={styles.badgeDot} />
          <Text style={styles.badgeText}>INDIA'S PREMIER HEALTHCARE CONFERENCE</Text>
        </View>
      </View>

      {/* ── Content Card ── */}
      <Animated.View
        style={[
          styles.contentCard,
          { opacity: fadeAnim, transform: [{ translateY: slideAnim }] },
        ]}>

        {/* Tag row */}
        <View style={styles.tagRow}>
          <View style={styles.tagChip}>
            <Text style={styles.tagChipText}>ABOUT US</Text>
          </View>
          <Text style={styles.tagYear}>18th Edition · 2025</Text>
        </View>

        {/* Headline */}
        <Text style={styles.headline}>
          Our Purpose. <Text style={styles.headlineAccent}>Our Promise.</Text> Our Planet.
        </Text>

        {/* Thin rule */}
        <View style={styles.rule} />

        {/* Description */}
        <Text style={styles.desc}>
          Arogya Sangoshthi unites Modern Medicine, AYUSH, Technology and
          Traditional Wisdom — creating a convergence that shapes the future of
          integrated healthcare in India and beyond.
        </Text>
      </Animated.View>

      {/* ── Stats Grid ── */}
      <View style={styles.statsSection}>
        <Text style={styles.statsSectionLabel}>BY THE NUMBERS</Text>
        <View style={styles.statsGrid}>
          {STATS.map((s, i) => (
            <StatCard key={s.label} {...s} delay={i * 80} />
          ))}
        </View>
      </View>

    </ScrollView>
  );
};

// ── Styles ──────────────────────────────────────────────────────
const styles = StyleSheet.create({
  scroll: {
    backgroundColor: WHITE,
    paddingBottom: 28,
  },

  /* Image */
  imageWrap: {
    position: 'relative',
    width: '100%',
    height: 240,
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  imageGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 100,
    // Simulated gradient via semi-transparent bg
    backgroundColor: 'rgba(6,58,40,0.55)',
  },
  badgePill: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
    gap: 6,
  },
  badgeDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#34D399',
  },
  badgeText: {
    color: WHITE,
    fontSize: 8,
    fontWeight: '700',
    letterSpacing: 1,
  },

  /* Content Card */
  contentCard: {
    marginHorizontal: 6,
    marginTop: 5,
    backgroundColor: WHITE,
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
    borderWidth: 1,
    borderColor: '#E5E7EB', // A soft grey border provides the top definition that Android shadows lack
    zIndex: 10,
  },

  /* Tag row */
  tagRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  tagChip: {
    backgroundColor: SAGE,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 1,
  },
  tagChipText: {
    color: FOREST,
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 1,
  },
  tagYear: {
    fontSize: 10,
    color: MUTED,
    fontWeight: '500',
  },

  /* Headline */
  headline: {
    fontSize: 20,
    fontWeight: '800',
    color: FOREST,
    // lineHeight: 26,
    letterSpacing: -0.5,
    marginBottom: -8,
    marginTop: 3,
  },
  headlineAccent: {
    color: GOLD,
  },

  /* Rule */
  rule: {
    height: 2,
    width: '100%',
    backgroundColor: GOLD,
    borderRadius: 2,
    marginTop: -14,
    marginBottom: 4,
  },

  /* Desc */
  desc: {
    fontSize: 13.5,
    color: MUTED,
    lineHeight: 18,
    fontWeight: '400',
  },

  /* Stats */
  statsSection: {
    marginTop: 6,
    paddingHorizontal: 6,
  },
  statsSectionLabel: {
    fontSize: 9,
    fontWeight: '800',
    color: MUTED,
    letterSpacing: 2,
    marginBottom: 4,
    marginLeft: 6,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  statCard: {
    width: (width - 18) / 2, // 2 items per row, accounting for section padding (12) and gap (6)
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: WHITE,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: DIVIDER,
    paddingVertical: 6,
    paddingHorizontal: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
    gap: 3,
  },
  statIconBubble: {
    width: 33,
    height: 33,
    borderRadius: 20,
    backgroundColor: GOLD_LT,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statDividerV: {
    width: 2,
    height: 28,
    backgroundColor: DIVIDER,
  },
  statTextCol: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  statNum: {
    fontSize: 18,
    fontWeight: '800',
    color: FOREST,
    letterSpacing: -0.5,
  },
  statLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: MUTED,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
});