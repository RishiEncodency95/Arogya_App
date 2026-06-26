import React, { useState, useEffect, useRef } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet,
  StatusBar, Image, KeyboardAvoidingView, Platform, Dimensions, Keyboard, Alert, ActivityIndicator
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Svg, { Path, Circle, Rect } from 'react-native-svg';
import Icon from 'react-native-vector-icons/Feather';
import { API_BASE_URL } from '@env';

const GREEN = '#0A4232';
const CREAM = '#F8F9F5';
const MUTED = '#8a9a88';

const LotusIcon = ({ color = GREEN, size = 18 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M12 2C12 2 15 7 15 11C15 15 12 18 12 18C12 18 9 15 9 11C9 7 12 2 12 2Z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
    <Path d="M12 18C12 18 17 17 20 13C23 9 20 5 20 5C20 5 18 9 15 11C13 12.3333 12 18 12 18Z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
    <Path d="M12 18C12 18 7 17 4 13C1 9 4 5 4 5C4 5 6 9 9 11C11 12.3333 12 18 12 18Z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
  </Svg>
);

const ShieldCheckIcon = ({ color = GREEN }) => (
  <Svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <Path d="M12 22S20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <Path d="M9 12L11 14L15 10" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

const LockBadgeIcon = () => (
  <Svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <Rect x="5" y="11" width="14" height="10" rx="2" stroke={GREEN} strokeWidth="1.5" />
    <Path d="M8 11V7a4 4 0 118 0v4" stroke={GREEN} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <Circle cx="12" cy="16" r="1.5" fill={GREEN} />
  </Svg>
);

export const OTPScreen = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const mobile = route.params?.mobile || '98765 43210';

  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(30);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const inputRefs = useRef<Array<TextInput | null>>([null, null, null, null, null, null]);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
      () => setKeyboardVisible(true)
    );
    const keyboardDidHideListener = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
      () => setKeyboardVisible(false)
    );
    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer(prev => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleOtpChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value !== '' && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const isComplete = otp.every(d => d !== '');

  const handleVerify = async () => {
    if (!isComplete) return;
    
    setIsVerifying(true);
    try {
      const res = await fetch(`${API_BASE_URL}/delegates-registration/verify-login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile, otp: otp.join('') }),
      });
      const data = await res.json();
      
      if (data.success) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Main' }],
        });
      } else {
        Alert.alert("Verification Failed", data.message || "Invalid OTP.");
      }
    } catch (error: any) {
      console.log("Verify Error:", error.message, "URL:", API_BASE_URL);
      Alert.alert("Error", `Connection error or App error.\nMessage: ${error.message}`);
    } finally {
      setIsVerifying(false);
    }
  };

  const handleResend = async () => {
    setIsResending(true);
    try {
      const res = await fetch(`${API_BASE_URL}/delegates-registration/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile }),
      });
      const data = await res.json();
      
      if (data.success) {
        setTimer(30);
        Alert.alert("Success", "OTP resent successfully to your WhatsApp.");
      } else {
        Alert.alert("Error", data.message || "Could not resend OTP.");
      }
    } catch (error: any) {
      console.log("Resend Error:", error.message, "URL:", API_BASE_URL);
      Alert.alert("Error", `Server error.\nURL: ${API_BASE_URL}\nMessage: ${error.message}`);
    } finally {
      setIsResending(false);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />

      <Image
        source={require('../../assets/auth/login.png')}
        style={styles.absoluteBackground}
        resizeMode="cover"
      />

      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior="padding"
      >
        <View style={[styles.overlay, { paddingBottom: isKeyboardVisible ? 0 : (Platform.OS === 'ios' ? 30 : 100) }]}>
          {/* Card */}
          <View style={styles.card}>
            {/* Top Badge */}
            <View style={styles.topBadge}>
              <View style={styles.topBadgeInner}>
                <LockBadgeIcon />
              </View>
            </View>

            <Text style={styles.title}>Verify Your Mobile Number</Text>

            <View style={styles.lotusDivider}>
              <View style={styles.line} />
              <LotusIcon color={GREEN} size={16} />
              <View style={styles.line} />
            </View>

            <Text style={styles.subtitle}>Enter the 6-digit OTP sent to</Text>
            
            <View style={styles.phoneRow}>
              <Text style={styles.phoneNumber}>+91 {mobile}</Text>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.changeText}>Change?</Text>
              </TouchableOpacity>
            </View>

            {/* OTP Boxes */}
            <View style={styles.otpRow}>
              {otp.map((digit, i) => (
                <TextInput
                  key={i}
                  ref={ref => { inputRefs.current[i] = ref; }}
                  style={[styles.otpBox, digit !== '' && styles.otpBoxFilled]}
                  keyboardType="number-pad"
                  maxLength={1}
                  value={digit}
                  placeholder="-"
                  placeholderTextColor="#ccc"
                  onChangeText={val => handleOtpChange(val, i)}
                  onKeyPress={e => handleKeyPress(e, i)}
                  selectionColor={GREEN}
                  textAlign="center"
                />
              ))}
            </View>

            {/* Resend */}
            <Text style={styles.resendTitle}>Didn't receive the OTP?</Text>
            {timer > 0 ? (
              <Text style={styles.resendSub}>
                <Text style={styles.resendLink}>Resend OTP in </Text>
                <Text style={styles.timerText}>00:{timer.toString().padStart(2, '0')}</Text>
              </Text>
            ) : (
              <TouchableOpacity onPress={handleResend} disabled={isResending}>
                {isResending ? (
                   <ActivityIndicator size="small" color={GREEN} />
                ) : (
                   <Text style={styles.resendLink}>Resend OTP</Text>
                )}
              </TouchableOpacity>
            )}

            {/* Verify Button */}
            <TouchableOpacity 
              style={[styles.verifyBtn, !isComplete && styles.verifyBtnDisabled]} 
              activeOpacity={0.85} 
              onPress={handleVerify}
              disabled={!isComplete || isVerifying}
            >
              {isVerifying ? (
                 <ActivityIndicator size="small" color="#fff" />
              ) : (
                 <>
                   <Text style={styles.verifyBtnText}>VERIFY OTP</Text>
                   <View style={styles.arrowCircle}>
                     <Icon name="arrow-right" size={16} color="#fff" />
                   </View>
                 </>
              )}
            </TouchableOpacity>
          </View>

        

        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  absoluteBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  keyboardView: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  card: {
    width: '100%',
    backgroundColor: CREAM,
    borderRadius: 24,
    paddingHorizontal: 20,
    paddingTop: 22,
    paddingBottom: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 8,
    marginBottom: 20,
  },
  topBadge: {
    position: 'absolute',
    top: -20,
    width: 42,
    height: 42,
    borderRadius: 24,
    backgroundColor: CREAM,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#e5e7e0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  topBadgeInner: {
    width: 33,
    height: 33,
    borderRadius: 18,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: GREEN,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: GREEN,
    marginBottom: 4,
    fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif',
    textAlign: 'center',
  },
  lotusDivider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 8,
  },
  line: {
    width: 30,
    height: 1,
    backgroundColor: '#ccc',
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 6,
  },
  phoneRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 14,
  },
  phoneNumber: {
    fontSize: 15,
    fontWeight: '700',
    color: GREEN,
  },
  changeText: {
    fontSize: 14,
    color: '#0D7B8A',
  },
  otpRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 24,
  },
  otpBox: {
    width: 44,
    height: 52,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e5e7e0',
    borderRadius: 10,
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
  },
  otpBoxFilled: {
    borderColor: GREEN,
  },
  resendTitle: {
    fontSize: 13,
    color: '#555',
    marginBottom: 6,
  },
  resendSub: {
    marginBottom: 24,
  },
  resendLink: {
    fontSize: 13,
    color: GREEN,
    fontWeight: '600',
    marginBottom: 12,
  },
  timerText: {
    fontSize: 13,
    color: '#333',
    fontWeight: '600',
  },
  verifyBtn: {
    width: '100%',
    height: 48,
    backgroundColor: GREEN,
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: GREEN,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  verifyBtnDisabled: {
    backgroundColor: '#a8c4b4',
    shadowOpacity: 0,
  },
  verifyBtnText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#fff',
    letterSpacing: 0.5,
  },
  arrowCircle: {
    position: 'absolute',
    right: 12,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  privacyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginTop: 20,
  },
  privacyText: {
    fontSize: 12,
    color: GREEN,
    fontWeight: '600',
  },
});