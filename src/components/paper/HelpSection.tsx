import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const FOREST = '#063A28';
const MUTED = '#6B7280';

export const HelpSection = () => {
  return (
    <View style={styles.section}>
      <View style={styles.card}>
        <View style={styles.left}>
          <View style={styles.iconWrap}>
            <Ionicons name="help-buoy-outline" size={20} color={FOREST} />
          </View>
          <View>
            <Text style={styles.title}>NEED HELP?</Text>
            <Text style={styles.desc}>Reach out to our team for queries.</Text>
          </View>
        </View>
        
        <View style={styles.contactWrap}>
          <View style={styles.contactItem}>
            <Ionicons name="mail-outline" size={14} color={FOREST} />
            <Text style={styles.contactText}>papers@arogyasanghosthi.com</Text>
          </View>
          <View style={styles.contactItem}>
            <Ionicons name="call-outline" size={14} color={FOREST} />
            <Text style={styles.contactText}>+91 98765 43210</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    paddingHorizontal: 6,
    paddingTop: 6,
    paddingBottom: 24,
    backgroundColor: '#FFFFFF',
  },
  card: {
    backgroundColor: '#F0FDF4',
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D1FAE5',
    gap: 12,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  iconWrap: {
    backgroundColor: '#D1FAE5',
    padding: 6,
    borderRadius: 8,
  },
  title: {
    fontSize: 12,
    fontWeight: '800',
    color: FOREST,
    letterSpacing: 0.5,
  },
  desc: {
    fontSize: 10,
    color: MUTED,
    marginTop: 2,
  },
  contactWrap: {
    gap: 6,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#D1FAE5',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  contactText: {
    fontSize: 11,
    color: FOREST,
    fontWeight: '600',
  },
});
