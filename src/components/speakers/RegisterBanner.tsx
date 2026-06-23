import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { CalendarDays, ArrowRight } from 'lucide-react-native';

const C = {
  greenDark: '#0A2518',
  gold: '#EBB422',
  textLight: '#E8F5EE',
};

export const RegisterBanner = () => {
  return (
    <View style={s.container}>
      <View style={s.content}>
        <View style={s.iconBox}>
          <CalendarDays size={24} color={C.gold} />
        </View>
        <View style={s.textContainer}>
          <Text style={s.subtitle}>Be a part of insightful sessions and meaningful discussions.</Text>
          <Text style={s.title}>Register now and secure your seat!</Text>
        </View>
        <TouchableOpacity style={s.button} activeOpacity={0.8}>
          <Text style={s.buttonText}>REGISTER NOW</Text>
          <ArrowRight size={16} color={C.greenDark} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    marginHorizontal: 2,
    marginTop: 0,
    marginBottom: 20,
    backgroundColor: C.greenDark,
    borderRadius: 12,
    overflow: 'hidden',
  },
  content: {
    padding: 10,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 6,
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(235, 180, 34, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 12,
    color: C.textLight,
    marginBottom: 4,
    opacity: 0.8,
    textAlign: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFF',
    textAlign: 'center',
  },
  button: {
    backgroundColor: C.gold,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 14,
    gap: 8,
  },
  buttonText: {
    fontSize: 12,
    fontWeight: '800',
    color: C.greenDark,
  },
});
