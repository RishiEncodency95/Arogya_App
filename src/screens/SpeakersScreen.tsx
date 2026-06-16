import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
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

const SPEAKERS_DATA = [
  { id: '1', name: 'Dr. Rajesh Kumar', role: 'Director, AIIMS New Delhi', topic: 'Integrative Medicine', img: 'https://i.pravatar.cc/150?img=11', track: 'Clinical' },
  { id: '2', name: 'Prof. Sunita Sharma', role: 'Global Wellness Advisor, WHO', topic: 'Ayurveda Worldwide', img: 'https://i.pravatar.cc/150?img=5', track: 'Policy' },
  { id: '3', name: 'Dr. Arjun Mehta', role: 'Head of Innovation, PharmaCorp', topic: 'AI in Drug Discovery', img: 'https://i.pravatar.cc/150?img=13', track: 'Tech' },
  { id: '4', name: 'Dr. Priya Nair', role: 'Chief Physician, Kerala Ayurveda', topic: 'Clinical Trials', img: 'https://i.pravatar.cc/150?img=9', track: 'Clinical' },
  { id: '5', name: 'Dr. Ananya Singh', role: 'Researcher, HealthTech AI', topic: 'Telemedicine', img: 'https://i.pravatar.cc/150?img=20', track: 'Tech' },
  { id: '6', name: 'Mr. Vikram Patil', role: 'CEO, MedLife Startups', topic: 'Healthcare Startups', img: 'https://i.pravatar.cc/150?img=15', track: 'Research' },
  { id: '7', name: 'Dr. Amit Desai', role: 'Ministry of AYUSH', topic: 'Government Initiatives', img: 'https://i.pravatar.cc/150?img=33', track: 'Policy' },
  { id: '8', name: 'Dr. Sneha Rao', role: 'Nutritionist & Author', topic: 'Holistic Diets', img: 'https://i.pravatar.cc/150?img=47', track: 'Wellness' },
];

export const SpeakersScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSpeakers = SPEAKERS_DATA.filter((s) => 
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    s.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={s.root}>
      {/* ── HEADER ── */}
      <View style={s.header}>
        <Text style={s.headerTitle}>Keynote Speakers</Text>
        <Text style={s.headerSub}>Learn from global leaders in healthcare, technology, and traditional medicine.</Text>
        
        {/* Search Bar */}
        <View style={s.searchBox}>
          <Icon name="search" size={18} color={C.muted} />
          <TextInput
            style={s.searchInput}
            placeholder="Search by name or role..."
            placeholderTextColor={C.muted}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      {/* ── SPEAKERS GRID ── */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={s.listContent}>
        {filteredSpeakers.map((speaker) => (
          <View key={speaker.id} style={s.speakerCard}>
            <Image source={{ uri: speaker.img }} style={s.avatar} />
            
            <View style={s.cardBody}>
              <View style={s.trackBadge}>
                <Text style={s.trackBadgeText}>{speaker.track}</Text>
              </View>
              
              <Text style={s.name}>{speaker.name}</Text>
              <Text style={s.role}>{speaker.role}</Text>
              
              <View style={s.topicRow}>
                <Icon name="mic" size={12} color={C.gold} />
                <Text style={s.topicText} numberOfLines={1}>{speaker.topic}</Text>
              </View>
            </View>

            <TouchableOpacity style={s.iconBtn} activeOpacity={0.7}>
              <Icon name="arrow-up-right" size={20} color={C.green} />
            </TouchableOpacity>
          </View>
        ))}

        {filteredSpeakers.length === 0 && (
          <View style={s.emptyState}>
            <Icon name="user-x" size={40} color={C.border} />
            <Text style={s.emptyText}>No speakers found</Text>
          </View>
        )}

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
    zIndex: 10,
  },
  headerTitle: {
    fontSize: 28, fontWeight: '900', color: C.white, marginBottom: 8,
  },
  headerSub: {
    fontSize: 13, color: 'rgba(255,255,255,0.8)', lineHeight: 20, marginBottom: 20,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: C.white,
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 48,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    color: C.dark,
  },
  listContent: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 40,
    gap: 16,
  },
  speakerCard: {
    flexDirection: 'row',
    backgroundColor: C.white,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1, borderColor: C.border,
    alignItems: 'center',
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.03, shadowRadius: 8, elevation: 2,
  },
  avatar: {
    width: 64, height: 64,
    borderRadius: 32,
    backgroundColor: C.greenLight,
    borderWidth: 2, borderColor: C.goldLight,
  },
  cardBody: {
    flex: 1,
    marginLeft: 16,
  },
  trackBadge: {
    alignSelf: 'flex-start',
    backgroundColor: C.greenLight,
    paddingHorizontal: 8, paddingVertical: 2,
    borderRadius: 10,
    marginBottom: 6,
  },
  trackBadgeText: {
    fontSize: 9, fontWeight: '800', color: C.green, textTransform: 'uppercase', letterSpacing: 0.5,
  },
  name: {
    fontSize: 16, fontWeight: '800', color: C.dark, marginBottom: 2,
  },
  role: {
    fontSize: 11, color: C.muted, fontWeight: '500', marginBottom: 8,
  },
  topicRow: {
    flexDirection: 'row', alignItems: 'center', gap: 4,
  },
  topicText: {
    fontSize: 11, color: C.gold, fontWeight: '700',
  },
  iconBtn: {
    width: 36, height: 36,
    borderRadius: 18,
    backgroundColor: C.greenLight,
    alignItems: 'center', justifyContent: 'center',
    marginLeft: 10,
  },
  emptyState: {
    alignItems: 'center', justifyContent: 'center',
    paddingVertical: 60,
  },
  emptyText: {
    fontSize: 14, color: C.muted, marginTop: 12, fontWeight: '600',
  },
  bottomSpacing: {
    height: 40,
  },
});
