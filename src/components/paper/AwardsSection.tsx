import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');
const FOREST = '#063A28';
const GOLD = '#B45309';
const WHITE = '#FFFFFF';
const DIVIDER = '#E5E7EB';
const BG_SOFT = '#F9FAFB';

const AWARDS = [
  { title: 'Best Oral\nPresentation', icon: 'trophy-outline' },
  { title: 'Best Poster\nPresentation', icon: 'easel-outline' },
  { title: 'Young Researcher\nAward (Under 35)', icon: 'ribbon-outline' },
  { title: 'Certificate of\nParticipation', icon: 'document-text-outline' },
];

export const AwardsSection = () => {
  return (
    <View style={styles.section}>
      <View style={styles.titleWrap}>
        <Ionicons name="leaf" size={16} color={FOREST} />
        <Text style={styles.sectionTitle}>AWARDS & RECOGNITION</Text>
        <Ionicons name="leaf" size={16} color={FOREST} />
      </View>

      <View style={styles.grid}>
        {AWARDS.map((item, i) => (
          <View key={i} style={styles.card}>
            <View style={styles.iconWrap}>
              <Ionicons name={item.icon} size={28} color={GOLD} />
            </View>
            <Text style={styles.cardTitle}>{item.title}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    backgroundColor: WHITE,
  },
  titleWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    marginBottom: 6,
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
    marginBottom: 4
  },
  card: {
    width: '49%',
    backgroundColor: BG_SOFT,
    borderWidth: 1,
    borderColor: DIVIDER,
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    alignItems: 'center',
  },
  iconWrap: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    backgroundColor: '#FEF3C7', // Light gold
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  cardTitle: {
    fontSize: 10,
    fontWeight: '800',
    color: FOREST,
    textAlign: 'center',
    lineHeight: 14,
  },
});
