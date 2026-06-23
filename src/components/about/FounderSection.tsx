import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const GREEN = '#064E3B';
const GOLD = '#D97706';

export const FounderSection = () => {
  return (
    <View style={styles.founderSection}>
      <View style={styles.founderHeader}>
        <View style={styles.founderImageWrap}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200' }}
            style={styles.founderImage}
          />
        </View>
        <View style={styles.founderTitles}>
          <Text style={styles.founderTag}>ABOUT THE FOUNDER</Text>
          <Text style={styles.founderName}>PANKAJ JAIN</Text>
          <Text style={styles.founderRole}>Founder, Namo Gange Trust</Text>
        </View>
      </View>
      <Text style={styles.founderBio}>
        A visionary leader with a deep commitment to holistic health, sustainability and nation building. His mission is to create a healthier India by integrating ancient wisdom with modern science, empowering communities and driving meaningful change.
      </Text>
      <View style={styles.founderMessageWrap}>
        <Text style={styles.messageTag}>FOUNDER'S MESSAGE</Text>
        <Text style={styles.messageText}>
          "True wellness is the balance of body, mind, society and nature. Through Arogya Sangoshthi and Namo Gange Trust, we aim to inspire collective action for a healthier and sustainable Bharat."
        </Text>
        <Text style={styles.messageSign}>– Pankaj Jain</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  founderSection: {
    backgroundColor: GREEN,
    padding: 16,
    borderTopLeftRadius: 40,
    marginTop: -20,
  },
  founderHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  founderImageWrap: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: GOLD,
    overflow: 'hidden',
    marginRight: 16,
  },
  founderImage: {
    width: '100%',
    height: '100%',
  },
  founderTitles: {
    flex: 1,
  },
  founderTag: {
    color: '#A7F3D0',
    fontSize: 10,
    letterSpacing: 1,
    fontWeight: '700',
    marginBottom: 2,
  },
  founderName: {
    color: GOLD,
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 2,
  },
  founderRole: {
    color: '#fff',
    fontSize: 12,
  },
  founderBio: {
    color: '#D1FAE5',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 8,
  },
  founderMessageWrap: {
    borderLeftWidth: 3,
    borderLeftColor: GOLD,
    paddingLeft: 16,
  },
  messageTag: {
    color: '#A7F3D0',
    fontSize: 11,
    letterSpacing: 1,
    fontWeight: '700',
    marginBottom: 2,
  },
  messageText: {
    color: '#fff',
    fontSize: 13,
    fontStyle: 'italic',
    lineHeight: 18,
    marginBottom: 6,
  },
  messageSign: {
    color: GOLD,
    fontSize: 13,
    fontWeight: '700',
  },
});
