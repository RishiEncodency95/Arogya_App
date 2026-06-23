import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Users, TrendingUp, Handshake, Target, ShieldCheck } from 'lucide-react-native';

const REASONS = [
  { icon: Users, text: 'Connect with\nGlobal Leaders' },
  { icon: TrendingUp, text: 'Gain Insights on\nEmerging Trends' },
  { icon: Handshake, text: 'Build Strategic\nCollaborations' },
  { icon: Target, text: 'Influence Policy\n& Practice' },
  { icon: ShieldCheck, text: 'Shape the Future\nof Healthcare' },
];

export const WhyAttend = () => {
  return (
    <View style={s.container}>
      <View style={s.card}>
        <Text style={s.title}>WHY ATTEND IHWE 2026?</Text>
        
        <View style={s.content}>
          <View style={s.listCol}>
            {REASONS.map((r, idx) => {
              const Icon = r.icon;
              return (
                <View key={idx} style={s.row}>
                  <Icon size={16} color="#4A7A3A" />
                  <Text style={s.text}>{r.text}</Text>
                </View>
              );
            })}
          </View>
          
          <View style={s.imageCol}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400' }} 
              style={s.image} 
              resizeMode="cover"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    backgroundColor: '#FAF7F2',
    paddingHorizontal: 6,
    paddingVertical: 0,
  },
  card: {
    backgroundColor: '#FAFAFA',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#EAEAEA',
    padding: 6,
    overflow: 'hidden',
  },
  title: {
    fontSize: 14,
    fontWeight: '800',
    color: '#133E2B',
    marginBottom: 12,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listCol: {
    flex: 1,
    gap: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  text: {
    fontSize: 11,
    fontWeight: '600',
    color: '#333',
  },
  imageCol: {
    width: 200,
    height: 200,
    marginLeft: 16,
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
