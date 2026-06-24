import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

export const BlogNewsletter = () => {
  return (
    <View style={s.container}>
      <ImageBackground
        source={{ uri: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600' }}
        style={s.bgImage}
        imageStyle={s.bgImageStyle}
      >
        <View style={s.overlay} />

        <View style={s.content}>
          <Text style={s.subtitle}>BE A PART OF INSIGHTFUL SESSIONS AND MEANINGFUL DISCUSSIONS.</Text>
          <Text style={s.title}>Subscribe to our newsletter and stay ahead!</Text>

          <View style={s.inputRow}>
            <TextInput
              style={s.input}
              placeholder="Enter your email address"
              placeholderTextColor="#9CA3AF"
            />
            <TouchableOpacity style={s.btn} activeOpacity={0.8}>
              <Text style={s.btnText}>SUBSCRIBE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    marginHorizontal: 6,
    marginTop: 6,
    marginBottom: 26,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
  },
  bgImage: {
    padding: 12,
  },
  bgImageStyle: {
    borderRadius: 12,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#0A2518',
    opacity: 0.95,
  },
  content: {
    position: 'relative',
    zIndex: 1,
  },
  subtitle: {
    fontSize: 8,
    fontWeight: '800',
    color: '#E5ECD8',
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  title: {
    fontSize: 15,
    fontWeight: '800',
    color: '#FFF',
    lineHeight: 20,
    marginBottom: 12,
  },
  inputRow: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 6,
    padding: 3,
  },
  input: {
    flex: 1,
    height: 34,
    paddingHorizontal: 10,
    fontSize: 11,
    color: '#111827',
  },
  btn: {
    backgroundColor: '#F97316',
    paddingHorizontal: 12,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#FFF',
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
});
