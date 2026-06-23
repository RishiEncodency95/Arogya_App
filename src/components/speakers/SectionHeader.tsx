import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Leaf } from 'lucide-react-native';

const C = {
  green: '#133E2B',
  gold: '#B69A5E',
  dark: '#111A15',
};

interface SectionHeaderProps {
  title: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <View style={s.container}>
      <Leaf size={14} color={C.green} fill={C.green} />
      <Text style={s.title}>{title}</Text>
      <Leaf size={14} color={C.green} fill={C.green} style={{ transform: [{ scaleX: -1 }] }} />
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 6,
    gap: 12,
  },
  title: {
    fontSize: 14,
    fontWeight: '800',
    color: C.green,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});
