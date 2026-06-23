import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { PersonListCard, SectionBlock, ListPersonProps } from './PersonListCard';

const ADVISORS: ListPersonProps[] = [
  { id: '1', name: 'Padma Shri\nDr. Anil Prakash Joshi', role: 'Renowned Environmentalist\n& Former PCCF (Retd.)', image: 'https://i.pravatar.cc/150?img=20' },
  { id: '2', name: 'Dr. R. S. Tolia', role: 'Former Director,\nFRI, Dehradun', image: 'https://i.pravatar.cc/150?img=21' },
  { id: '3', name: 'Dr. K. K. Tewari', role: 'Former Head,\nWildlife Institute of India', image: 'https://i.pravatar.cc/150?img=22' },
  { id: '4', name: 'Dr. S. C. Sharma', role: 'Former Scientist,\nWII, Dehradun', image: 'https://i.pravatar.cc/150?img=23' },
];

const SCIENTIFIC_COMMITTEE: ListPersonProps[] = [
  { id: '1', name: 'Dr. N. K. Joshi', role: 'Chairman, FRI, Dehradun', image: 'https://i.pravatar.cc/150?img=24' },
  { id: '2', name: 'Dr. B. S. Adhikari', role: "Scientist 'G', FRI, Dehradun", image: 'https://i.pravatar.cc/150?img=25' },
  { id: '3', name: 'Dr. Charu Nautiyal', role: 'Associate Professor, HNB Garhwal University', image: 'https://i.pravatar.cc/150?img=26' },
  { id: '4', name: 'Dr. Laxman Singh', role: 'Assistant Director (Extension),\nFRI, Dehradun', image: 'https://i.pravatar.cc/150?img=27' },
];

const GALLERY_IMAGES = [
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=300',
  'https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&q=80&w=300',
  'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&q=80&w=300',
  'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=300',
];

export const Committees = () => {
  return (
    <View style={s.container}>
      <SectionBlock title="OUR ADVISORS" buttonText="VIEW ALL ADVISORS">
        {ADVISORS.map((person) => (
          <PersonListCard key={person.id} person={person} />
        ))}
      </SectionBlock>

      <SectionBlock title="SCIENTIFIC COMMITTEE" buttonText="VIEW ALL MEMBERS">
        {SCIENTIFIC_COMMITTEE.map((person) => (
          <PersonListCard key={person.id} person={person} />
        ))}
      </SectionBlock>

      <SectionBlock title="PREVIOUS EDITION HIGHLIGHTS" buttonText="VIEW GALLERY">
        <View style={s.galleryGrid}>
          {GALLERY_IMAGES.map((img, idx) => (
            <Image key={idx} source={{ uri: img }} style={s.galleryImage} />
          ))}
          <View style={s.overlayMore}>
            <Text style={s.overlayMoreText}>+ MORE</Text>
          </View>
        </View>
        <Text style={s.galleryDesc}>
          A glimpse of the insightful sessions and knowledge shared in our previous editions.
        </Text>
      </SectionBlock>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    paddingHorizontal: 6,
    backgroundColor: '#FAF7F2',
  },
  galleryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 6,
    position: 'relative',
    marginTop:8
  },
  galleryImage: {
    width: '49%',
    height: 90,
    borderRadius: 6,
    marginBottom: 8,
    backgroundColor: '#EAEAEA',
  },
  overlayMore: {
    position: 'absolute',
    bottom: 8,
    right: 0,
    width: '48%',
    height: 80,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayMoreText: {
    color: '#FFF',
    fontWeight: '800',
    fontSize: 14,
  },
  galleryDesc: {
    textAlign: 'center',
    fontSize: 12,
    color: '#333',
    lineHeight: 18,
    paddingHorizontal: 10,
    marginBottom: 4,
  },
});
