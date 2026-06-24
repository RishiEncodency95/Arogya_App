import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { ArrowLeft, ArrowRight } from 'lucide-react-native';

export const FeaturedStory = () => {
  return (
    <View style={s.container}>
      <ImageBackground
        source={{ uri: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800' }}
        style={s.bgImage}
        imageStyle={s.bgImageStyle}
      >
        <View style={s.overlay} />

        <View style={s.badge}>
          <Text style={s.badgeText}>FEATURED STORY</Text>
        </View>

        <View style={s.content}>
          <Text style={s.title}>
            Arogya Sanghosthi Advancing Wellness
          </Text>
        </View>
      </ImageBackground>

      <View style={s.bottomPanel}>
        <View style={s.dateRow}>
          <Text style={s.dateText}>📅 20 May 2026</Text>
          <View style={s.navBtns}>
            <TouchableOpacity style={[s.navBtn, s.navBtnDark]}>
              <ArrowLeft size={14} color="#FFF" />
            </TouchableOpacity>
            <TouchableOpacity style={[s.navBtn, s.navBtnOrange]}>
              <ArrowRight size={14} color="#FFF" />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={s.bottomTitle}>
          Arogya Sanghosthi 2026: Uniting Knowledge, Nature & Innovation...
        </Text>
        <Text style={s.bottomDesc}>
          A landmark gathering set to bring together experts, researchers and communities for a healthier tomorrow.
        </Text>

        <TouchableOpacity style={s.readBtn} activeOpacity={0.8}>
          <Text style={s.readBtnText}>READ FULL STORY</Text>
          <ArrowRight size={14} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    marginHorizontal: 6,
    marginTop: 6,
    backgroundColor: '#FFF',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
  },
  bgImage: {
    height: 170,
    justifyContent: 'space-between',
    padding: 6,
  },
  bgImageStyle: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  badge: {
    backgroundColor: '#064E3B',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  badgeText: {
    color: '#FFF',
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  content: {
    marginTop: 'auto',
  },
  title: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '800',
    lineHeight: 26,
    width: '80%',
  },
  bottomPanel: {
    padding: 6
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  dateText: {
    fontSize: 10,
    color: '#064E3B',
    fontWeight: '700',
  },
  navBtns: {
    flexDirection: 'row',
    gap: 8,
  },
  navBtn: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navBtnDark: {
    backgroundColor: '#0A2518',
  },
  navBtnOrange: {
    backgroundColor: '#F97316',
  },
  bottomTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 4,
    lineHeight: 20,
  },
  bottomDesc: {
    fontSize: 11,
    color: '#4B5563',
    lineHeight: 16,
    marginBottom: 8,
  },
  readBtn: {
    backgroundColor: '#0A2518',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 8,
    gap: 6,
  },
  readBtnText: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: '800',
  },
});
