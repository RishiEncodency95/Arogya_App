import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const { width } = Dimensions.get('window');
const FOREST = '#063A28';
const GOLD = '#B45309';
const WHITE = '#FFFFFF';
const MUTED = '#6B7280';
const DIVIDER = '#E5E7EB';
const BG_SOFT = '#F9FAFB';

const TOPICS = [
  { title: 'AYUSH Systems', desc: 'Traditional medicine, integrative approaches, clinical research', icon: 'heart' },
  { title: 'Modern Medicine', desc: 'Advancements in diagnostics, therapeutics & patient care', icon: 'activity' },
  { title: 'Pharma Innovation', desc: 'Drug discovery, formulation, biotechnology & more', icon: 'target' },
  { title: 'Wellness & Lifestyle', desc: 'Nutrition, yoga, mental health, well-being & lifestyle', icon: 'sun' },
  { title: 'Research & Academia', desc: 'Basic science, clinical studies, epidemiology & public health', icon: 'book-open' },
  { title: 'Healthcare Technology', desc: 'Digital health, AI, IoT, medical devices & innovations', icon: 'monitor' },
  { title: 'Public Health', desc: 'Community health, policy, environment & sanitation', icon: 'users' },
  { title: 'Sustainable Health', desc: 'Environment, biodiversity, one health & sustainability', icon: 'globe' },
];

export const TopicsSection = () => {
  return (
    <View style={styles.section}>
      <View style={styles.titleWrap}>
        <Icon name="feather" size={16} color={FOREST} />
        <Text style={styles.sectionTitle}>TOPICS OF INTEREST</Text>
        <Icon name="feather" size={16} color={FOREST} />
      </View>

      <View style={styles.grid}>
        {TOPICS.map((item, i) => (
          <View key={i} style={styles.card}>
            <View style={styles.iconWrap}>
              <Icon name={item.icon} size={18} color={FOREST} />
            </View>
            <View style={styles.textWrap}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDesc}>{item.desc}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    paddingHorizontal: 6,
    paddingVertical: 12,
    backgroundColor: WHITE,
  },
  titleWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 12,
  },
  sectionTitle: {
    color: FOREST,
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 1,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 6,
  },
  card: {
    width: '49%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: BG_SOFT,
    borderWidth: 1,
    borderColor: DIVIDER,
    borderRadius: 12,
    padding: 6,
  },
  iconWrap: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 6,
  },
  textWrap: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 10,
    fontWeight: '800',
    color: FOREST,
    marginBottom: 2,
    letterSpacing: -0.3,
  },
  cardDesc: {
    fontSize: 8,
    color: MUTED,
    lineHeight: 10,
  },
});
