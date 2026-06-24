import React from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView, Platform, KeyboardAvoidingView } from 'react-native';
import { Header } from '../components/Header';
import { ContactHeader } from '../components/contactUs/ContactHeader';
import { ContactInfoCards } from '../components/contactUs/ContactInfoCards';
import { ContactForm } from '../components/contactUs/ContactForm';
import { ContactReasons } from '../components/contactUs/ContactReasons';
import { ContactMapNewsletter } from '../components/contactUs/ContactMapNewsletter';

export const ContactUsScreen = () => {
  return (
    <SafeAreaView style={s.safeArea}>

      <KeyboardAvoidingView
        style={s.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={s.scrollContent}
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          <ContactHeader />
          <ContactInfoCards />
          <ContactForm />
          <ContactReasons />
          <ContactMapNewsletter />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const s = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    backgroundColor: '#F9FAFB',
  },
});
