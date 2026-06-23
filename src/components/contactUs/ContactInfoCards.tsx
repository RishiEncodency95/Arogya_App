import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MapPin, Mail, Phone, Clock } from 'lucide-react-native';

const INFO_DATA = [
  { id: '1', icon: MapPin, title: 'Visit Us', desc: 'Pragati Maidan,\nNew Delhi - 110001, India' },
  { id: '2', icon: Mail, title: 'Email Us', desc: 'arogyasanghosthi@gmail.com\ninfo@arogyasanghosthi.com' },
  { id: '3', icon: Phone, title: 'Call Us', desc: '+91 98765 43210\n+91 11 1234 5678' },
  { id: '4', icon: Clock, title: 'Office Hours', desc: 'Mon - Sat: 9:00 AM - 6:00 PM\nSunday: Closed' },
];

export const ContactInfoCards = () => {
  return (
    <View style={s.container}>
      <View style={s.grid}>
        {INFO_DATA.map((item) => (
          <View key={item.id} style={s.card}>
            <View style={s.iconBox}>
              <item.icon size={16} color="#064E3B" />
            </View>
            <View style={s.textCol}>
              <Text style={s.title}>{item.title}</Text>
              <Text style={s.desc}>{item.desc}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginTop: -20,
    zIndex: 2,
    marginBottom: 12,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 16,
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
    marginBottom: 12,
  },
  iconBox: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#E6F0E9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCol: {
    flex: 1,
  },
  title: {
    fontSize: 11,
    fontWeight: '800',
    color: '#0A2518',
    marginBottom: 2,
  },
  desc: {
    fontSize: 8,
    color: '#4B5563',
    lineHeight: 12,
  },
});
