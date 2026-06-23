import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SpeakerCard, SpeakerProps } from './SpeakerCard';
import { SectionHeader } from './SectionHeader';

const ESTEEMED_SPEAKERS: SpeakerProps[] = [
  { id: '1', name: 'Dr. Vandana Shiva', degree: 'PhD (Physics)', role: 'Environmental Activist', topic: 'Traditional Knowledge & Sustainability', iconType: 'book', image: 'https://i.pravatar.cc/150?img=1' },
  { id: '2', name: 'Dr. K. S. Rawat', degree: 'PhD (Microbiology)', role: 'Scientist, FRI, Dehradun', topic: 'Forest Microbiology & Soil Health', iconType: 'globe', image: 'https://i.pravatar.cc/150?img=2' },
  { id: '3', name: 'Dr. Pradeep Tewari', degree: 'PhD (Economics)', role: 'Expert, NTFP & Livelihoods', topic: 'Livelihoods from Forest Resources', iconType: 'globe', image: 'https://i.pravatar.cc/150?img=3' },
  { id: '4', name: 'Dr. Neha Joshi', degree: 'PhD (Environmental Sc.)', role: 'Researcher & Consultant', topic: 'Youth, Health & Sustainable Future', iconType: 'globe', image: 'https://i.pravatar.cc/150?img=4' },
  { id: '5', name: 'Dr. A. K. Singh', degree: 'Director', role: 'Ministry of AYUSH', topic: 'Policy & Wellness', iconType: 'book', image: 'https://i.pravatar.cc/150?img=5' },
  { id: '6', name: 'Prof. R. K. Sharma', degree: 'HOD Ayurveda', role: 'BHU Varanasi', topic: 'Ancient Medicine & Texts', iconType: 'book', image: 'https://i.pravatar.cc/150?img=6' },
  { id: '7', name: 'Prof. Anoop Misra', degree: 'Chairman', role: 'Fortis C-DOC', topic: 'Modern & Traditional', iconType: 'globe', image: 'https://i.pravatar.cc/150?img=7' },
  { id: '8', name: 'Dr. Geetha Krishnan', degree: 'Tech Officer', role: 'WHO Geneva', topic: 'Global Standards', iconType: 'globe', image: 'https://i.pravatar.cc/150?img=8' },
  { id: '9', name: 'Dr. G. G. Gangadharan', degree: 'Director', role: 'MSRICA', topic: 'Ayurveda Research', iconType: 'globe', image: 'https://i.pravatar.cc/150?img=9' },
  { id: '10', name: 'Vaidya Balendu Prakash', degree: 'Founder', role: 'VCP Cancer Research', topic: 'Clinical Innovations', iconType: 'book', image: 'https://i.pravatar.cc/150?img=10' },
  { id: '11', name: 'Dr. Sunita Narain', degree: 'Director General', role: 'CSE India', topic: 'Sustainable Ecology', iconType: 'globe', image: 'https://i.pravatar.cc/150?img=11' },
  { id: '12', name: 'Dr. H. R. Nagendra', degree: 'Chancellor', role: 'S-VYASA Yoga Univ.', topic: 'Yoga Therapy', iconType: 'globe', image: 'https://i.pravatar.cc/150?img=12' },
];

export const EsteemedSpeakers = () => {
  return (
    <View style={s.container}>
      <SectionHeader title="OUR ESTEEMED SPEAKERS" />
      <View style={s.grid}>
        {ESTEEMED_SPEAKERS.map((speaker) => (
          <SpeakerCard key={speaker.id} speaker={speaker} />
        ))}
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    paddingHorizontal: 6,
    backgroundColor: '#FAF7F2', // Same cream background as requested
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width:"100%"
  },
});
