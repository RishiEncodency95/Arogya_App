import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');
const FOREST = '#063A28';
const GOLD = '#B45309';
const WHITE = '#FFFFFF';

export const FocusSection = () => {
  return (
    <View style={styles.focusSection}>
      <Text style={styles.focusTitle}>OUR KEY FOCUS AREAS</Text>
      <View style={styles.focusGrid}>
        {[
          { label: 'Holistic Health', icon: 'heart-outline' },
          { label: 'Preventive Care', icon: 'medkit-outline' },
          { label: 'Sustainable Environment', icon: 'leaf-outline' },
          { label: 'Healthy Communities', icon: 'people-outline' },
          { label: 'Knowledge & Innovation', icon: 'bulb-outline' },
          { label: 'Compassion & Service', icon: 'hand-left-outline' },
        ].map((item, i) => (
          <View key={i} style={styles.focusItem}>
            <Ionicons name={item.icon} size={20} color={GOLD} />
            <Text style={styles.focusLabel}>{item.label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  focusSection: {
    backgroundColor: FOREST,
    paddingHorizontal: 6,
    paddingVertical: 6,
  },
  focusTitle: {
    color: '#A7F3D0', // light sage green matches the premium theme
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
    marginBottom: 12,
  },
  focusGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  focusItem: {
    width: (width - 44) / 2, // 16 padding on each side (32) + 12 gap = 44
    flexDirection: 'row',
    alignItems: 'center',
  },
  focusLabel: {
    color: WHITE,
    fontSize: 12,
    fontWeight: '600',
    marginLeft: 8,
    flex: 1,
    lineHeight: 16,
  },
});
