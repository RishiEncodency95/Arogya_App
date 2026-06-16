import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Svg, { Ellipse, Circle, Path, Rect } from 'react-native-svg';

const GREEN = '#1a5c3a';
const GOLD = '#d4922a';
const LIGHT_BG = '#f8f9f5';
const BORDER = '#dce8d4';
const MUTED = '#8a9a88';
const MUTED_TEXT = '#6b7c6a';

// ── Leaf Background SVG ────────────────────────────────────────────────────────
const LeafBackground = () => (
  <View style={StyleSheet.absoluteFill} pointerEvents="none">
    <Svg width="375" height="812" viewBox="0 0 375 812">
      {/* Top-right leaves */}
      <Ellipse cx="340" cy="80" rx="60" ry="100" fill="#d4e8cc" opacity="0.4"
        transform="rotate(-30, 340, 80)" />
      <Ellipse cx="330" cy="60" rx="35" ry="60" fill="#b8d4a8" opacity="0.3"
        transform="rotate(-30, 330, 60)" />
      {/* Top-left leaves */}
      <Ellipse cx="20" cy="140" rx="55" ry="90" fill="#d4e8cc" opacity="0.35"
        transform="rotate(40, 20, 140)" />
      <Ellipse cx="30" cy="120" rx="30" ry="55" fill="#b8d4a8" opacity="0.25"
        transform="rotate(40, 30, 120)" />
      {/* Bottom leaves */}
      <Ellipse cx="10" cy="700" rx="50" ry="80" fill="#d4e8cc" opacity="0.35"
        transform="rotate(20, 10, 700)" />
      <Ellipse cx="355" cy="720" rx="45" ry="75" fill="#d4e8cc" opacity="0.3"
        transform="rotate(-40, 355, 720)" />
      {/* Gold sparkles */}
      <Circle cx="180" cy="50" r="4" fill={GOLD} opacity="0.4" />
      <Circle cx="290" cy="180" r="5" fill={GOLD} opacity="0.5" />
      <Circle cx="80" cy="220" r="3.5" fill={GOLD} opacity="0.4" />
      <Circle cx="320" cy="520" r="4" fill={GOLD} opacity="0.3" />
    </Svg>
  </View>
);


// ── Check Badge ────────────────────────────────────────────────────────────────
const CheckBadge = () => (
  <View style={styles.checkBadge}>
    <Svg width="14" height="14" viewBox="0 0 14 14">
      <Path d="M3 7L5.5 9.5L11 4" stroke="white" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  </View>
);

