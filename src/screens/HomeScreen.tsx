import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { HomeHero } from '../components/home/HomeHero';
import { QuickAccess } from '../components/home/Quick';
import { NextSession } from '../components/home/NextSection';
import { Presentation } from '../components/home/Presentation';
import { UpComingEvent } from '../components/home/UpComingEvent';
import { HomeSocial } from '../components/home/HomeSocial';

export const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <HomeHero />
      <QuickAccess />
      <NextSession />
      <Presentation />
      <UpComingEvent />
      <HomeSocial />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});