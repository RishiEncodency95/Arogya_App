import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const FormHeader = () => {
  return (
    <View style={s.container}>
      <Text style={s.title}>DELEGATE REGISTRATION</Text>
      <View style={s.divider} />
      <Text style={s.subtitle}>Please fill in the details below to register as a delegate.</Text>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    marginBottom: 12,
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 18,
    fontWeight: '900',
    color: '#064E3B',
    letterSpacing: 0.5,
  },
  divider: {
    width: 40,
    height: 3,
    backgroundColor: '#064E3B',
    borderRadius: 2,
    marginTop: 4,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 10,
    color: '#4B5563',
    fontWeight: '500',
  },
});
