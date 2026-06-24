import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { ArrowRight } from 'lucide-react-native';

const ARTICLES = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&q=80&w=600',
    date: 'MARCH 5, 2025',
    category: 'AYUSH',
    title: 'AYUSH Systems: Shaping the Future of Integrative Healthcare...',
    desc: 'A deep dive into government-backed AYUSH initiatives transforming primary healthcare delivery across...',
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=600',
    date: 'FEB 28, 2025',
    category: 'WELLNESS',
    title: 'Preventive Healthcare: The Holistic Approach to Lifelong...',
    desc: 'How ancient Indian wellness traditions—from Dinacharya to Rasayana therapy—are proving essential tools...',
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=600',
    date: 'FEB 20, 2025',
    category: 'CONFERENCE',
    title: 'Arogya Sanghosthi 2024: Moments That Defined the Ye...',
    desc: 'A retrospective on the landmark discussions, research breakthroughs, and collaborative commitments from...',
  },
];

export const LatestArticles = () => {
  return (
    <View style={s.container}>
      <View style={s.headerRow}>
        <Text style={s.title}>Latest News & Articles</Text>
        <View style={s.titleLine} />
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={s.scrollContent}>
        {ARTICLES.map((article) => (
          <View key={article.id} style={s.card}>
            <Image source={{ uri: article.image }} style={s.image} />
            <View style={s.content}>
              <View style={s.metaRow}>
                <Text style={s.metaDate}>📅 {article.date}</Text>
                <Text style={s.metaCategory}>{article.category}</Text>
              </View>
              <Text style={s.cardTitle} numberOfLines={2}>{article.title}</Text>
              <Text style={s.cardDesc} numberOfLines={3}>{article.desc}</Text>

              <TouchableOpacity style={s.readBtn} activeOpacity={0.8}>
                <Text style={s.readBtnText}>READ MORE</Text>
                <ArrowRight size={12} color="#0A2518" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity style={s.viewMoreBtn} activeOpacity={0.8}>
        <Text style={s.viewMoreText}>VIEW MORE ARTICLES</Text>
        <ArrowRight size={14} color="#F97316" />
      </TouchableOpacity>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    marginTop: 6,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 6,
    marginBottom: 6,
  },
  title: {
    fontSize: 14,
    fontWeight: '800',
    color: '#0A2518',
    marginRight: 12,
  },
  titleLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#F97316',
  },
  scrollContent: {
    paddingHorizontal: 6,
    gap: 4,
  },
  card: {
    width: 240,
    backgroundColor: '#FFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 140,
  },
  content: {
    padding: 6,
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  metaDate: {
    fontSize: 9,
    color: '#4B5563',
    fontWeight: '700',
  },
  metaCategory: {
    fontSize: 9,
    color: '#064E3B',
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  cardTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 4,
    lineHeight: 20,
  },
  cardDesc: {
    fontSize: 11,
    color: '#4B5563',
    lineHeight: 16,
    marginBottom: 10,
  },
  readBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  readBtnText: {
    fontSize: 10,
    fontWeight: '900',
    color: '#0A2518',
  },
  viewMoreBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 6,
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#F97316',
    gap: 8,
  },
  viewMoreText: {
    color: '#F97316',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
});
