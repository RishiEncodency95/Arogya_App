import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Text, KeyboardAvoidingView, Platform, SafeAreaView } from 'react-native';
import { UserPlus, Lock } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../components/Header';
import { FormHeader } from '../components/delegateRegForm/FormHeader';
import { FormInput } from '../components/delegateRegForm/FormInput';
import { FormSelect } from '../components/delegateRegForm/FormSelect';
import { FormAgreement } from '../components/delegateRegForm/FormAgreement';

export const DelegateRegistrationFormScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={s.safeArea}>
      <KeyboardAvoidingView 
        style={s.keyboardView} 
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView contentContainerStyle={s.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={s.card}>
            <View style={s.secureBadge}>
              <Lock size={12} color="#064E3B" />
              <Text style={s.secureText}>SECURE REGISTRATION</Text>
            </View>

            <FormHeader />

            <View style={s.row}>
              <View style={s.colSmall}>
                <FormSelect label="Title" required placeholder="Select" />
              </View>
              <View style={s.colLarge}>
                <FormInput label="Full Name" required placeholder="Enter your full name" />
              </View>
            </View>

            <FormInput label="Email Address" required placeholder="Enter your email address" keyboardType="email-address" />

            <View style={s.row}>
              <View style={s.colHalf}>
                <FormInput label="Mobile Number" required placeholder="Enter mobile number" keyboardType="phone-pad" />
              </View>
              <View style={s.colHalf}>
                <FormInput label="WhatsApp Number" placeholder="Enter WhatsApp number" keyboardType="phone-pad" />
              </View>
            </View>

            <View style={s.row}>
              <View style={s.colHalf}>
                <FormInput label="Designation" required placeholder="Enter your designation" />
              </View>
              <View style={s.colHalf}>
                <FormInput label="Organization / Company" required placeholder="Enter organization" />
              </View>
            </View>

            <View style={s.row}>
              <View style={s.colHalf}>
                <FormSelect label="Country" required placeholder="Select country" />
              </View>
              <View style={s.colHalf}>
                <FormInput label="City" required placeholder="Enter your city" />
              </View>
            </View>

            <View style={s.row}>
              <View style={s.colHalf}>
                <FormSelect label="Industry Type" required placeholder="Select industry" />
              </View>
              <View style={s.colHalf}>
                <FormSelect label="Areas of Interest" required placeholder="Select your area" />
              </View>
            </View>

            <FormSelect label="How did you hear about IHWE 2026?" required placeholder="Select an option" />

            <FormAgreement />

            <TouchableOpacity style={s.submitBtn} activeOpacity={0.8} onPress={() => navigation.goBack()}>
              <UserPlus size={16} color="#FFF" />
              <Text style={s.submitBtnText}>REGISTER NOW</Text>
            </TouchableOpacity>

            <Text style={s.footerText}>
              <Lock size={10} color="#6B7280" style={s.footerIcon} /> Your information is secure with us.
            </Text>
          </View>
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
    padding: 6,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    borderWidth: 1,
    borderColor: '#F3F4F6',
    marginTop: 6,
  },
  secureBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0FDF4',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    alignSelf: 'flex-end',
    marginBottom:4,
    borderWidth: 1,
    borderColor: '#DCFCE7',
  },
  secureText: {
    fontSize: 8,
    fontWeight: '800',
    color: '#064E3B',
    marginLeft: 4,
  },
  row: {
    flexDirection: 'row',
    gap: 10,
  },
  colSmall: {
    flex: 0.35,
  },
  colLarge: {
    flex: 0.65,
  },
  colHalf: {
    flex: 0.5,
  },
  submitBtn: {
    backgroundColor: '#064E3B',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 8,
    gap: 8,
    elevation: 3,
    shadowColor: '#064E3B',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    marginTop: 6,
  },
  submitBtnText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  footerText: {
    textAlign: 'center',
    fontSize: 9,
    color: '#6B7280',
    marginTop: 10,
  },
  footerIcon: {
    marginBottom: -2,
  },
});
