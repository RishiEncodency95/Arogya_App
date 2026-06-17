import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { HomeHero } from '../components/home/HomeHero';
import { QuickAccess } from '../components/home/Quick';
import { NextSession } from '../components/home/NextSection';

export const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <HomeHero />
      <QuickAccess />
      <NextSession/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});