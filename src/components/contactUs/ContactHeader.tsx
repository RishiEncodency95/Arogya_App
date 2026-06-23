import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

export const ContactHeader = () => {
  return (
    <ImageBackground 
      source={{ uri: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000' }} 
      style={s.container}
      imageStyle={s.bgImage}
    >
      <View style={s.overlay} />
      <View style={s.content}>
        <View style={s.badge}>
          <Text style={s.badgeText}>CONTACT US</Text>
        </View>
        <Text style={s.title}>
          Let's <Text style={s.titleOrange}>Connect</Text>{'\n'}With You!
        </Text>
        <View style={s.divider} />
        <Text style={s.subtitle}>
          We're here to answer your questions and collaborate with you.
        </Text>
      </View>
    </ImageBackground>
  );
};

const s = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingBottom: 40,
    paddingHorizontal: 20,
    alignItems: 'flex-start',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  bgImage: {
    opacity: 0.2,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#F8F9F5',
    zIndex: -1,
  },
  content: {
    zIndex: 1,
  },
  badge: {
    backgroundColor: '#E5ECD8',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    marginBottom: 16,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#2A5C3B',
    letterSpacing: 1,
  },
  title: {
    fontSize: 36,
    fontWeight: '900',
    color: '#0A2518',
    lineHeight: 42,
  },
  titleOrange: {
    color: '#F97316',
  },
  divider: {
    width: 40,
    height: 4,
    backgroundColor: '#F97316',
    borderRadius: 2,
    marginTop: 12,
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 20,
    maxWidth: '80%',
  },
});
