import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Users, Building2, Globe2, Mic, CalendarDays, ArrowRight } from 'lucide-react-native';

const STATS = [
  { icon: Users, num: '15,000+', label: 'EXPECTED DELEGATES' },
  { icon: Building2, num: '500+', label: 'EXHIBITORS' },
  { icon: Globe2, num: '50+', label: 'COUNTRIES' },
  { icon: Mic, num: '200+', label: 'SPEAKERS' },
  { icon: CalendarDays, num: '3', label: 'DAYS OF INNOVATION' },
];

export const DelegateHero = () => {
  return (
    <View style={s.container}>
      <View style={s.heroTop}>
        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ce122?auto=format&fit=crop&q=80&w=1000' }} 
          style={s.bgImage} 
        />
        <View style={s.overlay} />
        
        <View style={s.content}>
          <Text style={s.badge}>9th</Text>
          <Text style={s.title}>INTERNATIONAL</Text>
          <Text style={s.subtitle}>HEALTH & WELLNESS</Text>
          <Text style={s.expo}>EXPO 2026</Text>
          
          <Text style={s.desc}>
            Uniting Innovation, Wellness &{'\n'}Sustainability for a Better Tomorrow
          </Text>

          <View style={s.btnRow}>
            <TouchableOpacity style={s.btnPrimary} activeOpacity={0.8}>
              <Text style={s.btnPrimaryText}>REGISTER NOW</Text>
              <ArrowRight size={14} color="#FFF" />
            </TouchableOpacity>
            
            <TouchableOpacity style={s.btnSecondary} activeOpacity={0.8}>
              <Mic size={14} color="#FFF" />
              <Text style={s.btnSecondaryText}>BECOME A SPEAKER</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={s.statsWrapper}>
        <View style={s.statsContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={s.statsScroll}>
            {STATS.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <View key={idx} style={s.statItem}>
                  <Icon size={20} color="#EBB422" />
                  <View style={s.statTextCol}>
                    <Text style={s.statNum}>{stat.num}</Text>
                    <Text style={s.statLabel}>{stat.label}</Text>
                  </View>
                  {idx < STATS.length - 1 && <View style={s.divider} />}
                </View>
              );
            })}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    backgroundColor: '#FAF7F2',
  },
  heroTop: {
    height: 320,
    position: 'relative',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  bgImage: {
    ...StyleSheet.absoluteFill,
    width: '100%',
    height: '100%',
    opacity: 0.4,
  },
  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  content: {
    position: 'relative',
    zIndex: 2,
  },
  badge: {
    fontSize: 48,
    fontWeight: '900',
    color: '#4A7A3A',
    marginBottom: -10,
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    color: '#133E2B',
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#4A7A3A',
  },
  expo: {
    fontSize: 28,
    fontWeight: '900',
    color: '#E37A2C',
    marginBottom: 8,
  },
  desc: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    lineHeight: 20,
    marginBottom: 16,
  },
  btnRow: {
    flexDirection: 'row',
    gap: 8,
    flexWrap: 'wrap',
  },
  btnPrimary: {
    backgroundColor: '#208C84',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  btnPrimaryText: {
    color: '#FFF',
    fontWeight: '800',
    fontSize: 11,
  },
  btnSecondary: {
    backgroundColor: '#133E2B',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  btnSecondaryText: {
    color: '#FFF',
    fontWeight: '800',
    fontSize: 11,
  },
  statsWrapper: {
    paddingHorizontal: 6,
    marginTop: -24,
    zIndex: 10,
  },
  statsContainer: {
    backgroundColor: '#0A2518',
    borderRadius: 8,
    paddingVertical: 12,
  },
  statsScroll: {
    paddingHorizontal: 16,
    gap: 16,
    alignItems: 'center',
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  statTextCol: {
    justifyContent: 'center',
  },
  statNum: {
    color: '#EBB422',
    fontSize: 16,
    fontWeight: '800',
  },
  statLabel: {
    color: '#FFF',
    fontSize: 9,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  divider: {
    width: 1,
    height: 24,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginLeft: 8,
  },
});
