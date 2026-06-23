import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ChevronDown } from 'lucide-react-native';

interface FormSelectProps {
  label: string;
  required?: boolean;
  placeholder: string;
}

export const FormSelect: React.FC<FormSelectProps> = ({ label, required, placeholder }) => {
  return (
    <View style={s.container}>
      <Text style={s.label}>
        {label} {required && <Text style={s.asterisk}>*</Text>}
      </Text>
      <TouchableOpacity style={s.selectBox} activeOpacity={0.8}>
        <Text style={s.placeholder}>{placeholder}</Text>
        <ChevronDown size={16} color="#6B7280" />
      </TouchableOpacity>
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
  selectBox: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 6,
    height: 34,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  placeholder: {
    fontSize: 11,
    color: '#9CA3AF',
  },
});
