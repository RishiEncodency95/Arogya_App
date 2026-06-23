import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const FOREST = '#063A28';
const GOLD = '#B45309';
const WHITE = '#FFFFFF';
const MUTED = '#6B7280';
const DIVIDER = '#E5E7EB';
const BG_SOFT = '#F9FAFB';

export const GuidelinesProcessSection = () => {
  return (
    <View style={styles.section}>
      
      {/* GUIDELINES CARD */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Icon name="file-text" size={18} color={FOREST} />
          <Text style={styles.cardTitle}>GUIDELINES FOR AUTHORS</Text>
        </View>

        <View style={styles.list}>
          {[
            'Original, unpublished work is invited.',
            'Abstract length: Up to 300 words.',
            'Full paper (if selected): 2500 - 4000 words.',
            'Format: MS Word, A4 size, 1.5 line spacing.',
            'Referencing: Vancouver Style.',
            'Presentations: Oral / Poster.',
            'Best Paper Awards for outstanding presentations.'
          ].map((text, i) => (
            <View key={i} style={styles.listItem}>
              <Icon name="check-circle" size={14} color={FOREST} style={styles.listIcon} />
              <Text style={styles.listText}>{text}</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>DOWNLOAD GUIDELINES</Text>
          <Icon name="download" size={14} color={WHITE} />
        </TouchableOpacity>
      </View>

      {/* PROCESS CARD */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Icon name="list" size={18} color={FOREST} />
          <Text style={styles.cardTitle}>SUBMISSION PROCESS</Text>
        </View>

        <View style={styles.processList}>
          {[
            { step: '1', title: 'STEP 1', desc: 'Submit your abstract through the online portal.' },
            { step: '2', title: 'STEP 2', desc: 'Receive acceptance notification via email.' },
            { step: '3', title: 'STEP 3', desc: 'Submit your full paper (if selected).' },
            { step: '4', title: 'STEP 4', desc: 'Present your paper at Arogya Sangoshthi 2026.' },
          ].map((item, i) => (
            <View key={i} style={styles.processItem}>
              <View style={styles.stepBadge}>
                <Text style={styles.stepNum}>{item.step}</Text>
              </View>
              <View style={styles.processTextWrap}>
                <Text style={styles.stepTitle}>{item.title}</Text>
                <Text style={styles.stepDesc}>{item.desc}</Text>
              </View>
            </View>
          ))}
        </View>

        <TouchableOpacity style={[styles.btn, { marginTop: 16 }]}>
          <Text style={styles.btnText}>SUBMIT ABSTRACT NOW</Text>
          <Icon name="arrow-right" size={14} color={WHITE} />
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    paddingHorizontal: 6,
    paddingBottom: 12,
    backgroundColor: WHITE,
    gap: 8,
  },
  card: {
    backgroundColor: BG_SOFT,
    borderWidth: 1,
    borderColor: DIVIDER,
    borderRadius: 12,
    padding: 12,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 12,
    fontWeight: '800',
    color: FOREST,
    letterSpacing: 0.5,
  },
  list: {
    gap: 8,
    marginBottom: 16,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  listIcon: {
    marginTop: 2,
    marginRight: 8,
  },
  listText: {
    flex: 1,
    fontSize: 11,
    color: '#374151',
    lineHeight: 16,
  },
  btn: {
    backgroundColor: FOREST,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 8,
    gap: 8,
  },
  btnText: {
    color: WHITE,
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  processList: {
    gap: 12,
  },
  processItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  stepBadge: {
    width: 24,
    height: 24,
    borderRadius: 8,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepNum: {
    color: FOREST,
    fontSize: 10,
    fontWeight: '800',
  },
  processTextWrap: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 10,
    fontWeight: '800',
    color: FOREST,
    marginBottom: 2,
    letterSpacing: 0.5,
  },
  stepDesc: {
    fontSize: 11,
    color: '#374151',
    lineHeight: 14,
  },
});
