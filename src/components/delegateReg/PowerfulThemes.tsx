import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { CheckCircle2, Leaf } from 'lucide-react-native';

const THEMES = [
  {
    id: '1',
    day: 'DAY 1',
    date: '18 JUNE 2026',
    title: 'INNOVATE',
    subtitle: 'Driving Healthcare\nThrough Innovation',
    points: ['Medical Innovation & Research', 'Digital Health & AI', 'Startups & Emerging Technologies', 'Future of Healthcare Delivery'],
    bgImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    color: '#208C84',
    bgColor: '#0A2518',
  },
  {
    id: '2',
    day: 'DAY 2',
    date: '19 JUNE 2026',
    title: 'COLLABORATE',
    subtitle: 'Building Partnerships\nfor a Healthier World',
    points: ['Industry Collaboration', 'Global Health Partnerships', 'Public-Private Synergy', 'Community Engagement'],
    bgImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
    color: '#2B5A8A',
    bgColor: '#0A1525',
  },
  {
    id: '3',
    day: 'DAY 3',
    date: '20 JUNE 2026',
    title: 'SUSTAIN',
    subtitle: 'Creating Lasting\nEnvironmental Impact',
    points: ['Sustainable Healthcare', 'Green Hospitals', 'Climate & Health', 'Policy & Governance'],
    bgImage: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800',
    color: '#4A7A3A',
    bgColor: '#1A2A1A',
  },
];

export const PowerfulThemes = () => {
  return (
    <View style={s.container}>
      <View style={s.headerRow}>
        <Leaf size={12} color="#133E2B" style={{ transform: [{ scaleX: -1 }] }} />
        <Text style={s.headerTitle}>3 DAYS. 3 POWERFUL THEMES. ENDLESS POSSIBILITIES.</Text>
        <Leaf size={12} color="#133E2B" />
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={s.scrollContent}>
        {THEMES.map((theme) => (
          <View key={theme.id} style={[s.card, { backgroundColor: theme.bgColor }]}>
            <Image
              source={{ uri: theme.bgImage }}
              style={s.bgImage}
              resizeMode="cover"
            />
            <View style={s.overlay} />
            <View style={s.cardContent}>
              <View style={s.dateBadge}>
                <Text style={s.dayText}>{theme.day}</Text>
                <Text style={s.dateText}>|  {theme.date}</Text>
              </View>

              <Text style={s.title}>{theme.title}</Text>
              <Text style={s.subtitle} numberOfLines={1} ellipsizeMode="tail">{theme.subtitle}</Text>

              <View style={s.pointsList}>
                {theme.points.map((pt, idx) => (
                  <View key={idx} style={s.pointRow}>
                    <CheckCircle2 size={12} color="#FFF" />
                    <Text style={s.pointText}>{pt}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    backgroundColor: '#FAF7F2',
    paddingVertical: 6,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 12,
    paddingHorizontal: 16,
  },
  headerTitle: {
    fontSize: 11,
    fontWeight: '800',
    color: '#133E2B',
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  scrollContent: {
    paddingHorizontal: 6,
    gap: 6,
  },
  card: {
    width: 300,
    height: 180,
    borderRadius: 12,
    overflow: 'hidden',
  },
  bgImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0.5,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // backgroundColor: 'rgba(0,0,0,0.3)',
  },
  cardContent: {
    paddingHorizontal: 6,
    flex: 1,
    justifyContent: 'center',
  },
  dateBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  dayText: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 12,
    color: '#FFF',
    fontSize: 10,
    fontWeight: '800',
  },
  dateText: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: '700',
    marginLeft: 8,
  },
  title: {
    fontSize: 17,
    fontWeight: '800',
    color: '#FFF',
    marginBottom: 2,
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 14,
    color: '#EEE',
    fontWeight: '600',
    marginBottom: 8,
    // lineHeight: 18,
  },
  pointsList: {
    gap: 8,
  },
  pointRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  pointText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '500',
  },
});
