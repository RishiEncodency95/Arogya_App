import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { CheckCircle2, Leaf } from 'lucide-react-native';

const THEMES = [
  {
    id: '1',
    day: 'DAY 1',
    date: '18 JUNE 2026',
    title: 'INNOVATE',
    subtitle: 'Driving Healthcare\nThrough Innovation',
    points: ['Medical Innovation & Research', 'Digital Health & AI', 'Startups & Emerging Technologies', 'Future of Healthcare Delivery'],
    bgImage: 'https://images.unsplash.com/photo-1576091160550-2173ff9e5e3c?auto=format&fit=crop&q=80&w=500',
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
    bgImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=500',
    color: '#2B5A8A',
    bgColor: '#0A1525',
  },
  {
    id: '3',
    day: 'DAY 3',
    date: '20 JUNE 2026',
    title: 'SUSTAIN',
    subtitle: 'Sustainable Solutions\nfor Long-Term Impact',
    points: ['Sustainable Healthcare Systems', 'Wellness, Nutrition & Lifestyle', 'Environmental Health', 'Policy & Governance for Tomorrow'],
    bgImage: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=500',
    color: '#4A7A3A',
    bgColor: '#1A2A1A',
  },
];

export const PowerfulThemes = () => {
  return (
    <View style={s.container}>
      <View style={s.headerRow}>
        <Leaf size={14} color="#133E2B" style={{ transform: [{ scaleX: -1 }] }} />
        <Text style={s.headerTitle}>3 DAYS. 3 POWERFUL THEMES. ENDLESS POSSIBILITIES.</Text>
        <Leaf size={14} color="#133E2B" />
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={s.scrollContent}>
        {THEMES.map((theme) => (
          <View key={theme.id} style={[s.card, { backgroundColor: theme.bgColor }]}>
            <ImageBackground source={{ uri: theme.bgImage }} style={s.bgImage} imageStyle={s.bgImageStyle}>
              <View style={s.overlay} />
              <View style={s.cardContent}>
                <View style={s.dateBadge}>
                  <Text style={s.dayText}>{theme.day}</Text>
                  <Text style={s.dateText}>|  {theme.date}</Text>
                </View>
                
                <Text style={s.title}>{theme.title}</Text>
                <Text style={s.subtitle}>{theme.subtitle}</Text>
                
                <View style={s.pointsList}>
                  {theme.points.map((pt, idx) => (
                    <View key={idx} style={s.pointRow}>
                      <CheckCircle2 size={12} color="#FFF" />
                      <Text style={s.pointText}>{pt}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </ImageBackground>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    backgroundColor: '#FAF7F2',
    paddingVertical: 12,
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
    width: 280,
    height: 180,
    borderRadius: 12,
    overflow: 'hidden',
  },
  bgImage: {
    width: '100%',
    height: '100%',
  },
  bgImageStyle: {
    opacity: 0.4,
  },
  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  cardContent: {
    padding: 16,
    flex: 1,
    justifyContent: 'center',
  },
  dateBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  dayText: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 8,
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
    fontSize: 24,
    fontWeight: '900',
    color: '#FFF',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 12,
    color: '#DDD',
    fontWeight: '600',
    marginBottom: 12,
    lineHeight: 16,
  },
  pointsList: {
    gap: 6,
  },
  pointRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  pointText: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: '500',
  },
});
