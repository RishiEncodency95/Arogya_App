import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ArrowRight } from 'lucide-react-native';

const C = {
  green: '#133E2B',
  cream: '#FAF7F2',
  border: '#EAEAEA',
  textDark: '#0A2518',
  textMuted: '#555555',
};

export interface ListPersonProps {
  id: string;
  name: string;
  role: string;
  image: string;
}

export const PersonListCard: React.FC<{ person: ListPersonProps }> = ({ person }) => {
  return (
    <View style={s.card}>
      <Image source={{ uri: person.image }} style={s.image} />
      <View style={s.info}>
        <Text style={s.name}>{person.name}</Text>
        <Text style={s.role}>{person.role}</Text>
      </View>
    </View>
  );
};

export const SectionBlock: React.FC<{ title: string; children: React.ReactNode; buttonText?: string }> = ({ title, children, buttonText }) => {
  return (
    <View style={s.block}>
      <View style={s.blockHeader}>
        <Text style={s.blockTitle}>{title}</Text>
      </View>
      <View style={s.blockContent}>
        {children}
        {buttonText && (
          <View style={s.buttonContainer}>
            <TouchableOpacity style={s.blockButton} activeOpacity={0.8}>
              <Text style={s.blockButtonText}>{buttonText}</Text>
              <ArrowRight size={14} color={C.green} />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: C.border,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#eee',
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 13,
    fontWeight: '800',
    color: C.green,
    marginBottom: 4,
  },
  role: {
    fontSize: 11,
    color: C.textDark,
    lineHeight: 14,
  },
  block: {
    backgroundColor: C.cream,
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: C.green,
    marginBottom: 6,
  },
  blockHeader: {
    backgroundColor: C.green,
    paddingVertical: 8,
    alignItems: 'center',
  },
  blockTitle: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  blockContent: {
    paddingBottom: 10,
    paddingHorizontal:6,
    backgroundColor: '#FAFAF5',
  },
  buttonContainer: {
    marginTop: 6,
    alignItems: 'center',
  },
  blockButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: C.green,
    gap: 6,
    width: '100%',
  },
  blockButtonText: {
    color: C.green,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});
