import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

interface FormInputProps {
  label: string;
  required?: boolean;
  placeholder: string;
  keyboardType?: any;
}

export const FormInput: React.FC<FormInputProps> = ({ label, required, placeholder, keyboardType }) => {
  return (
    <View style={s.container}>
      <Text style={s.label}>
        {label} {required && <Text style={s.asterisk}>*</Text>}
      </Text>
      <TextInput 
        style={s.input} 
        placeholder={placeholder} 
        placeholderTextColor="#9CA3AF"
        keyboardType={keyboardType || 'default'}
      />
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    marginBottom: 10,
    flex: 1,
  },
  label: {
    fontSize: 10,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 4,
  },
  asterisk: {
    color: '#EF4444',
  },
  input: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 6,
    height: 34,
    fontSize: 11,
    color: '#111',
    backgroundColor: '#FFF',
  },
});
