import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet,
  StatusBar, Image, KeyboardAvoidingView, Platform, Dimensions, Keyboard, Modal
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Feather';
import Svg, { Path } from 'react-native-svg';

const { width } = Dimensions.get('window');

const GREEN = '#0A4232';
const CREAM = '#F8F9F5';
const BORDER = '#DCE8D4';

const LotusIcon = ({ color = GREEN, size = 18 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M12 2C12 2 15 7 15 11C15 15 12 18 12 18C12 18 9 15 9 11C9 7 12 2 12 2Z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
    <Path d="M12 18C12 18 17 17 20 13C23 9 20 5 20 5C20 5 18 9 15 11C13 12.3333 12 18 12 18Z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
    <Path d="M12 18C12 18 7 17 4 13C1 9 4 5 4 5C4 5 6 9 9 11C11 12.3333 12 18 12 18Z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
  </Svg>
);

const COUNTRIES = [
  { code: '+91', name: 'India', flag: '🇮🇳' },
  { code: '+1', name: 'USA', flag: '🇺🇸' },
  { code: '+44', name: 'UK', flag: '🇬🇧' },
  { code: '+61', name: 'Australia', flag: '🇦🇺' },
  { code: '+971', name: 'UAE', flag: '🇦🇪' },
];

export const LoginScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [mobile, setMobile] = useState('');
  const [fullName, setFullName] = useState('');
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  
  const [countryCode, setCountryCode] = useState('+91');
  const [isCountryModalVisible, setCountryModalVisible] = useState(false);

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

  const handleLogin = () => {
    // Navigate to OTP for verification
    if (mobile.length > 0) {
      navigation.navigate('OTP', { mobile });
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />

      {/* Absolute Background Image so it NEVER moves or shrinks */}
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
            <Text style={styles.title}>Welcome </Text>

            <View style={styles.lotusDivider}>
              <View style={styles.line} />
              <LotusIcon color={GREEN} size={16} />
              <View style={styles.line} />
            </View>

            <Text style={styles.subtitle}>Login to continue your journey</Text>

            {/* Mobile Input */}
            <View style={styles.inputContainer}>
              <Icon name="phone" size={18} color={GREEN} style={styles.inputIcon} />

              <TouchableOpacity 
                style={styles.countryCode} 
                activeOpacity={0.7} 
                onPress={() => setCountryModalVisible(true)}
              >
                <Text style={styles.countryCodeText}>{countryCode}</Text>
                <Icon name="chevron-down" size={16} color="#666" />
              </TouchableOpacity>

              <View style={styles.verticalDivider} />

              <TextInput
                style={styles.input}
                placeholder="Mobile Number"
                placeholderTextColor="#888"
                keyboardType="phone-pad"
                value={mobile}
                onChangeText={setMobile}
              />
            </View>

            {/* Full Name Input */}
            <View style={styles.inputContainer}>
              <Icon name="user" size={18} color={GREEN} style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Full Name"
                placeholderTextColor="#888"
                value={fullName}
                onChangeText={setFullName}
              />
            </View>

            {/* Login Button */}
            <TouchableOpacity style={styles.loginBtn} activeOpacity={0.85} onPress={handleLogin}>
              <Text style={styles.loginBtnText}>LOGIN</Text>
              <View style={styles.arrowCircle}>
                <Icon name="arrow-right" size={16} color="#fff" />
              </View>
            </TouchableOpacity>
          </View>

        </View>
      </KeyboardAvoidingView>

      {/* Country Code Modal */}
      <Modal
        visible={isCountryModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setCountryModalVisible(false)}
      >
        <TouchableOpacity 
          style={styles.modalOverlay} 
          activeOpacity={1} 
          onPressOut={() => setCountryModalVisible(false)}
        >
          <TouchableOpacity activeOpacity={1} style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Country Code</Text>
            
            {COUNTRIES.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.countryItem}
                onPress={() => {
                  setCountryCode(item.code);
                  setCountryModalVisible(false);
                }}
              >
                <Text style={styles.countryItemFlag}>{item.flag}</Text>
                <Text style={styles.countryItemName}>{item.name}</Text>
                <Text style={styles.countryItemCode}>{item.code}</Text>
              </TouchableOpacity>
            ))}
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>

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
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 32,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 8,
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: GREEN,
    marginBottom: 6,
    fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif',
  },
  lotusDivider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    gap: 8,
  },
  line: {
    width: 30,
    height: 1,
    backgroundColor: '#ccc',
  },
  lotusIcon: {
    fontSize: 14,
    color: GREEN,
  },
  subtitle: {
    fontSize: 13,
    color: '#666',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 44,
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: 14,
    backgroundColor: '#fff',
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: '#333',
    height: '100%',
  },
  countryCode: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 6,
  },
  verticalDivider: {
    width: 1,
    height: 20,
    backgroundColor: BORDER,
    marginRight: 6,
  },
  countryCodeText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
    marginRight: 4,
  },
  eyeIcon: {
    padding: 4,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    paddingBottom: Platform.OS === 'ios' ? 40 : 24,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  countryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  countryItemFlag: {
    fontSize: 24,
    marginRight: 12,
  },
  countryItemName: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  countryItemCode: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
  },
  forgotBtn: {
    alignSelf: 'flex-end',
    marginBottom: 18,
    marginTop: -4,
  },
  forgotText: {
    fontSize: 12,
    fontWeight: '700',
    color: GREEN,
  },
  loginBtn: {
    width: '100%',
    height: 44,
    backgroundColor: GREEN,
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: GREEN,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  loginBtnText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
    letterSpacing: 1,
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

});