// ── Trust Icons ────────────────────────────────────────────────────────────────
const ShieldCheckIcon = ({ color = GREEN }: { color?: string }) => (
  <Svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <Path d="M11 2L4 6V11C4 15.4 7 19.4 11 20.5C15 19.4 18 15.4 18 11V6L11 2Z"
      stroke={color} strokeWidth="1.5" />
    <Path d="M8 11L10 13L14 9" stroke={color} strokeWidth="1.5"
      strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

const LockIcon = () => (
  <Svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <Rect x="5" y="9" width="12" height="10" rx="2" stroke={GOLD} strokeWidth="1.5" />
    <Path d="M8 9V7a3 3 0 016 0v2" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" />
    <Circle cx="11" cy="14" r="1.5" fill={GOLD} />
  </Svg>
);

const BoltIcon = () => (
  <Svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <Path d="M12 2L5 13H11L10 20L17 9H11L12 2Z" stroke={GREEN} strokeWidth="1.5"
      strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

// ── Main OTP Screen ────────────────────────────────────────────────────────────
export const OTPScreen = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const mobile = route.params?.mobile || '9568816858';

  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(21);
  const inputRefs = useRef<Array<TextInput | null>>([null, null, null, null]);

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
    if (value !== '' && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const isComplete = otp.every(d => d !== '');

  const handleVerify = () => {
    if (isComplete) navigation.replace('Main');
  };

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.container}>
          <LeafBackground />

          {/* ── Header ── */}
          <View style={styles.header}>
            <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
              <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <Path d="M11 14L6 9L11 4" stroke="#1a1a1a" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round" />
              </Svg>
            </TouchableOpacity>
            <View style={styles.progressRow}>
              <View style={[styles.dot, styles.dotActive]} />
              <View style={styles.dot} />
              <View style={styles.dot} />
            </View>
            <View style={{ width: 40 }} />
          </View>

          <ScrollView
            contentContainerStyle={styles.scroll}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            {/* ── Shield Hero ── */}
            <View style={styles.heroSection}>
              <View style={styles.shieldCircle}>
                <Image source={require('../../assets/logo/logo.png')} style={{ width: 120, height: 120, resizeMode: 'contain' }} />

                <Text style={[styles.sparkle, { top: -10, right: 8 }]}>✦</Text>
                <Text style={[styles.sparkle, { top: 4, left: -14, fontSize: 11, opacity: 0.7 }]}>✦</Text>
                <Text style={[styles.sparkle, { bottom: 2, left: -2, fontSize: 10, opacity: 0.5 }]}>✦</Text>
              </View>

              <View style={styles.titleRow}>
                <Text style={styles.titleGreen}>Verify </Text>
                <Text style={styles.titleGold}>OTP</Text>
              </View>
              <View style={styles.titleUnderline} />
            </View>

            {/* ── Subtitle & Phone Pill ── */}
            <View style={styles.content}>
              <Text style={styles.subtitle}>Enter the 4-digit code sent to</Text>

              <View style={styles.phonePill}>
                <View style={styles.phoneIconWrap}>
                  <Svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <Path
                      d="M2.5 2h3l1.5 3.5-1.7 1c.6 1.2 1.4 2.1 2.7 2.7l1-1.7L12.5 9v2.5C12.5 12 11 12.5 10.5 12.5 5 12.5 1.5 9 1.5 3.5 1.5 3 2 1.5 2.5 2z"
                      fill={GREEN}
                    />
                  </Svg>
                </View>
                <Text style={styles.phoneNumber}>+91 {mobile}</Text>
                <TouchableOpacity style={styles.editBtn}>
                  <Text style={styles.editText}>Edit </Text>
                  <Svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <Path d="M8.5 1.5L10.5 3.5L4 10H2V8L8.5 1.5Z" stroke={GREEN}
                      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </Svg>
                </TouchableOpacity>
              </View>

              {/* ── OTP Boxes ── */}
              <View style={styles.otpRow}>
                {otp.map((digit, i) => (
                  <TextInput
                    key={i}
                    ref={ref => { inputRefs.current[i] = ref; }}
                    style={[styles.otpBox, digit !== '' && styles.otpBoxFilled]}
                    keyboardType="number-pad"
                    maxLength={1}
                    value={digit}
                    onChangeText={val => handleOtpChange(val, i)}
                    onKeyPress={e => handleKeyPress(e, i)}
                    selectionColor={GREEN}
                    textAlign="center"
                  />
                ))}
              </View>

              {/* ── Resend Box ── */}
              <View style={styles.resendBox}>
                <View style={styles.resendIconWrap}>
                  <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <Path d="M2 8a6 6 0 106-6" stroke={GREEN} strokeWidth="1.5" strokeLinecap="round" />
                    <Path d="M5 5L2 8L5 11" stroke={GREEN} strokeWidth="1.5"
                      strokeLinecap="round" strokeLinejoin="round" />
                  </Svg>
                </View>
                <View>
                  <Text style={styles.resendTitle}>Didn't receive the code?</Text>
                  {timer > 0 ? (
                    <Text style={styles.resendSub}>
                      Resend code in{' '}
                      <Text style={styles.timerText}>
                        00:{timer.toString().padStart(2, '0')}
                      </Text>
                    </Text>
                  ) : (
                    <TouchableOpacity onPress={() => setTimer(30)}>
                      <Text style={styles.resendLink}>Resend OTP</Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>

              {/* ── Verify Button ── */}
              <TouchableOpacity
                style={[styles.verifyBtn, !isComplete && styles.verifyBtnDisabled]}
                activeOpacity={0.85}
                onPress={handleVerify}
                disabled={!isComplete}
              >
                <View style={styles.verifyIconWrap}>
                  <ShieldCheckIcon color="white" />
                </View>
                <Text style={styles.verifyText}>Verify & Proceed</Text>
                <Text style={styles.verifyArrow}>→</Text>
              </TouchableOpacity>

              {/* ── Trust Cards ── */}
              <View style={styles.trustRow}>
                <View style={styles.trustCard}>
                  <ShieldCheckIcon />
                  <Text style={styles.trustLabel}>Secure</Text>
                  <Text style={styles.trustSub}>100% Safe</Text>
                </View>
                <View style={styles.trustCard}>
                  <LockIcon />
                  <Text style={styles.trustLabel}>Private</Text>
                  <Text style={styles.trustSub}>Your data is safe</Text>
                </View>
                <View style={styles.trustCard}>
                  <BoltIcon />
                  <Text style={styles.trustLabel}>Instant</Text>
                  <Text style={styles.trustSub}>Quick verification</Text>
                </View>
              </View>

              {/* ── Privacy Note ── */}
              <View style={styles.privacyRow}>
                <ShieldCheckIcon color={MUTED} />
                <Text style={styles.privacyText}>We never share your number with anyone</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

// ── Styles ─────────────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: LIGHT_BG },
  flex: { flex: 1 },
  container: { flex: 1, backgroundColor: LIGHT_BG },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 8,
    paddingBottom: 4,
    zIndex: 1,
  },
  backBtn: {
    width: 40, height: 40, borderRadius: 20,
    backgroundColor: '#fff',
    borderWidth: 1, borderColor: '#e5e7e0',
    alignItems: 'center', justifyContent: 'center',
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06, shadowRadius: 4, elevation: 2,
  },
  progressRow: { flexDirection: 'row', gap: 6, alignItems: 'center' },
  dot: { width: 28, height: 4, borderRadius: 4, backgroundColor: '#e5e7e0' },
  dotActive: { backgroundColor: GREEN },

  scroll: { flexGrow: 1, justifyContent: 'center', paddingBottom: 32 },

  heroSection: { alignItems: 'center', paddingTop: 16, paddingBottom: 4, zIndex: 1 },
  shieldCircle: {
    width: 160, height: 160, borderRadius: 80,
    backgroundColor: 'rgba(255,255,255,0.9)',
    alignItems: 'center', justifyContent: 'center',
    shadowColor: '#000', shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06, shadowRadius: 20, elevation: 4,
  },
  checkBadge: {
    position: 'absolute', bottom: 8, right: 8,
    width: 30, height: 30, borderRadius: 15,
    backgroundColor: GOLD,
    alignItems: 'center', justifyContent: 'center',
    borderWidth: 3, borderColor: LIGHT_BG,
  },
  sparkle: { position: 'absolute', color: GOLD, fontSize: 14, fontWeight: '700' },

  titleRow: { marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', },
  titleGreen: {
    fontSize: 30, fontWeight: '700', color: GREEN,
    fontStyle: 'italic',
  },
  titleGold: {
    fontSize: 30, fontWeight: '700', color: GOLD,
    fontStyle: 'italic',
  },
  titleUnderline: {
    width: 110, height: 3, borderRadius: 2,
    backgroundColor: GOLD, opacity: 0.6, marginTop: 4,
  },

  content: { paddingHorizontal: 24, zIndex: 1 },

  subtitle: {
    fontSize: 14, color: MUTED_TEXT,
    textAlign: 'center', marginTop: 6, marginBottom: 10,
  },

  phonePill: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: '#fff', borderRadius: 40,
    borderWidth: 1, borderColor: BORDER,
    paddingVertical: 8, paddingHorizontal: 16,
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04, shadowRadius: 4, elevation: 1,
  },
  phoneIconWrap: {
    width: 28, height: 28, borderRadius: 14,
    backgroundColor: '#e8f3e8',
    alignItems: 'center', justifyContent: 'center',
    marginRight: 10,
  },
  phoneNumber: { fontSize: 14, fontWeight: '600', color: '#1a1a1a', flex: 1 },
  editBtn: { flexDirection: 'row', alignItems: 'center' },
  editText: { fontSize: 12, color: GREEN, fontWeight: '600' },

  otpRow: {
    flexDirection: 'row', justifyContent: 'space-around',
    marginTop: 20, marginBottom: 4,
  },
  otpBox: {
    width: 48, height: 46, borderRadius: 8,
    backgroundColor: '#fff',
    borderWidth: 2, borderColor: BORDER,
    fontSize: 18, fontWeight: '700', color: '#1a1a1a',
  },
  otpBoxFilled: { borderColor: GREEN, backgroundColor: 'rgba(26,92,58,0.05)' },

  resendBox: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: '#f2f4ef', borderRadius: 16,
    padding: 14, marginTop: 16, gap: 12,
  },
  resendIconWrap: {
    width: 32, height: 32, borderRadius: 16,
    backgroundColor: '#fff',
    alignItems: 'center', justifyContent: 'center',
    borderWidth: 1, borderColor: BORDER,
  },
  resendTitle: { fontSize: 13, fontWeight: '600', color: '#1a1a1a' },
  resendSub: { fontSize: 12, color: MUTED_TEXT, marginTop: 2 },
  timerText: { color: GOLD, fontWeight: '700' },
  resendLink: { fontSize: 13, color: GREEN, fontWeight: '600', marginTop: 2 },

  verifyBtn: {
    height: 44, borderRadius: 18,
    backgroundColor: GREEN,
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
    gap: 10, marginTop: 16,
    shadowColor: GREEN, shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2, shadowRadius: 16, elevation: 6,
  },
  verifyBtnDisabled: { backgroundColor: '#a8c4b4', shadowOpacity: 0 },
  verifyIconWrap: {
    width: 32, height: 32, borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.15)',
    alignItems: 'center', justifyContent: 'center',
  },
  verifyText: { fontSize: 16, fontWeight: '700', color: '#fff', letterSpacing: 0.5 },
  verifyArrow: { fontSize: 18, color: '#fff', fontWeight: '700' },

  trustRow: { flexDirection: 'row', gap: 8, marginTop: 14 },
  trustCard: {
    flex: 1, backgroundColor: '#fff',
    borderWidth: 1, borderColor: '#e5e7e0',
    borderRadius: 14, padding: 10,
    alignItems: 'center', gap: 4,
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04, shadowRadius: 3, elevation: 1,
  },
  trustLabel: { fontSize: 11, fontWeight: '700', color: '#1a1a1a' },
  trustSub: { fontSize: 10, color: MUTED, textAlign: 'center' },

  privacyRow: {
    flexDirection: 'row', alignItems: 'center',
    justifyContent: 'center', gap: 6, marginTop: 12,
  },
  privacyText: { fontSize: 12, color: MUTED },
});