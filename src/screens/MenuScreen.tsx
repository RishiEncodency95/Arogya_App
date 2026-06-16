import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
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

const MENU_ITEMS = [
  {
    category: 'Conference Details',
    items: [
      { title: 'Full Schedule & Agenda', icon: 'calendar', desc: 'Detailed hour-by-hour timeline' },
      { title: 'Sponsors & Exhibitors', icon: 'star', desc: 'View our partners and stalls' },
      { title: 'Research Papers', icon: 'file-text', desc: 'Browse submitted papers & abstracts' },
      { title: 'Venue Map', icon: 'map', desc: 'Navigate Pragati Maidan with ease' },
    ]
  },
  {
    category: 'Information',
    items: [
      { title: 'About ArogyaSangoshthi', icon: 'info', desc: 'History, vision and mission' },
      { title: 'Travel & Accommodation', icon: 'navigation', desc: 'Hotels, flights and local transport' },
      { title: 'FAQs', icon: 'help-circle', desc: 'Common questions answered' },
    ]
  },
  {
    category: 'Support & Help',
    items: [
      { title: 'Help Desk / Support', icon: 'message-square', desc: 'Contact our support team 24/7' },
      { title: 'Emergency Contacts', icon: 'phone-call', desc: 'Medical and security numbers', isDanger: true },
      { title: 'Feedback', icon: 'thumbs-up', desc: 'Rate sessions and share your experience' },
    ]
  }
];

const MenuItem = ({ title, icon, desc, isDanger = false, isLast = false }: any) => (
  <TouchableOpacity style={[s.menuItem, !isLast && s.menuItemBorder]} activeOpacity={0.7}>
    <View style={[s.iconBg, isDanger && s.iconBgDanger]}>
      <Icon name={icon} size={20} color={isDanger ? C.red : C.green} />
    </View>
    <View style={s.textCol}>
      <Text style={[s.title, isDanger && s.titleDanger]}>{title}</Text>
      <Text style={s.desc}>{desc}</Text>
    </View>
    <Icon name="chevron-right" size={20} color={C.muted} />
  </TouchableOpacity>
);

export const MenuScreen = () => {
  return (
    <View style={s.root}>
      {/* ── HEADER ── */}
      <View style={s.header}>
        <Text style={s.headerTitle}>Menu & More</Text>
        <Text style={s.headerSub}>Find all the essential information, schedules, and support for the conference.</Text>
      </View>

      {/* ── MENU LIST ── */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={s.listContent}>
        
        {MENU_ITEMS.map((section, idx) => (
          <View key={idx} style={s.section}>
            <Text style={s.sectionTitle}>{section.category}</Text>
            <View style={s.cardGroup}>
              {section.items.map((item, i) => (
                <MenuItem 
                  key={i} 
                  title={item.title} 
                  icon={item.icon} 
                  desc={item.desc} 
                  isDanger={item.isDanger}
                  isLast={i === section.items.length - 1}
                />
              ))}
            </View>
          </View>
        ))}

        {/* Social Links */}
        <View style={s.socialSection}>
          <Text style={s.socialTitle}>Connect with us</Text>
          <View style={s.socialRow}>
            <TouchableOpacity style={s.socialBtn} activeOpacity={0.8}>
              <Icon name="twitter" size={20} color={C.green} />
            </TouchableOpacity>
            <TouchableOpacity style={s.socialBtn} activeOpacity={0.8}>
              <Icon name="facebook" size={20} color={C.green} />
            </TouchableOpacity>
            <TouchableOpacity style={s.socialBtn} activeOpacity={0.8}>
              <Icon name="instagram" size={20} color={C.green} />
            </TouchableOpacity>
            <TouchableOpacity style={s.socialBtn} activeOpacity={0.8}>
              <Icon name="linkedin" size={20} color={C.green} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={s.bottomSpacing} />
      </ScrollView>
    </View>
  );
};

const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: C.cream },
  header: {
    backgroundColor: C.green,
    paddingTop: 60,
    paddingBottom: 24,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerTitle: {
    fontSize: 28, fontWeight: '900', color: C.white, marginBottom: 8,
  },
  headerSub: {
    fontSize: 13, color: 'rgba(255,255,255,0.8)', lineHeight: 20,
  },
  listContent: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 40,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 13, fontWeight: '800', color: C.muted,
    textTransform: 'uppercase', letterSpacing: 1,
    marginBottom: 12, marginLeft: 4,
  },
  cardGroup: {
    backgroundColor: C.white,
    borderRadius: 16,
    borderWidth: 1, borderColor: C.border,
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.02, shadowRadius: 6, elevation: 1,
    overflow: 'hidden',
  },
  menuItem: {
    flexDirection: 'row', alignItems: 'center',
    padding: 16,
  },
  menuItemBorder: {
    borderBottomWidth: 1, borderBottomColor: C.border,
  },
  iconBg: {
    width: 44, height: 44,
    borderRadius: 22,
    backgroundColor: C.greenLight,
    alignItems: 'center', justifyContent: 'center',
  },
  iconBgDanger: {
    backgroundColor: '#FDECEA',
  },
  textCol: {
    flex: 1,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 15, fontWeight: '800', color: C.dark, marginBottom: 4,
  },
  titleDanger: {
    color: C.red,
  },
  desc: {
    fontSize: 12, color: C.muted, lineHeight: 16,
  },
  socialSection: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  socialTitle: {
    fontSize: 14, fontWeight: '700', color: C.dark, marginBottom: 16,
  },
  socialRow: {
    flexDirection: 'row',
    gap: 16,
  },
  socialBtn: {
    width: 44, height: 44,
    borderRadius: 22,
    backgroundColor: C.white,
    borderWidth: 1, borderColor: C.border,
    alignItems: 'center', justifyContent: 'center',
  },
  bottomSpacing: {
    height: 40,
  },
});
