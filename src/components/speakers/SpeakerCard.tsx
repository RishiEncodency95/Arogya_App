import React from 'react';
import { View, Text, StyleSheet, Image, DimensionValue } from 'react-native';
import { BookOpen, Globe, Leaf } from 'lucide-react-native';

const C = {
  green: '#133E2B',
  greenLight: '#F3F6F4',
  border: '#EAEAEA',
  text: '#111A15',
  textMuted: '#555555',
  textDark: '#0A2518',
};

export interface SpeakerProps {
  id: string;
  name: string;
  degree: string;
  role: string;
  topic: string;
  iconType: 'book' | 'globe';
  image: string;
}

export const SpeakerCard: React.FC<{ speaker: SpeakerProps; cardWidth?: DimensionValue }> = ({ speaker, cardWidth = '49%' }) => {
  return (
    <View style={[s.card, { width: cardWidth }]}>
      <View style={s.imageContainer}>
        <Image source={{ uri: speaker.image }} style={s.image} />
        <View style={s.leafIconBadge}>
          <Leaf size={14} color="#4A7A3A" fill="#4A7A3A" />
        </View>
      </View>

      <View style={s.infoContainer}>
        <Text style={s.name} numberOfLines={1}>{speaker.name}</Text>
        <Text style={s.degree} numberOfLines={1}>{speaker.degree}</Text>
        <Text style={s.role} numberOfLines={2}>{speaker.role}</Text>
      </View>

      <View style={s.topicPill}>
        {speaker.iconType === 'globe' ? (
          <Globe size={12} color={C.green} />
        ) : (
          <BookOpen size={12} color={C.green} />
        )}
        <Text style={s.topicText} numberOfLines={2}>{speaker.topic}</Text>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  card: {
    width: '49%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: C.border,
    padding: 6,
    alignItems: 'center',
    marginBottom: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  imageContainer: {
    position: 'relative',
    marginBottom: 8,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#eee',
  },
  leafIconBadge: {
    position: 'absolute',
    bottom: -4,
    right: -8,
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 2,
  },
  infoContainer: {
    alignItems: 'center',
    marginBottom: 12,
    height: 60, // Fixed height to keep cards uniform
  },
  name: {
    fontSize: 13,
    fontWeight: '800',
    color: C.textDark,
    marginBottom: 4,
    textAlign: 'center',
  },
  degree: {
    fontSize: 10,
    color: C.textMuted,
    marginBottom: 2,
    textAlign: 'center',
  },
  role: {
    fontSize: 11,
    fontWeight: '700',
    color: '#2B4A6A', // Dark blueish color from design
    textAlign: 'center',
    lineHeight: 14,
  },
  topicPill: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: C.greenLight,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 6,
    width: '100%',
    gap: 6,
  },
  topicText: {
    fontSize: 9,
    fontWeight: '700',
    color: C.green,
    flexShrink: 1,
    textAlign: 'center',
  },
});
