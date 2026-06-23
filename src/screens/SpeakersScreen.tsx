import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { SpeakerHero } from '../components/speakers/SpeakerHero';
import { EsteemedSpeakers } from '../components/speakers/EsteemedSpeakers';
import { PreviousSpeakers } from '../components/speakers/PreviousSpeakers';
import { Committees } from '../components/speakers/Committees';
import { RegisterBanner } from '../components/speakers/RegisterBanner';

const C = {
  cream: '#FAF7F2',
};

export const SpeakersScreen = () => {
  return (
    <View style={s.root}>
      <ScrollView showsVerticalScrollIndicator={false} >
        <SpeakerHero />
        <EsteemedSpeakers />
        <Committees />
        <PreviousSpeakers />
        <RegisterBanner />
      </ScrollView>
    </View>
  );
};

const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: C.cream },
  scrollContent: {
    paddingTop: 20,
    paddingBottom: 60,
  },
});
