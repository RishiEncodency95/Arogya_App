import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { ShieldPlus, Dna, Leaf, Landmark, Network, Syringe } from 'lucide-react-native';

const THEMES = [
  { icon: ShieldPlus, label: 'Preventive &\nIntegrative Healthcare' },
  { icon: Dna, label: 'Medical Innovation\n& Research' },
  { icon: Leaf, label: 'Wellness, Nutrition\n& Lifestyle' },
  { icon: Landmark, label: 'Healthcare Policy\n& Governance' },
  { icon: Network, label: 'Digital Health\n& Technology' },
  { icon: Syringe, label: 'AYUSH &\nTraditional Wisdom' },
];

export const ConferenceThemes = () => {
  return (
    <View style={s.container}>
      <View style={s.headerRow}>
        <Leaf size={14} color="#133E2B" style={{ transform: [{ scaleX: -1 }] }} />
        <Text style={s.headerTitle}>CONFERENCE THEMES</Text>
        <Leaf size={14} color="#133E2B" />
      </View>
      
      <View style={s.card}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={s.scrollContent}>
          {THEMES.map((theme, idx) => {
            const Icon = theme.icon;
            return (
              <View key={idx} style={s.item}>
                <View style={s.iconWrapper}>
                  <Icon size={24} color="#133E2B" />
                </View>
                <Text style={s.label}>{theme.label}</Text>
                {idx < THEMES.length - 1 && <View style={s.divider} />}
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    backgroundColor: '#FAF7F2',
    paddingHorizontal: 6,
    paddingVertical: 12,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 12,
  },
  headerTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#133E2B',
    letterSpacing: 1,
  },
  card: {
    backgroundColor: '#FAFAFA',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#EAEAEA',
    paddingVertical: 12,
  },
  scrollContent: {
    paddingHorizontal: 16,
    alignItems: 'center',
    gap: 16,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 10,
    fontWeight: '700',
    color: '#111A15',
    width: 80,
  },
  divider: {
    width: 1,
    height: 30,
    backgroundColor: '#EAEAEA',
    marginLeft: 8,
  },
});
