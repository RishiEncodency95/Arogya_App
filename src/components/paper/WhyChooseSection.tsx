import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const FOREST = '#063A28';
const GOLD = '#B45309';
const WHITE = '#FFFFFF';

const FEATURES = [
  { title: 'Interdisciplinary\nPlatform', icon: 'people-outline' },
  { title: 'Expert Review &\nFeedback', icon: 'chatbubbles-outline' },
  { title: 'High Visibility &\nNetworking', icon: 'globe-outline' },
  { title: 'Publication\nOpportunities', icon: 'book-outline' },
  { title: 'Career Growth &\nRecognition', icon: 'trending-up-outline' },
];

export const WhyChooseSection = () => {
  return (
    <View style={styles.section}>
      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>WHY CHOOSE AROGYA SANGOSHTHI FOR YOUR RESEARCH?</Text>
        
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          {FEATURES.map((item, i) => (
            <View key={i} style={styles.featureItem}>
              <View style={styles.iconCircle}>
                <Ionicons name={item.icon} size={24} color={WHITE} />
              </View>
              <Text style={styles.featureTitle}>{item.title}</Text>
            </View>
          ))}
        </ScrollView>
        <Text style={styles.footnote}>* Selected papers may be considered for publication in our partner journals.</Text>
      </View>

      <View style={styles.calloutCard}>
        <Text style={styles.calloutSub}>Be a part of insightful sessions and meaningful discussions.</Text>
        <Text style={styles.calloutTitle}>Share your research.{'\n'}Make an impact!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    paddingHorizontal: 6,
    paddingBottom: 12,
    backgroundColor: WHITE,
  },
  banner: {
    backgroundColor: FOREST,
    borderRadius: 12,
    paddingVertical: 12,
    marginBottom: -30, // overlap effect
  },
  bannerTitle: {
    color: WHITE,
    fontSize: 12,
    fontWeight: '800',
    textAlign: 'center',
    letterSpacing: 1,
    marginBottom: 16,
    paddingHorizontal: 6,
  },
  scrollContent: {
    paddingHorizontal: 6,
    gap: 12,
    paddingBottom: 10,
  },
  featureItem: {
    alignItems: 'center',
    width: 90,
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  featureTitle: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 9,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 12,
  },
  footnote: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 8,
    textAlign: 'center',
    marginTop: 6,
  },
  calloutCard: {
    backgroundColor: WHITE,
    marginHorizontal: 6,
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  calloutSub: {
    fontSize: 10,
    color: '#4B5563',
    lineHeight: 14,
    marginBottom: 4,
    fontWeight: '500',
  },
  calloutTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: FOREST,
    lineHeight: 20,
  },
});
