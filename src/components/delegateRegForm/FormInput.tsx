import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

interface FormInputProps {
  label: string;
  required?: boolean;
  placeholder: string;
  keyboardType?: any;
  value?: string;
  onChangeText?: (text: string) => void;
  maxLength?: number;
  rightComponent?: React.ReactNode;
}

export const FormInput: React.FC<FormInputProps> = ({ 
  label, 
  required, 
  placeholder, 
  keyboardType,
  value,
  onChangeText,
  maxLength,
  rightComponent
}) => {
  return (
    <View style={s.container}>
      <Text style={s.label}>
        {label} {required && <Text style={s.asterisk}>*</Text>}
      </Text>
      <View style={s.inputWrapper}>
        <TextInput 
          style={[s.input, rightComponent ? s.inputWithRightBtn : null]} 
          placeholder={placeholder} 
          placeholderTextColor="#9CA3AF"
          keyboardType={keyboardType || 'default'}
          value={value}
          onChangeText={onChangeText}
          maxLength={maxLength}
        />
        {rightComponent && (
          <View style={s.rightComponentContainer}>
            {rightComponent}
          </View>
        )}
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    marginBottom: 10,
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
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'stretch',
    height: 34,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 6,
    paddingHorizontal: 10,
    fontSize: 11,
    color: '#111',
    backgroundColor: '#FFF',
    paddingVertical: 0,
  },
  inputWithRightBtn: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRightWidth: 0,
  },
  rightComponentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
