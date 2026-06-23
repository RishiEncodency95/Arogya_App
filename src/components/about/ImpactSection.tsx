import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const { width } = Dimensions.get('window');
const FOREST = '#063A28';
const GOLD = '#B45309';
const GOLD_LT = '#FEF3C7';
const MUTED = '#6B7280';
const WHITE = '#FFFFFF';
const DIVIDER = '#E5E7EB';

export const ImpactSection = () => {
  return (
    <View style={styles.impactSection}>
      <Text style={styles.impactMainTitle}>OUR IMPACT SO FAR</Text>
      <View style={styles.impactGrid}>
        {[
          { num: '1000+', text: 'Health Camps', icon: 'briefcase' },
          { num: '50000+', text: 'Beneficiaries', icon: 'users' },
          { num: '25+', text: 'States Covered', icon: 'map-pin' },
          { num: '100+', text: 'Partners', icon: 'link' }, // Changed to link to ensure Feather compatibility
          { num: '100+', text: 'Projects Executed', icon: 'clipboard' },
          { num: 'Countless', text: 'Lives Touched', icon: 'heart' },
        ].map((item, i) => (
          <View key={i} style={styles.impactItem}>
            <View style={styles.impactIconWrap}>
              <Icon name={item.icon} size={16} color={FOREST} />
            </View>
            <View style={styles.impactTextWrap}>
              <Text style={styles.impactNum}>{item.num}</Text>
              <Text style={styles.impactText}>{item.text}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  impactSection: {
    paddingHorizontal: 6,
    paddingVertical: 6,
    backgroundColor: WHITE,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: DIVIDER,
    marginBottom: 12, // Tightened from 40
  },
  impactMainTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: FOREST,
    textAlign: 'center',
    marginBottom: 6, // Tightened from 24
    letterSpacing: 0.5,
  },
  impactGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 6, // Tightened gap for rows
  },
  impactItem: {
    width: '49%', // Exactly 50% (minus 1% for middle spacing) so they are perfectly identical
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB', // Soft card background
    padding: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: DIVIDER,
  },
  impactIconWrap: {
    marginRight: 10,
    backgroundColor: GOLD_LT,
    padding: 8,
    borderRadius: 10,
  },
  impactTextWrap: {
    flex: 1,
  },
  impactNum: {
    fontSize: 15,
    fontWeight: '800',
    color: FOREST,
    marginBottom: 2,
    letterSpacing: -0.5,
  },
  impactText: {
    fontSize: 10,
    color: MUTED,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});
