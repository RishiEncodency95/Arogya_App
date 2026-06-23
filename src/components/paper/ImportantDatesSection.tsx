import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const FOREST = '#063A28';
const GOLD = '#B45309';
const WHITE = '#FFFFFF';

const DATES = [
  { title: 'Abstract Submission Starts', date: '25 May 2026', icon: 'file-text' },
  { title: 'Last Date for Abstract Submission', date: '25 July 2026', icon: 'calendar' },
  { title: 'Acceptance Notification', date: '10 August 2026', icon: 'mail' },
  { title: 'Full Paper Submission (If Selected)', date: '25 August 2026', icon: 'upload-cloud' },
  { title: 'Presentation Dates', date: '10 - 12 Oct 2026', icon: 'pie-chart' },
];

export const ImportantDatesSection = () => {
  return (
    <View style={styles.section}>
      <View style={styles.titleWrap}>
        <Icon name="leaf" size={16} color={GOLD} />
        <Text style={styles.sectionTitle}>IMPORTANT DATES</Text>
        <Icon name="leaf" size={16} color={GOLD} />
      </View>

      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {DATES.map((item, i) => (
          <View key={i} style={styles.dateCard}>
            <View style={styles.iconWrap}>
              <Icon name={item.icon} size={20} color={WHITE} />
            </View>
            <Text style={styles.dateTitle}>{item.title}</Text>
            <Text style={styles.dateVal}>{item.date}</Text>
            {i < DATES.length - 1 && <View style={styles.connector} />}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    backgroundColor: FOREST,
    paddingVertical: 12,
    borderTopRightRadius: 40,
    marginTop: -6,
  },
  titleWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 12,
  },
  sectionTitle: {
    color: WHITE,
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 1,
  },
  scrollContent: {
    paddingHorizontal: 6,
    gap: 10,
  },
  dateCard: {
    width: 120,
    alignItems: 'center',
    position: 'relative',
  },
  iconWrap: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  dateTitle: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 10,
    textAlign: 'center',
    marginBottom: 4,
    lineHeight: 14,
  },
  dateVal: {
    color: GOLD,
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center',
  },
  connector: {
    position: 'absolute',
    top: 24,
    right: -24,
    width: 32,
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
});
