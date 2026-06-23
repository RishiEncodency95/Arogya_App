import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { PaperHeroSection } from '../components/paper/PaperHeroSection';
import { ImportantDatesSection } from '../components/paper/ImportantDatesSection';
import { TopicsSection } from '../components/paper/TopicsSection';
import { GuidelinesProcessSection } from '../components/paper/GuidelinesProcessSection';
import { AwardsSection } from '../components/paper/AwardsSection';
import { WhyChooseSection } from '../components/paper/WhyChooseSection';
import { HelpSection } from '../components/paper/HelpSection';

export const PaperScreen = () => {
  return (
    <ScrollView 
      style={styles.container}
      showsVerticalScrollIndicator={false}
      bounces={false}
    >
      <PaperHeroSection />
      <ImportantDatesSection />
      <TopicsSection />
      <GuidelinesProcessSection />
      <AwardsSection />
      <WhyChooseSection />
      <HelpSection />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
