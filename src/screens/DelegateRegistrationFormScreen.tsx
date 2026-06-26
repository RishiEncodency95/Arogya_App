import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, KeyboardAvoidingView, Platform, TouchableOpacity, Alert, ActivityIndicator, TextInput } from 'react-native';
import { Lock, UserPlus, CheckCircle2 } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { FormHeader } from '../components/delegateRegForm/FormHeader';
import { FormInput } from '../components/delegateRegForm/FormInput';
import { FormSelect, FormSelectOption } from '../components/delegateRegForm/FormSelect';
import { FormAgreement } from '../components/delegateRegForm/FormAgreement';

import { API_BASE_URL } from '@env';


export const DelegateRegistrationFormScreen = () => {
  const navigation = useNavigation();

  const [formData, setFormData] = useState({
    title: "", fullName: "", email: "", mobile: "", whatsappNumber: "",
    designation: "", organization: "", country: "", state: "", city: "",
    industryType: "", areasOfInterest: "", source: ""
  });

  const [countriesList, setCountriesList] = useState<FormSelectOption[]>([]);
  const [statesList, setStatesList] = useState<FormSelectOption[]>([]);
  const [citiesList, setCitiesList] = useState<FormSelectOption[]>([]);

  const [selectedCountryCode, setSelectedCountryCode] = useState("");
  const [selectedStateCode, setSelectedStateCode] = useState("");

  const [industries, setIndustries] = useState<FormSelectOption[]>([]);
  const [interests, setInterests] = useState<FormSelectOption[]>([]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeOtpChannel, setActiveOtpChannel] = useState<'email' | 'whatsapp' | null>(null);
  const [emailOtpSent, setEmailOtpSent] = useState(false);
  const [whatsappOtpSent, setWhatsappOtpSent] = useState(false);
  const [emailOtpVerified, setEmailOtpVerified] = useState(false);
  const [whatsappOtpVerified, setWhatsappOtpVerified] = useState(false);
  const [emailOtp, setEmailOtp] = useState("");
  const [whatsappOtp, setWhatsappOtp] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  useEffect(() => {
    fetch(`${API_BASE_URL}/countries`)
      .then(res => res.json())
      .then(data => {
        if (data.data) {
          setCountriesList(data.data.map((c: any) => ({ label: c.name, value: c.countryCode.toString() })));
        }
      })
      .catch(err => console.log(err));

    fetch(`${API_BASE_URL}/categories?type=industry`)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setIndustries(data.data.map((i: any) => ({ label: i.name, value: i.name })));
        }
      })
      .catch(err => console.log(err));

    fetch(`${API_BASE_URL}/categories?type=interest`)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setInterests(data.data.map((i: any) => ({ label: i.name, value: i.name })));
        }
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    if (selectedCountryCode) {
      fetch(`${API_BASE_URL}/states?countryCode=${selectedCountryCode}`)
        .then(res => res.json())
        .then(data => {
          if (data.data) {
            setStatesList(data.data.map((s: any) => ({ label: s.name, value: s.stateCode.toString() })));
          }
        })
        .catch(err => console.log(err));
    } else {
      setStatesList([]);
    }
  }, [selectedCountryCode]);

  useEffect(() => {
    if (selectedStateCode) {
      fetch(`${API_BASE_URL}/cities?stateCode=${selectedStateCode}`)
        .then(res => res.json())
        .then(data => {
          if (data.data) {
            setCitiesList(data.data.map((c: any) => ({ label: c.name, value: c.name })));
          }
        })
        .catch(err => console.log(err));
    } else {
      setCitiesList([]);
    }
  }, [selectedStateCode]);

  const handleChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleInitiate = async (channel: 'email' | 'whatsapp') => {
    if (!formData.fullName) return Alert.alert("Error", "Please fill in your Full Name first.");
    if (channel === 'email' && !formData.email) return Alert.alert("Error", "Please fill in your Email Address.");
    if (channel === 'whatsapp' && !formData.whatsappNumber) return Alert.alert("Error", "Please fill in your WhatsApp Number.");
    
    setActiveOtpChannel(channel);
    try {
      const res = await fetch(`${API_BASE_URL}/delegates-registration/initiate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, channel })
      });
      const data = await res.json();
      if (data.success) {
        if (channel === 'email') setEmailOtpSent(true);
        if (channel === 'whatsapp') setWhatsappOtpSent(true);
        Alert.alert("Success", data.message || `OTP sent successfully to ${channel}.`);
      } else {
        Alert.alert("Error", data.message || 'Error initiating registration.');
      }
    } catch (error) {
      Alert.alert("Error", "Failed to initiate registration.");
    } finally {
      setActiveOtpChannel(null);
    }
  };

  const handleInlineVerify = async (channel: 'email' | 'whatsapp') => {
    const otpToVerify = channel === 'email' ? emailOtp : whatsappOtp;
    if (!otpToVerify || otpToVerify.length !== 6) return;

    setActiveOtpChannel(channel);
    try {
      const res = await fetch(`${API_BASE_URL}/delegates-registration/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email, whatsappNumber: formData.whatsappNumber, channel, otp: otpToVerify })
      });
      const data = await res.json();
      if (data.success) {
        if (channel === 'email') setEmailOtpVerified(true);
        if (channel === 'whatsapp') setWhatsappOtpVerified(true);
        Alert.alert("Verified", `${channel === 'email' ? 'Email' : 'WhatsApp'} OTP Verified!`);
      } else {
        Alert.alert("Error", data.message || 'Invalid OTP');
      }
    } catch (error) {
      Alert.alert("Error", "Failed to verify OTP.");
    } finally {
      setActiveOtpChannel(null);
    }
  };

  const handleFinalSubmit = async () => {
    if (!termsAccepted) return Alert.alert("Error", "Please agree to the Terms & Conditions and Privacy Policy first.");
    if (!emailOtpVerified && !whatsappOtpVerified) return Alert.alert("Error", "Please verify your Email or WhatsApp OTP first.");

    setIsSubmitting(true);
    const finalOtp = emailOtpVerified ? emailOtp : whatsappOtp;
    try {
      const res = await fetch(`${API_BASE_URL}/delegates-registration/verify`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, otp: finalOtp })
      });
      const data = await res.json();
      if (data.success) {
        Alert.alert(
          "Registration Successful!",
          "Thank you for registering. Your details have been securely recorded.",
          [{ text: "OK", onPress: () => navigation.goBack() }]
        );
      } else {
        Alert.alert("Error", data.message || 'Error saving registration');
      }
    } catch (error) {
      Alert.alert("Error", "Failed to complete registration");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderOtpActionBtn = (channel: 'email' | 'whatsapp', sent: boolean, verified: boolean, otpVal: string, setOtpVal: any) => {
    if (verified) {
      return (
        <View style={s.otpBtnSuccess}>
          <CheckCircle2 size={12} color="#FFF" />
          <Text style={s.otpBtnText}>Verified</Text>
        </View>
      );
    }
    if (sent) {
      return (
        <View style={s.otpInputRow}>
          <View style={{ flex: 1 }}>
            <TextInput
              style={s.otpRawInput}
              placeholder="6-digit OTP"
              keyboardType="number-pad"
              maxLength={6}
              value={otpVal}
              onChangeText={setOtpVal}
              placeholderTextColor="#9CA3AF"
            />
          </View>
          <TouchableOpacity style={s.otpBtnVerifySeparate} onPress={() => handleInlineVerify(channel)}>
            <Text style={s.otpBtnText}>Verify</Text>
          </TouchableOpacity>
        </View>
      );
    }
    
    const isThisLoading = activeOtpChannel === channel;
    const isAnyLoading = activeOtpChannel !== null;
    
    return (
      <TouchableOpacity style={s.otpBtnSend} onPress={() => handleInitiate(channel)} disabled={isAnyLoading}>
        {isThisLoading ? <ActivityIndicator size="small" color="#FFF" /> : <Text style={s.otpBtnText}>Send OTP</Text>}
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={s.safeArea}>
      <KeyboardAvoidingView style={s.keyboardView} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView contentContainerStyle={s.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={s.card}>
            <View style={s.secureBadge}>
              <Lock size={12} color="#064E3B" />
              <Text style={s.secureText}>SECURE REGISTRATION</Text>
            </View>

            <FormHeader />

            <View style={s.row}>
              <View style={s.colSmall}>
                <FormSelect
                  label="Title" required placeholder="Select"
                  value={formData.title}
                  options={[{ label: 'Mr.', value: 'Mr.' }, { label: 'Ms.', value: 'Ms.' }, { label: 'Dr.', value: 'Dr.' }, { label: 'Prof.', value: 'Prof.' }]}
                  onSelect={(v) => handleChange('title', v)}
                />
              </View>
              <View style={s.colLarge}>
                <FormInput
                  label="Full Name" required placeholder="Enter full name"
                  value={formData.fullName} onChangeText={(t) => handleChange('fullName', t)}
                />
              </View>
            </View>

            <FormInput
              label="Email Address" required placeholder="Enter email address" keyboardType="email-address"
              value={formData.email} onChangeText={(t) => handleChange('email', t)}
            />
            <View style={s.otpRowAlignRight}>
              {renderOtpActionBtn('email', emailOtpSent, emailOtpVerified, emailOtp, setEmailOtp)}
            </View>

            <View style={s.row}>
              <View style={s.colHalf}>
                <FormInput
                  label="Mobile Number" required placeholder="Mobile number" keyboardType="phone-pad"
                  value={formData.mobile} onChangeText={(t) => handleChange('mobile', t)}
                />
              </View>
              <View style={s.colHalf}>
                <FormInput
                  label="WhatsApp Number" required placeholder="WhatsApp number" keyboardType="phone-pad"
                  value={formData.whatsappNumber} onChangeText={(t) => handleChange('whatsappNumber', t)}
                />
                <View style={s.otpRowAlignRight}>
                  {renderOtpActionBtn('whatsapp', whatsappOtpSent, whatsappOtpVerified, whatsappOtp, setWhatsappOtp)}
                </View>
              </View>
            </View>

            <View style={s.row}>
              <View style={s.colHalf}>
                <FormInput
                  label="Designation" required placeholder="Designation"
                  value={formData.designation} onChangeText={(t) => handleChange('designation', t)}
                />
              </View>
              <View style={s.colHalf}>
                <FormInput
                  label="Organization / Company" required placeholder="Organization"
                  value={formData.organization} onChangeText={(t) => handleChange('organization', t)}
                />
              </View>
            </View>

            <View style={s.row}>
              <View style={s.colThird}>
                <FormSelect
                  label="Country" required placeholder="Country"
                  options={countriesList} value={selectedCountryCode}
                  onSelect={(code) => {
                    setSelectedCountryCode(code);
                    const name = countriesList.find(c => c.value === code)?.label || "";
                    handleChange('country', name);
                    setSelectedStateCode("");
                    handleChange('state', "");
                    handleChange('city', "");
                  }}
                />
              </View>
              <View style={s.colThird}>
                <FormSelect
                  label="State" required placeholder="State" disabled={!selectedCountryCode}
                  options={statesList} value={selectedStateCode}
                  onSelect={(code) => {
                    setSelectedStateCode(code);
                    const name = statesList.find(c => c.value === code)?.label || "";
                    handleChange('state', name);
                    handleChange('city', "");
                  }}
                />
              </View>
              <View style={s.colThird}>
                <FormSelect
                  label="City" required placeholder="City" disabled={!selectedStateCode}
                  options={citiesList} value={formData.city}
                  onSelect={(name) => handleChange('city', name)}
                />
              </View>
            </View>

            <View style={s.row}>
              <View style={s.colHalf}>
                <FormSelect
                  label="Industry Type" required placeholder="Select industry"
                  options={industries} value={formData.industryType}
                  onSelect={(v) => handleChange('industryType', v)}
                />
              </View>
              <View style={s.colHalf}>
                <FormSelect
                  label="Areas of Interest" required placeholder="Select area"
                  options={interests} value={formData.areasOfInterest}
                  onSelect={(v) => handleChange('areasOfInterest', v)}
                />
              </View>
            </View>

            <FormSelect
              label="How did you hear about IHWE 2026?" required placeholder="Select source"
              options={[{ label: 'Social Media', value: 'Social Media' }, { label: 'Email', value: 'Email' }, { label: 'Friend / Colleague', value: 'Friend / Colleague' }, { label: 'Website', value: 'Website' }]}
              value={formData.source} onSelect={(v) => handleChange('source', v)}
            />

            <FormAgreement value={termsAccepted} onValueChange={setTermsAccepted} />

            <TouchableOpacity style={s.submitBtn} activeOpacity={0.8} onPress={handleFinalSubmit} disabled={isSubmitting}>
              {isSubmitting ? (
                <ActivityIndicator color="#FFF" size="small" />
              ) : (
                <>
                  <UserPlus size={16} color="#FFF" />
                  <Text style={s.submitBtnText}>REGISTER NOW</Text>
                </>
              )}
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
    flexGrow: 1,
    padding: 12,
    paddingBottom: 40,
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
    marginBottom: 4,
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
  colThird: {
    flex: 0.33,
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
  otpBtnSend: {
    backgroundColor: '#064E3B',
    paddingHorizontal: 12,
    paddingVertical: 8,
    justifyContent: 'center',
    borderRadius: 6,
  },
  otpBtnVerify: {
    backgroundColor: '#064E3B',
    paddingHorizontal: 12,
    justifyContent: 'center',
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
  },
  otpInputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    marginTop: 4,
    marginBottom: 6,
  },
  otpRawInput: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 6,
    paddingHorizontal: 10,
    fontSize: 11,
    color: '#111',
    backgroundColor: '#FFF',
    height: 34,
    paddingVertical: 0,
  },
  otpBtnVerifySeparate: {
    backgroundColor: '#064E3B',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    height: 34,
  },
  otpBtnSuccess: {
    backgroundColor: '#16A34A',
    paddingHorizontal: 12,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    borderRadius: 6,
  },
  otpBtnText: {
    color: '#FFF',
    fontSize: 9,
    fontWeight: '700',
  },
  otpRow: {
    marginTop: 0,
    marginBottom: 8,
  },
  otpRowAlignRight: {
    marginTop: 0,
    marginBottom: 8,
    alignItems: 'flex-end',
  }
});
