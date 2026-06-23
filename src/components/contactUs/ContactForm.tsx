import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Send, User, Mail, Tag, MessageSquare } from 'lucide-react-native';

export const ContactForm = () => {
  return (
    <View style={s.container}>
      <Text style={s.title}>Send Us a Message</Text>
      
      <View style={s.row}>
        <View style={s.inputWrapperHalf}>
          <User size={14} color="#6B7280" style={s.icon} />
          <TextInput style={s.input} placeholder="Full Name *" placeholderTextColor="#9CA3AF" />
        </View>
        <View style={s.inputWrapperHalf}>
          <Mail size={14} color="#6B7280" style={s.icon} />
          <TextInput style={s.input} placeholder="Email Address *" placeholderTextColor="#9CA3AF" keyboardType="email-address" />
        </View>
      </View>

      <View style={s.inputWrapper}>
        <Tag size={14} color="#6B7280" style={s.icon} />
        <TextInput style={s.input} placeholder="Subject *" placeholderTextColor="#9CA3AF" />
      </View>

      <View style={[s.inputWrapper, s.textAreaWrapper]}>
        <MessageSquare size={14} color="#6B7280" style={s.iconArea} />
        <TextInput 
          style={[s.input, s.textArea]} 
          placeholder="Your Message *" 
          placeholderTextColor="#9CA3AF" 
          multiline 
          numberOfLines={4}
          textAlignVertical="top"
        />
      </View>

      <View style={s.actionRow}>
        <TouchableOpacity style={s.submitBtn} activeOpacity={0.8}>
          <Send size={14} color="#FFF" />
          <Text style={s.submitBtnText}>Send Message</Text>
        </TouchableOpacity>
        <Text style={s.cursiveText}>We will get back to you soon!</Text>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 12,
    marginHorizontal: 16,
    marginBottom: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },
  title: {
    fontSize: 20,
    fontWeight: '900',
    color: '#0A2518',
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
  },
  inputWrapperHalf: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#FFF',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 12,
    backgroundColor: '#FFF',
  },
  textAreaWrapper: {
    alignItems: 'flex-start',
    paddingVertical: 10,
  },
  icon: {
    marginRight: 8,
  },
  iconArea: {
    marginRight: 8,
    marginTop: 2,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 12,
    color: '#111827',
  },
  textArea: {
    height: 80,
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginTop: 4,
  },
  submitBtn: {
    backgroundColor: '#0A2518',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    gap: 8,
  },
  submitBtnText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '700',
  },
  cursiveText: {
    fontSize: 12,
    color: '#4B5563',
    fontStyle: 'italic',
  },
});
