import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const QUOTES = [
  {
    id: '1',
    text: 'The future of healthcare lies in integration—of tradition, technology and community.',
    author: 'Dr. Randeep Guleria',
    role: 'Pulmonologist & Director',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: '2',
    text: 'Ayurveda offers timeless wisdom for holistic well-being and preventive care.',
    author: 'Dr. Renu Boyal',
    role: 'MD (Ayurveda) Director',
    image: 'https://images.unsplash.com/photo-1594824436998-d50d6e246797?auto=format&fit=crop&q=80&w=200',
  },
];

export const QuotesSection = () => {
  return (
    <View style={s.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={s.scrollContent}>
        {QUOTES.map((q) => (
          <View key={q.id} style={s.quoteCard}>
            <Text style={s.quoteMark}>❝</Text>
            <Text style={s.quoteText}>{q.text}</Text>
            <View style={s.authorRow}>
              <View style={s.authorInfo}>
                <Text style={s.authorName}>{q.author}</Text>
                <Text style={s.authorRole}>{q.role}</Text>
              </View>
              <Image source={{ uri: q.image }} style={s.authorImg} />
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    marginTop: 6,
  },
  scrollContent: {
    paddingHorizontal: 6,
    gap: 12,
  },
  quoteCard: {
    width: 260,
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 6,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    justifyContent: 'space-between',
  },
  quoteMark: {
    fontSize: 24,
    color: '#064E3B',
    marginBottom: 4,
  },
  quoteText: {
    fontSize: 12,
    color: '#4B5563',
    lineHeight: 18,
    fontStyle: 'italic',
    marginBottom: 6,
  },
  authorRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  authorInfo: {
    flex: 1,
    marginRight: 10,
  },
  authorName: {
    fontSize: 12,
    fontWeight: '800',
    color: '#0A2518',
  },
  authorRole: {
    fontSize: 10,
    color: '#6B7280',
    marginTop: 2,
  },
  authorImg: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
});
