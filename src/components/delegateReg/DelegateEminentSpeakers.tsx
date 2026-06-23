import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { ArrowRight } from 'lucide-react-native';

const SPEAKERS = [
  { id: '1', name: 'Naresh Trehan', role: 'Chairman, Medanta', image: 'https://i.pravatar.cc/150?img=11' },
  { id: '2', name: 'Dr. Prathap C. Reddy', role: 'Founder, Apollo Hospitals', image: 'https://i.pravatar.cc/150?img=12' },
  { id: '3', name: 'Kiran Mazumdar-Shaw', role: 'Chairperson, Biocon', image: 'https://i.pravatar.cc/150?img=35' },
  { id: '4', name: 'Dr. Soumya Swaminathan', role: 'Former Chief Scientist, WHO', image: 'https://i.pravatar.cc/150?img=44' },
  { id: '5', name: 'Dr. R. S. Sharma', role: 'Former CEO, NHA', image: 'https://i.pravatar.cc/150?img=52' },
];

export const DelegateEminentSpeakers = () => {
  return (
    <View style={s.container}>
      <View style={s.card}>
        <View style={s.headerRow}>
          <Text style={s.title}>MEET OUR EMINENT SPEAKERS & LEADERS</Text>
          <TouchableOpacity style={s.btn} activeOpacity={0.8}>
            <Text style={s.btnText}>VIEW ALL SPEAKERS</Text>
            <ArrowRight size={10} color="#FFF" />
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={s.scrollContent}>
          {SPEAKERS.map((sp) => (
            <View key={sp.id} style={s.speakerItem}>
              <Image source={{ uri: sp.image }} style={s.image} />
              <Text style={s.name} numberOfLines={2}>{sp.name}</Text>
              <Text style={s.role} numberOfLines={2}>{sp.role}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    backgroundColor: '#FAF7F2',
    paddingHorizontal: 6,
    paddingVertical: 6,
  },
  card: {
    backgroundColor: '#FAFAFA',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#EAEAEA',
    paddingVertical: 16,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
    flexWrap: 'wrap',
    gap: 8,
  },
  title: {
    fontSize: 13,
    fontWeight: '800',
    color: '#133E2B',
    flex: 1,
  },
  btn: {
    backgroundColor: '#1C274C',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    gap: 4,
  },
  btnText: {
    color: '#FFF',
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  scrollContent: {
    paddingHorizontal: 16,
    gap: 12,
  },
  speakerItem: {
    width: 80,
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 70,
    borderRadius: 8,
    marginBottom: 8,
  },
  name: {
    fontSize: 10,
    fontWeight: '800',
    color: '#133E2B',
    textAlign: 'center',
    marginBottom: 2,
    height: 28,
  },
  role: {
    fontSize: 8,
    color: '#555',
    textAlign: 'center',
    height: 24,
  },
});
