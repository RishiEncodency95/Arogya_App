import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const C = {
  green: '#0A4232',
  greenMid: '#1B5E3A',
  greenLight: '#E8F5EE',
  gold: '#DFB143',
  goldLight: '#FBF3DC',
  cream: '#FAF7F2',
  dark: '#111A15',
  muted: '#6B7C73',
  white: '#FFFFFF',
  border: '#E2EBE6',
  red: '#C0392B',
};

const TRACKS_DATA = [
  {
    id: '1',
    title: 'Ayurveda & Traditional Medicine',
    description: 'Explore the roots of AYUSH, clinical trials, and the integration of traditional practices with modern science.',
    icon: 'leaf',
    color: '#2E7D32',
    bg: '#E8F5E9',
    sessionsCount: 12,
  },
  {
    id: '2',
    title: 'Digital Health & AI',
    description: 'Discover how artificial intelligence, telemedicine, and digital innovations are revolutionizing healthcare delivery.',
    icon: 'cpu',
    color: '#1565C0',
    bg: '#E3F2FD',
    sessionsCount: 8,
  },
  {
    id: '3',
    title: 'Pharma Innovations & Research',
    description: 'Latest advancements in drug discovery, clinical research papers, and sustainable pharma practices.',
    icon: 'activity',
    color: '#C62828',
    bg: '#FFEBEE',
    sessionsCount: 15,
  },
  {
    id: '4',
    title: 'Wellness, Yoga & Nutrition',
    description: 'Interactive workshops on holistic wellness, mental health, dietary regimens, and lifestyle disorders.',
    icon: 'heart',
    color: '#E65100',
    bg: '#FFF3E0',
    sessionsCount: 6,
  },
  {
    id: '5',
    title: 'Global Healthcare Policy',
    description: 'Roundtables on healthcare reforms, WHO guidelines, and international collaborations.',
    icon: 'globe',
    color: '#6A1B9A',
    bg: '#F3E5F5',
    sessionsCount: 4,
  },
];

export const TracksScreen = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Clinical', 'Tech', 'Research', 'Policy'];

  return (
    <View style={s.root}>
      {/* ── HEADER ── */}
      <View style={s.header}>
        <Text style={s.headerTitle}>Conference Tracks</Text>
        <Text style={s.headerSub}>Explore specialized themes and find sessions that match your interests.</Text>
      </View>

      {/* ── FILTERS ── */}
      <View style={s.filterWrapper}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={s.filterScroll}>
          {filters.map((f, i) => (
            <TouchableOpacity
              key={i}
              style={[s.filterPill, activeFilter === f && s.filterPillActive]}
              onPress={() => setActiveFilter(f)}
              activeOpacity={0.8}
            >
              <Text style={[s.filterText, activeFilter === f && s.filterTextActive]}>{f}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* ── TRACKS LIST ── */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={s.listContent}>
        {TRACKS_DATA.map((track, i) => (
          <TouchableOpacity key={track.id} style={s.trackCard} activeOpacity={0.9}>
            <View style={s.cardTop}>
              <View style={[s.iconBox, { backgroundColor: track.bg }]}>
                <Icon name={track.icon} size={24} color={track.color} />
              </View>
              <View style={s.badge}>
                <Text style={s.badgeText}>{track.sessionsCount} Sessions</Text>
              </View>
            </View>

            <Text style={s.trackTitle}>{track.title}</Text>
            <Text style={s.trackDesc}>{track.description}</Text>

            <View style={s.cardFooter}>
              <Text style={s.viewDetails}>View Schedule</Text>
              <Icon name="arrow-right" size={16} color={C.green} />
            </View>
          </TouchableOpacity>
        ))}

        <View style={s.bottomSpacing} />
      </ScrollView>
    </View>
  );
};

const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: C.cream },
  header: {
    backgroundColor: C.green,
    paddingTop: 60,
    paddingBottom: 24,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerTitle: {
    fontSize: 28, fontWeight: '900', color: C.white, marginBottom: 8,
  },
  headerSub: {
    fontSize: 13, color: 'rgba(255,255,255,0.8)', lineHeight: 20,
  },
  filterWrapper: {
    marginTop: 16,
    marginBottom: 8,
  },
  filterScroll: {
    paddingHorizontal: 20,
    gap: 8,
  },
  filterPill: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: C.white,
    borderWidth: 1,
    borderColor: C.border,
  },
  filterPillActive: {
    backgroundColor: C.gold,
    borderColor: C.gold,
  },
  filterText: {
    fontSize: 12, fontWeight: '700', color: C.muted,
  },
  filterTextActive: {
    color: C.green,
  },
  listContent: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 40,
    gap: 16,
  },
  trackCard: {
    backgroundColor: C.white,
    borderRadius: 16,
    padding: 20,
    borderWidth: 1, borderColor: C.border,
    shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.04, shadowRadius: 10, elevation: 2,
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  iconBox: {
    width: 48, height: 48,
    borderRadius: 14,
    alignItems: 'center', justifyContent: 'center',
  },
  badge: {
    backgroundColor: C.greenLight,
    paddingHorizontal: 10, paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    fontSize: 10, fontWeight: '800', color: C.green,
  },
  trackTitle: {
    fontSize: 18, fontWeight: '800', color: C.dark, marginBottom: 8, lineHeight: 24,
  },
  trackDesc: {
    fontSize: 13, color: C.muted, lineHeight: 20, marginBottom: 20,
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1, borderTopColor: C.border,
    paddingTop: 16,
  },
  viewDetails: {
    fontSize: 13, fontWeight: '700', color: C.green, marginRight: 8,
  },
  bottomSpacing: {
    height: 40,
  },
});
