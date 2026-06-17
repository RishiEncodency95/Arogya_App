import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { HomeHero } from '../components/home/HomeHero';
import { QuickAccess } from '../components/home/Quick';
import { NextSession } from '../components/home/NextSection';
import { Presentation } from '../components/home/Presentation';
import { UpComingEvent } from '../components/home/UpComingEvent';
import { HomeSocial } from '../components/home/HomeSocial';

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.headerExtension} />
        <HomeHero />
        <QuickAccess />
        <NextSession />
        <Presentation />
        <UpComingEvent />
        <HomeSocial />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  headerExtension: {
    position: 'absolute',
    top: -1000,
    left: 0,
    right: 0,
    height: 1000 + 120, // Extends way up for bounce, and 120px down behind HomeHero
    backgroundColor: '#0f2d25',
  },
  scrollContent: {
    paddingBottom: 20, // Padding for TabNavigator
  },
});