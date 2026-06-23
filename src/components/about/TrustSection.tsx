import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const GREEN = '#063A28'; // Deep forest green
const GOLD = '#B45309';  // Warm amber gold
const MUTED = '#6B7280';
const WHITE = '#FFFFFF';

export const TrustSection = () => {
  return (
    <View style={styles.trustSection}>
      <Text style={styles.trustTitle}>ABOUT NAMO GANGE TRUST</Text>
      <Text style={styles.trustSub}>The Parent Organization Behind Arogya Sangoshthi</Text>
      <Text style={styles.trustDesc}>
        Namo Gange Trust is a registered non-profit organization committed to promoting holistic health, wellness and sustainability through integrated healthcare initiatives.
      </Text>

      <View style={styles.bulletList}>
        {['Established with a vision for healthier communities', 'Working across India through impactful initiatives', 'Driven by values of service, compassion and sustainability'].map((text, i) => (
          <View key={i} style={styles.bulletItem}>
            <View style={styles.bulletIconWrap}>
              <Ionicons name="leaf-outline" size={14} color={GREEN} />
            </View>
            <Text style={styles.bulletText}>{text}</Text>
          </View>
        ))}
      </View>

      <ImageBackground
        source={{ uri: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800' }}
        style={styles.missionVisionCard}
        imageStyle={styles.missionBgImage}
      >
        <View style={styles.missionOverlay}>
          <Text style={styles.mvTitle}>Our Vision</Text>
          <Text style={styles.mvText}>Healthy People. Healthy Communities. Sustainable Future.</Text>

          <View style={styles.mvDivider} />

          <Text style={styles.mvTitle}>Our Mission</Text>
          <Text style={styles.mvText}>
            To promote holistic health, wellness and sustainability through integrated healthcare, education, research, community empowerment and environmental stewardship.
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  trustSection: {
    paddingHorizontal: 6,
    paddingVertical: 6,
    backgroundColor: '#F9FAFB', // softer background
  },
  trustTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: GREEN,
    marginBottom: 2,
    letterSpacing: -0.5,
  },
  trustSub: {
    fontSize: 11,
    fontWeight: '700',
    color: GOLD,
    marginBottom: 8,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  trustDesc: {
    fontSize: 13,
    color: MUTED,
    lineHeight: 18,
    marginBottom: 16,
  },
  bulletList: {
    marginBottom: 6,
    gap: 8,
  },
  bulletItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  bulletIconWrap: {
    backgroundColor: '#D1FAE5',
    padding: 4,
    borderRadius: 12,
    marginRight: 10,
    marginTop: 2,
  },
  bulletText: {
    flex: 1,
    fontSize: 13,
    color: '#374151',
    fontWeight: '500',
    lineHeight: 18,
  },
  missionVisionCard: {
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: GREEN,
  },
  missionBgImage: {
    opacity: 0.15, // dim the image so white text pops
  },
  missionOverlay: {
    padding: 10,
  },
  mvTitle: {
    color: '#A7F3D0', // light sage/mint green
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
    marginBottom: 2,
    textTransform: 'uppercase',
  },
  mvText: {
    color: WHITE,
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
  },
  mvDivider: {
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.15)',
    marginVertical: 6,
  },
});
