import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const C = {
  green: '#0A4232',
  greenMid: '#1B5E3A',
  greenLight: '#E8F5EE',
  gold: '#DFB143',
  goldLight: '#FBF3DC',
  cream: '#FAF7F2',
  dark: '#111A15',
  muted: '#6B7C73',
  white: '#FFFFFF',
  border: '#E2EBE6',
  red: '#C0392B',
};

const ProfileOption = ({ icon, title, subtitle, isDanger = false }: any) => (
  <TouchableOpacity style={s.optionCard} activeOpacity={0.7}>
    <View style={[s.optionIconBg, isDanger && s.optionIconBgDanger]}>
      <Icon name={icon} size={18} color={isDanger ? C.red : C.green} />
    </View>
    <View style={s.optionTextCol}>
      <Text style={[s.optionTitle, isDanger && s.optionTitleDanger]}>{title}</Text>
      {subtitle ? <Text style={s.optionSubtitle}>{subtitle}</Text> : null}
    </View>
    <Icon name="chevron-right" size={18} color={C.muted} />
  </TouchableOpacity>
);

export const ProfileScreen = () => {
  return (
    <ScrollView style={s.root} showsVerticalScrollIndicator={false}>
      {/* ── HEADER BACKGROUND ── */}
      <View style={s.headerBg} />

      {/* ── PROFILE INFO ── */}
      <View style={s.profileContainer}>
        <View style={s.avatarContainer}>
          <Image
            source={{ uri: 'https://i.pravatar.cc/150?img=11' }}
            style={s.avatar}
          />
          <TouchableOpacity style={s.editAvatarBtn}>
            <Icon name="camera" size={12} color={C.green} />
          </TouchableOpacity>
        </View>

        <Text style={s.name}>Dr. Rohit Kumar</Text>
        <Text style={s.role}>Chief Medical Officer</Text>
        
        <View style={s.badge}>
          <Icon name="award" size={12} color={C.gold} />
          <Text style={s.badgeText}> VIP Delegate</Text>
        </View>

        {/* ── QUICK CONTACT INFO ── */}
        <View style={s.infoCard}>
          <View style={s.infoRow}>
            <Icon name="mail" size={14} color={C.muted} />
            <Text style={s.infoText}>rohit.kumar@hospital.com</Text>
          </View>
          <View style={s.infoDivider} />
          <View style={s.infoRow}>
            <Icon name="phone" size={14} color={C.muted} />
            <Text style={s.infoText}>+91 98765 43210</Text>
          </View>
        </View>
      </View>

      {/* ── OPTIONS LIST ── */}
      <View style={s.optionsContainer}>
        <Text style={s.sectionTitle}>Conference Activity</Text>
        <View style={s.optionsGroup}>
          <ProfileOption icon="ticket" title="My Tickets" subtitle="View QR & pass details" />
          <ProfileOption icon="bookmark" title="Saved Sessions" subtitle="4 sessions bookmarked" />
          <ProfileOption icon="file-text" title="My Papers" subtitle="1 abstract submitted" />
        </View>

        <Text style={s.sectionTitle}>Account Settings</Text>
        <View style={s.optionsGroup}>
          <ProfileOption icon="user" title="Personal Details" subtitle="Update name, bio & photo" />
          <ProfileOption icon="lock" title="Change Password" />
          <ProfileOption icon="bell" title="Notifications" subtitle="Alerts & reminders" />
        </View>

        <View style={[s.optionsGroup, { marginTop: 10 }]}>
          <ProfileOption icon="log-out" title="Logout" isDanger={true} />
        </View>
      </View>

      {/* ── FOOTER LOGO ── */}
      <View style={s.footer}>
        <Text style={s.footerApp}>ArogyaSangoshthi</Text>
        <Text style={s.footerVersion}>Version 1.0.0</Text>
      </View>

    </ScrollView>
  );
};

const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: C.cream },
  headerBg: {
    backgroundColor: C.green,
    height: 140,
    width: '100%',
    position: 'absolute',
    top: 0,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  profileContainer: {
    alignItems: 'center',
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  avatar: {
    width: 100, height: 100,
    borderRadius: 50,
    borderWidth: 4, borderColor: C.white,
    backgroundColor: C.greenLight,
  },
  editAvatarBtn: {
    position: 'absolute',
    bottom: 0, right: 0,
    backgroundColor: C.gold,
    width: 28, height: 28,
    borderRadius: 14,
    alignItems: 'center', justifyContent: 'center',
    borderWidth: 2, borderColor: C.white,
  },
  name: {
    fontSize: 22, fontWeight: '900', color: C.dark, marginBottom: 4,
  },
  role: {
    fontSize: 13, color: C.muted, fontWeight: '600', marginBottom: 12,
  },
  badge: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: C.goldLight,
    paddingHorizontal: 12, paddingVertical: 4,
    borderRadius: 20, marginBottom: 20,
  },
  badgeText: {
    fontSize: 11, fontWeight: '800', color: C.gold,
  },
  infoCard: {
    backgroundColor: C.white,
    width: '100%',
    borderRadius: 16,
    paddingVertical: 12, paddingHorizontal: 16,
    borderWidth: 1, borderColor: C.border,
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 8, elevation: 2,
    marginBottom: 8,
  },
  infoRow: {
    flexDirection: 'row', alignItems: 'center',
    paddingVertical: 8,
  },
  infoText: {
    fontSize: 13, color: C.dark, marginLeft: 12, fontWeight: '500',
  },
  infoDivider: {
    height: 1, width: '100%', backgroundColor: C.border,
  },
  optionsContainer: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 40,
  },
  sectionTitle: {
    fontSize: 13, fontWeight: '800', color: C.muted,
    textTransform: 'uppercase', letterSpacing: 0.8,
    marginTop: 20, marginBottom: 12, marginLeft: 4,
  },
  optionsGroup: {
    backgroundColor: C.white,
    borderRadius: 16,
    borderWidth: 1, borderColor: C.border,
    overflow: 'hidden',
  },
  optionCard: {
    flexDirection: 'row', alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1, borderBottomColor: C.border,
  },
  optionIconBg: {
    width: 36, height: 36, borderRadius: 18,
    backgroundColor: C.greenLight,
    alignItems: 'center', justifyContent: 'center',
    marginRight: 14,
  },
  optionIconBgDanger: {
    backgroundColor: '#FDECEA',
  },
  optionTextCol: {
    flex: 1,
  },
  optionTitle: {
    fontSize: 14, fontWeight: '700', color: C.dark, marginBottom: 2,
  },
  optionTitleDanger: {
    color: C.red,
  },
  optionSubtitle: {
    fontSize: 11, color: C.muted,
  },
  footer: {
    alignItems: 'center',
    paddingBottom: 30,
  },
  footerApp: {
    fontSize: 12, fontWeight: '800', color: C.green, letterSpacing: 0.5,
  },
  footerVersion: {
    fontSize: 10, color: C.muted, marginTop: 4,
  },
});
