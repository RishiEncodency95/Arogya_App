import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Calendar, Lightbulb, Beaker, HeartPulse, Megaphone, BookOpen, Book } from 'lucide-react-native';

const CATEGORIES = [
  { id: '1', title: 'LATEST UPDATES', icon: Calendar },
  { id: '2', title: 'EXPERT INSIGHTS', icon: Lightbulb },
  { id: '3', title: 'HEALTH & INNOVATIONS', icon: Beaker },
  { id: '4', title: 'NEWS & WELLNESS', icon: HeartPulse },
  { id: '5', title: 'NEWS & ANNOUNCEMENTS', icon: Megaphone },
  { id: '6', title: 'EVENTS & HIGHLIGHTS', icon: BookOpen },
  { id: '7', title: 'STORIES THAT INSPIRE', icon: Book },
];

export const BlogCategories = () => {
  return (
    <View style={s.wrapper}>
      <View style={s.grid}>
        {CATEGORIES.map((cat) => (
          <View key={cat.id} style={s.catItem}>
            <cat.icon size={14} color="#6B7280" style={s.icon} />
            <Text style={s.title}>{cat.title}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  wrapper: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 6,
    borderRadius: 8,
    marginTop: 6,
    zIndex: 2,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 12,
    rowGap: 12,
    columnGap: 8,
  },
  catItem: {
    width: '48%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 6,
  },
  title: {
    fontSize: 9,
    fontWeight: '800',
    color: '#0A2518',
    letterSpacing: 0.5,
  },
});
