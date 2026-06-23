import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import { HeroSection } from '../components/about/HeroSection';
import { FounderSection } from '../components/about/FounderSection';
import { TrustSection } from '../components/about/TrustSection';
import { InitiativesSection } from '../components/about/InitiativesSection';
import { FocusSection } from '../components/about/FocusSection';
import { ImpactSection } from '../components/about/ImpactSection';

export const AboutUsScreen = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <HeroSection />
      <FounderSection />
      <TrustSection />
      <InitiativesSection />
      <FocusSection />
      <ImpactSection />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
