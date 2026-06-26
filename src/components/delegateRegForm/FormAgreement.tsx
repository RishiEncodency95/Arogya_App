import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Check } from 'lucide-react-native';
interface FormAgreementProps {
  value?: boolean;
  onValueChange?: (value: boolean) => void;
}

export const FormAgreement: React.FC<FormAgreementProps> = ({ value = false, onValueChange }) => {
  return (
    <View style={s.container}>
      <TouchableOpacity 
        style={[s.checkbox, value && s.checked]} 
        activeOpacity={0.8}
        onPress={() => onValueChange && onValueChange(!value)}
      >
        {value && <Check size={12} color="#FFF" />}
      </TouchableOpacity>
      <Text style={s.text}>
        I agree to the <Text style={s.link}>Terms & Conditions</Text> and <Text style={s.link}>Privacy Policy</Text>. <Text style={s.asterisk}>*</Text>
      </Text>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 6,
  },
  checkbox: {
    width: 16,
    height: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  checked: {
    backgroundColor: '#064E3B',
    borderColor: '#064E3B',
  },
  text: {
    fontSize: 10,
    color: '#4B5563',
    flex: 1,
  },
  link: {
    fontWeight: '700',
    color: '#064E3B',
    textDecorationLine: 'underline',
  },
  asterisk: {
    color: '#EF4444',
  },
});
