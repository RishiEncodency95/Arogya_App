import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { FileText, Users, Megaphone, Globe, TrendingUp } from 'lucide-react-native';

const STATS = [
  { id: '1', title: '50+', desc: 'News Mentions', icon: FileText },
  { id: '2', title: '25+', desc: 'Media Partners', icon: Users },
  { id: '3', title: '100+', desc: 'Press Releases', icon: Megaphone },
  { id: '4', title: '1M+', desc: 'Digital Reach', icon: Globe },
  { id: '5', title: 'Growing', desc: 'Every Day', icon: TrendingUp },
];

export const StatsBanner = () => {
  return (
    <View style={s.container}>
      <View style={s.grid}>
        {STATS.map((stat) => (
          <View key={stat.id} style={s.statItem}>
            <stat.icon size={20} color="#064E3B" style={s.icon} />
            <View>
              <Text style={s.statTitle}>{stat.title}</Text>
              <Text style={s.statDesc}>{stat.desc}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    backgroundColor: '#F8F9F5',
    marginHorizontal: 6,
    borderRadius: 12,
    marginTop: 6,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 6,
    rowGap: 6,
    columnGap: 6,
  },
  statItem: {
    width: '49%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  statTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: '#0A2518',
  },
  statDesc: {
    fontSize: 10,
    color: '#4B5563',
  },
  divider: {
    width: 1,
    height: 30,
    backgroundColor: '#D1D5DB',
    marginHorizontal: 6,
  },
});
