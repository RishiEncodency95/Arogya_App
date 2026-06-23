import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const FOREST = '#063A28';
const GOLD = '#B45309';
const MUTED = '#4B5563';
const WHITE = '#FFFFFF';

export const PaperHeroSection = () => {
  return (
    <View style={styles.heroSection}>
      <View style={styles.textContent}>
        <Text style={styles.tag}>SHARE KNOWLEDGE. INSPIRE CHANGE.</Text>
        <Text style={styles.title}>
          Paper <Text style={styles.titleGold}>Presentation</Text>
        </Text>

        <View style={styles.ruleWrap}>
          <View style={styles.rule} />
        </View>

        <Text style={styles.desc}>
          A platform for researchers, academicians, practitioners and students to showcase innovative ideas, original research and best practices that contribute to the future of healthcare and wellness.
        </Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800' }}
          style={styles.heroImage}
        />
        <View style={styles.badge}>
          <Text style={styles.badgeText}>Present Your{'\n'}Research.{'\n'}Create Impact.</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heroSection: {
    backgroundColor: '#FAF9F6', // Off-white warm background
    paddingBottom: 16,
  },
  textContent: {
    paddingHorizontal: 6,
    paddingTop: 12,
    paddingBottom: 12,
  },
  tag: {
    fontSize: 10,
    fontWeight: '800',
    color: FOREST,
    letterSpacing: 1,
    marginBottom: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: FOREST,
    // lineHeight: 28,
    // letterSpacing: -1,
  },
  titleGold: {
    fontSize: 20,
    fontWeight: '600',
    color: '#B7821A',
    // lineHeight: 36,
    letterSpacing: -1,
    marginBottom: 2,
  },
  ruleWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
    marginTop: 4,
  },
  rule: {
    width: "100%",
    height: 2,
    backgroundColor: '#B7821A',
  },
  desc: {
    fontSize: 13,
    color: MUTED,
    lineHeight: 18,
    fontWeight: '500',
  },
  imageContainer: {
    width: '100%',
    height: 180,
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 40,
  },
  badge: {
    position: 'absolute',
    bottom: -15,
    left: 16,
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: FOREST,
    borderWidth: 3,
    borderColor: WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
    zIndex: 10,
  },
  badgeText: {
    color: WHITE,
    fontSize: 8,
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: 12,
  },
});
