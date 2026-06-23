import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MessageCircle, Handshake, Mic, Camera, HeadphonesIcon } from 'lucide-react-native';

const REASONS = [
  { id: '1', icon: MessageCircle, title: 'General Inquiries', desc: "Any questions? We're happy to help." },
  { id: '2', icon: Handshake, title: 'Partnerships & Sponsorships', desc: "Let's build something meaningful together." },
  { id: '3', icon: Mic, title: 'Speaker & Paper Queries', desc: 'Interested in speaking or presenting?' },
  { id: '4', icon: Camera, title: 'Media & Press', desc: 'For media collaborations and interviews.' },
  { id: '5', icon: HeadphonesIcon, title: 'Event Support', desc: 'Need help with registration or events?' },
];

export const ContactReasons = () => {
  return (
    <View style={s.container}>
      <Text style={s.title}>Why contact us?</Text>
      
      <View style={s.list}>
        {REASONS.map((r) => (
          <View key={r.id} style={s.item}>
            <View style={s.iconBox}>
              <r.icon size={16} color="#0A2518" />
            </View>
            <View style={s.textCol}>
              <Text style={s.itemTitle}>{r.title}</Text>
              <Text style={s.itemDesc}>{r.desc}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    backgroundColor: '#F3F7F0',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    color: '#0A2518',
    marginBottom: 16,
  },
  list: {
    gap: 16,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconBox: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#E5ECD8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCol: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 2,
  },
  itemDesc: {
    fontSize: 11,
    color: '#4B5563',
  },
});
