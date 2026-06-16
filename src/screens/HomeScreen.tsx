import React, { useState, useEffect } from 'react';
import {
  ScrollView, View, Text, TouchableOpacity,
  StyleSheet, Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const { width } = Dimensions.get('window');

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

const TARGET = new Date('2026-08-21T09:00:00');

const useCountdown = () => {
  const calc = () => {
    const diff = TARGET.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, mins: 0, secs: 0 };
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      mins: Math.floor((diff % 3600000) / 60000),
      secs: Math.floor((diff % 60000) / 1000),
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const t = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(t);
  }, []);
  return time;
};

const DAYS = [
  {
    label: 'Day 1', date: 'Aug 21',
    events: [
      { time: '09:00', title: 'Inaugural Ceremony', type: 'Keynote', seats: 12 },
      { time: '10:30', title: 'AYUSH Integration in Modern Medicine', type: 'Panel', seats: 40 },
      { time: '12:00', title: 'Pharma Innovation Summit', type: 'Workshop', seats: 25 },
      { time: '14:00', title: 'Research Paper Presentation — Batch A', type: 'Paper', seats: 60 },
      { time: '16:00', title: 'Wellness & Nutrition Masterclass', type: 'Workshop', seats: 18 },
    ],
  },
  {
    label: 'Day 2', date: 'Aug 22',
    events: [
      { time: '09:30', title: 'Digital Health & AI in Healthcare', type: 'Keynote', seats: 8 },
      { time: '11:00', title: 'Ayurveda Clinical Trials — New Findings', type: 'Paper', seats: 50 },
      { time: '13:00', title: 'Startup Pitch: HealthTech', type: 'Workshop', seats: 30 },
      { time: '15:00', title: 'Research Paper Presentation — Batch B', type: 'Paper', seats: 55 },
      { time: '17:00', title: 'Networking Dinner & Awards', type: 'Social', seats: 200 },
    ],
  },
  {
    label: 'Day 3', date: 'Aug 23',
    events: [
      { time: '09:00', title: 'Closing Keynote — Future of AYUSH', type: 'Keynote', seats: 5 },
      { time: '10:30', title: 'Policy Roundtable: Healthcare Reform', type: 'Panel', seats: 20 },
      { time: '12:00', title: 'Research Paper Presentation — Batch C', type: 'Paper', seats: 45 },
      { time: '14:00', title: 'Certificate Distribution & Valedictory', type: 'Ceremony', seats: 300 },
    ],
  },
];

const SPEAKERS = [
  { name: 'Dr. Rajesh Kumar', role: 'AIIMS Director', topic: 'Integrative Medicine' },
  { name: 'Prof. Sunita Sharma', role: 'WHO Advisor', topic: 'Global Wellness' },
  { name: 'Dr. Arjun Mehta', role: 'Pharma Innovator', topic: 'Drug Discovery' },
  { name: 'Dr. Priya Nair', role: 'Ayurveda Expert', topic: 'Clinical Ayurveda' },
];

const TYPE_CONFIG: Record<string, { color: string; bg: string; icon: string }> = {
  Keynote: { color: C.gold, bg: C.goldLight, icon: 'star' },
  Panel: { color: C.greenMid, bg: C.greenLight, icon: 'users' },
  Workshop: { color: '#7B5EA7', bg: '#F3EEF9', icon: 'tool' },
  Paper: { color: '#2980B9', bg: '#EAF4FB', icon: 'file-text' },
  Social: { color: C.red, bg: '#FDECEA', icon: 'coffee' },
  Ceremony: { color: C.gold, bg: C.goldLight, icon: 'award' },
};

// ── Sub-components ────────────────────────────────────────
const CountdownBox = ({ value, label }: { value: number; label: string }) => (
  <View style={s.cdBox}>
    <Text style={s.cdNum}>{String(value).padStart(2, '0')}</Text>
    <Text style={s.cdLabel}>{label}</Text>
  </View>
);

const SpeakerCard = ({ name, role, topic }: typeof SPEAKERS[0]) => (
  <View style={s.speakerCard}>
    <View style={s.speakerAvatar}>
      <Icon name="user" size={22} color={C.gold} />
    </View>
    <Text style={s.speakerName} numberOfLines={1}>{name}</Text>
    <Text style={s.speakerRole} numberOfLines={1}>{role}</Text>
    <View style={s.speakerTopic}>
      <Text style={s.speakerTopicText} numberOfLines={1}>{topic}</Text>
    </View>
  </View>
);

// ── Main ──────────────────────────────────────────────────
export const HomeScreen = () => {
  const time = useCountdown();
  const [activeDay, setActiveDay] = useState(0);
  const [subscribed, setSubscribed] = useState<Record<string, boolean>>({});
  const toggleSub = (key: string) =>
    setSubscribed(prev => ({ ...prev, [key]: !prev[key] }));
  const dayData = DAYS[activeDay];

  return (
    <ScrollView style={s.root} showsVerticalScrollIndicator={false}>

      {/* ── HERO ─────────────────────────────────────── */}
      <View style={s.hero}>
        <Text style={s.heroEdition}>✦ 18TH EDITION ✦</Text>

        {/* Title row */}
        <View style={s.heroTitleRow}>
          <Text style={s.heroTitle}>Arogya </Text>
          <Text style={s.heroTitleItalic}>Sangoshthi</Text>
        </View>

        <Text style={s.heroSubtitle}>
          India's Premier Conference on Integrated Healthcare, AYUSH, Pharma & Wellness
        </Text>

        {/* Meta pills */}
        <View style={s.heroPills}>
          <View style={s.heroPill}>
            <Icon name="calendar" size={11} color={C.gold} />
            <Text style={s.heroPillRed}> 21–23 AUG 2026</Text>
          </View>
          <View style={s.heroPillDot} />
          <View style={s.heroPill}>
            <Icon name="map-pin" size={11} color={C.gold} />
            <Text style={s.heroPillText}> Pragati Maidan, Delhi</Text>
          </View>
        </View>

        {/* Countdown */}
        <View style={s.cdWrap}>
          <View style={s.cdRow}>
            <CountdownBox value={time.days} label="Days" />
            <Text style={s.cdSep}>:</Text>
            <CountdownBox value={time.hours} label="Hrs" />
            <Text style={s.cdSep}>:</Text>
            <CountdownBox value={time.mins} label="Min" />
            <Text style={s.cdSep}>:</Text>
            <CountdownBox value={time.secs} label="Sec" />
          </View>
        </View>

        {/* CTA row */}
        <View style={s.ctaRow}>
          <TouchableOpacity style={[s.btnGold, { flex: 1 }]} activeOpacity={0.85}>
            <Text style={s.btnGoldText}>REGISTER</Text>
            <Icon name="arrow-right" size={16} color={C.green} />
          </TouchableOpacity>
          <TouchableOpacity style={[s.btnOutline, { flex: 1 }]} activeOpacity={0.85}>
            <Icon name="mic" size={16} color={C.gold} />
            <Text style={s.btnOutlineText}>SPEAKER</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* ── STATS ────────────────────────────────────── */}
      <View style={s.statsRow}>
        {[
          { v: '80+', l: 'Speakers', i: 'mic' },
          { v: '3K+', l: 'Delegates', i: 'users' },
          { v: '40+', l: 'Sessions', i: 'layers' },
          { v: '25+', l: 'Papers', i: 'file-text' },
        ].map((st, idx, arr) => (
          <React.Fragment key={idx}>
            <View style={s.statPill}>
              <Icon name={st.i} size={13} color={C.gold} />
              <Text style={s.statVal}>{st.v}</Text>
              <Text style={s.statLabel}>{st.l}</Text>
            </View>
            {idx < arr.length - 1 && <View style={s.statDiv} />}
          </React.Fragment>
        ))}
      </View>

      {/* ── SCHEDULE ─────────────────────────────────── */}
      <View style={s.sec}>
        <View style={s.secHead}>
          <Text style={s.secTitle}>Event Schedule</Text>
          <View style={s.secLine} />
        </View>
        <Text style={s.secSub}>Subscribe to get reminders & save your seat</Text>

        {/* Day Tabs */}
        <View style={s.dayTabs}>
          {DAYS.map((d, i) => (
            <TouchableOpacity
              key={i}
              style={[s.dayTab, activeDay === i && s.dayTabActive]}
              onPress={() => setActiveDay(i)}
              activeOpacity={0.8}
            >
              <Text style={[s.dayTabLabel, activeDay === i && s.dayTabLabelActive]}>{d.label}</Text>
              <Text style={[s.dayTabDate, activeDay === i && s.dayTabDateActive]}>{d.date}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Events */}
        {dayData.events.map((ev, i) => {
          const key = `${activeDay}-${i}`;
          const isSub = subscribed[key] ?? false;
          const cfg = TYPE_CONFIG[ev.type] ?? TYPE_CONFIG.Panel;
          const lowSeats = ev.seats < 15;
          const isLast = i === dayData.events.length - 1;

          return (
            <View key={key} style={s.eventRow}>
              {/* Timeline */}
              <View style={s.timeCol}>
                <Text style={s.eventTime}>{ev.time}</Text>
                <View style={[s.dot, { backgroundColor: cfg.color }]} />
                {!isLast && <View style={s.line} />}
              </View>

              {/* Card */}
              <View style={[s.eventCard, isLast && { marginBottom: 0 }]}>
                <View style={s.eventCardTop}>
                  <View style={[s.badge, { backgroundColor: cfg.bg }]}>
                    <Icon name={cfg.icon} size={9} color={cfg.color} />
                    <Text style={[s.badgeText, { color: cfg.color }]}>{ev.type}</Text>
                  </View>
                  <TouchableOpacity
                    style={[s.subBtn, isSub && s.subBtnOn]}
                    onPress={() => toggleSub(key)}
                    activeOpacity={0.8}
                  >
                    <Icon name={isSub ? 'check-circle' : 'plus-circle'} size={11} color={isSub ? C.white : C.green} />
                    <Text style={[s.subText, isSub && s.subTextOn]}>
                      {isSub ? 'Saved' : 'Subscribe'}
                    </Text>
                  </TouchableOpacity>
                </View>

                <Text style={s.eventTitle}>{ev.title}</Text>

                <View style={s.seatsRow}>
                  <Icon name="users" size={10} color={lowSeats ? C.red : C.muted} />
                  <Text style={[s.seatsText, lowSeats && s.seatsLow]}>
                    {lowSeats ? `Only ${ev.seats} seats left` : `${ev.seats} seats available`}
                  </Text>
                </View>
              </View>
            </View>
          );
        })}
      </View>

      {/* ── SPEAKERS ─────────────────────────────────── */}
      <View style={s.speakersSec}>
        <View style={[s.secHead, { paddingHorizontal: 16 }]}>
          <Text style={s.secTitle}>Featured Speakers</Text>
          <View style={s.secLine} />
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={s.speakersScroll}
        >
          {SPEAKERS.map((sp, i) => <SpeakerCard key={i} {...sp} />)}
          <TouchableOpacity style={s.viewAllCard} activeOpacity={0.8}>
            <View style={s.viewAllIcon}>
              <Icon name="arrow-right" size={20} color={C.gold} />
            </View>
            <Text style={s.viewAllText}>View All{'\n'}Speakers</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* ── WHY ATTEND ───────────────────────────────── */}
      <View style={s.sec}>
        <View style={s.secHead}>
          <Text style={s.secTitle}>Why Attend?</Text>
          <View style={s.secLine} />
        </View>

        <View style={s.featureGrid}>
          {[
            { icon: 'heart', title: 'Integrated Care', desc: 'AYUSH + Modern Medicine unified' },
            { icon: 'book-open', title: 'Paper Presentations', desc: '25+ research papers, 3 days' },
            { icon: 'briefcase', title: 'Networking', desc: '3000+ healthcare professionals' },
            { icon: 'award', title: 'CME Credits', desc: 'Accredited medical education points' },
            { icon: 'globe', title: 'Global Experts', desc: 'WHO, AIIMS & intl. speakers' },
            { icon: 'trending-up', title: 'Innovation Hub', desc: 'HealthTech startups & live demos' },
          ].map((f, i) => (
            <View key={i} style={s.featureCard}>
              <View style={s.featureIcon}>
                <Icon name={f.icon} size={17} color={C.gold} />
              </View>
              <Text style={s.featureTitle}>{f.title}</Text>
              <Text style={s.featureDesc}>{f.desc}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* ── BOTTOM CTA ───────────────────────────────── */}
      <View style={s.bottomCta}>
        <Text style={s.ctaTitle}>Secure Your Spot</Text>
        <Text style={s.ctaSub}>Early bird closes July 15, 2026</Text>
        <View style={s.ctaRow}>
          <TouchableOpacity style={[s.btnGold, { flex: 1 }]} activeOpacity={0.85}>
            <Text style={s.btnGoldText}>REGISTER NOW</Text>
            <Icon name="arrow-right" size={14} color={C.green} />
          </TouchableOpacity>
          <TouchableOpacity style={[s.btnOutline, { flex: 1 }]} activeOpacity={0.85}>
            <Icon name="download" size={14} color={C.gold} />
            <Text style={s.btnOutlineText}>BROCHURE</Text>
          </TouchableOpacity>
        </View>
      </View>

    </ScrollView>
  );
};

// ── Styles ────────────────────────────────────────────────
const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: C.cream },

  // Hero
  hero: {
    backgroundColor: C.green,
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 16,
  },
  heroEdition: {
    fontSize: 9, letterSpacing: 3, color: C.gold,
    fontWeight: '700', marginBottom: 6, textAlign: 'center',
  },
  heroTitleRow: { flexDirection: 'row', alignItems: 'baseline', flexWrap: 'wrap', marginBottom: 4 },
  heroTitle: { fontSize: 36, fontWeight: '900', color: C.white, lineHeight: 40 },
  heroTitleItalic: { fontSize: 28, fontStyle: 'italic', fontWeight: '300', color: C.gold, lineHeight: 36 },
  heroSubtitle: { fontSize: 12, color: 'rgba(255,255,255,0.65)', lineHeight: 18, marginBottom: 10 },

  heroPills: { flexDirection: 'row', alignItems: 'center', marginBottom: 10, flexWrap: 'wrap' },
  heroPill: { flexDirection: 'row', alignItems: 'center' },
  heroPillRed: { fontSize: 12, fontWeight: '800', color: '#FF6B6B' },
  heroPillText: { fontSize: 12, color: 'rgba(255,255,255,0.75)', fontWeight: '500' },
  heroPillDot: { width: 3, height: 3, borderRadius: 2, backgroundColor: C.gold, marginHorizontal: 8 },

  // Countdown
  cdWrap: { marginBottom: 12 },
  cdRow: { flexDirection: 'row', alignItems: 'center' },
  cdBox: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: 7, paddingVertical: 6, paddingHorizontal: 9,
    alignItems: 'center', minWidth: 48,
    borderWidth: 1, borderColor: 'rgba(223,177,67,0.25)',
  },
  cdNum: { fontSize: 20, fontWeight: '900', color: C.gold, lineHeight: 24 },
  cdLabel: { fontSize: 8, color: 'rgba(255,255,255,0.45)', letterSpacing: 0.8, marginTop: 1 },
  cdSep: { fontSize: 18, color: C.gold, marginHorizontal: 3, fontWeight: '900' },

  // CTA row (hero + bottom)
  ctaRow: { flexDirection: 'row', gap: 12, marginTop: 8 },
  btnGold: {
    backgroundColor: C.gold, borderRadius: 50,
    paddingVertical: 8, flexDirection: 'row',
    justifyContent: 'center', alignItems: 'center', gap: 6,
  },
  btnGoldText: { color: C.green, fontWeight: '800', fontSize: 13, letterSpacing: 0.6 },
  btnOutline: {
    borderWidth: 1.5, borderColor: C.gold, borderRadius: 50,
    paddingVertical: 8, flexDirection: 'row',
    justifyContent: 'center', alignItems: 'center', gap: 6,
  },
  btnOutlineText: { color: C.gold, fontWeight: '700', fontSize: 13, letterSpacing: 0.6 },

  // Stats
  statsRow: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: C.white,
    paddingVertical: 10, paddingHorizontal: 8,
    borderBottomWidth: 1, borderBottomColor: C.border,
  },
  statPill: { flex: 1, alignItems: 'center', gap: 1 },
  statVal: { fontSize: 15, fontWeight: '900', color: C.green },
  statLabel: { fontSize: 9, color: C.muted, letterSpacing: 0.4 },
  statDiv: { width: 1, height: 24, backgroundColor: C.border },

  // Section
  sec: { paddingHorizontal: 16, paddingTop: 14, paddingBottom: 14 },
  secHead: { marginBottom: 4 },
  secTitle: { fontSize: 16, fontWeight: '800', color: C.green, marginBottom: 4 },
  secLine: { height: 2.5, width: 28, backgroundColor: C.gold, borderRadius: 2 },
  secSub: { fontSize: 11, color: C.muted, marginBottom: 10, marginTop: 4 },

  // Day Tabs
  dayTabs: { flexDirection: 'row', gap: 6, marginBottom: 10 },
  dayTab: {
    flex: 1, paddingVertical: 7, borderRadius: 9,
    backgroundColor: C.white, alignItems: 'center',
    borderWidth: 1.5, borderColor: C.border,
  },
  dayTabActive: { backgroundColor: C.green, borderColor: C.green },
  dayTabLabel: { fontSize: 11, fontWeight: '700', color: C.muted },
  dayTabLabelActive: { color: C.gold },
  dayTabDate: { fontSize: 9, color: C.muted, marginTop: 1 },
  dayTabDateActive: { color: 'rgba(255,255,255,0.6)' },

  // Event timeline
  eventRow: { flexDirection: 'row' },
  timeCol: { width: 44, alignItems: 'center', paddingTop: 10 },
  eventTime: { fontSize: 9, color: C.muted, fontWeight: '700', textAlign: 'center', letterSpacing: 0.2 },
  dot: { width: 8, height: 8, borderRadius: 4, marginTop: 4 },
  line: { flex: 1, width: 1.5, backgroundColor: C.border, marginTop: 3 },

  eventCard: {
    flex: 1, marginLeft: 6,
    backgroundColor: C.white, borderRadius: 10,
    padding: 10, marginBottom: 7,
    borderWidth: 1, borderColor: C.border,
  },
  eventCardTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5 },
  badge: {
    flexDirection: 'row', alignItems: 'center',
    paddingHorizontal: 6, paddingVertical: 2,
    borderRadius: 20, gap: 3,
  },
  badgeText: { fontSize: 9, fontWeight: '700', letterSpacing: 0.4 },
  eventTitle: { fontSize: 12, fontWeight: '700', color: C.dark, lineHeight: 17, marginBottom: 6 },
  seatsRow: { flexDirection: 'row', alignItems: 'center', gap: 3 },
  seatsText: { fontSize: 10, color: C.muted },
  seatsLow: { color: C.red, fontWeight: '700' },
  subBtn: {
    flexDirection: 'row', alignItems: 'center', gap: 3,
    paddingHorizontal: 8, paddingVertical: 4,
    borderRadius: 20, borderWidth: 1.5, borderColor: C.green,
  },
  subBtnOn: { backgroundColor: C.green, borderColor: C.green },
  subText: { fontSize: 9, fontWeight: '700', color: C.green },
  subTextOn: { color: C.white },

  // Speakers
  speakersSec: { paddingTop: 14, paddingBottom: 14 },
  speakersScroll: { paddingHorizontal: 16, gap: 8, paddingBottom: 2 },
  speakerCard: {
    width: 118, backgroundColor: C.white,
    borderRadius: 12, padding: 10, alignItems: 'center',
    borderWidth: 1, borderColor: C.border,
  },
  speakerAvatar: {
    width: 44, height: 44, borderRadius: 22,
    backgroundColor: C.greenLight,
    alignItems: 'center', justifyContent: 'center',
    marginBottom: 6, borderWidth: 2, borderColor: C.gold,
  },
  speakerName: { fontSize: 11, fontWeight: '800', color: C.dark, textAlign: 'center', marginBottom: 2 },
  speakerRole: { fontSize: 9, color: C.muted, textAlign: 'center', marginBottom: 5 },
  speakerTopic: {
    backgroundColor: C.goldLight, paddingHorizontal: 6, paddingVertical: 2, borderRadius: 20,
  },
  speakerTopicText: { fontSize: 9, color: C.gold, fontWeight: '700' },
  viewAllCard: {
    width: 100, backgroundColor: C.greenLight,
    borderRadius: 12, padding: 10, alignItems: 'center',
    justifyContent: 'center', borderWidth: 1.5,
    borderColor: C.green, borderStyle: 'dashed',
  },
  viewAllIcon: {
    width: 36, height: 36, borderRadius: 18,
    backgroundColor: C.green, alignItems: 'center', justifyContent: 'center', marginBottom: 5,
  },
  viewAllText: { fontSize: 10, fontWeight: '700', color: C.green, textAlign: 'center' },

  // Features
  featureGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 7, marginTop: 10 },
  featureCard: {
    width: (width - 39) / 2,
    backgroundColor: C.white, borderRadius: 10,
    padding: 10, borderWidth: 1, borderColor: C.border,
  },
  featureIcon: {
    width: 32, height: 32, borderRadius: 8,
    backgroundColor: C.greenLight,
    alignItems: 'center', justifyContent: 'center', marginBottom: 6,
  },
  featureTitle: { fontSize: 11, fontWeight: '800', color: C.green, marginBottom: 3 },
  featureDesc: { fontSize: 10, color: C.muted, lineHeight: 13 },

  // Bottom CTA
  bottomCta: {
    backgroundColor: C.green,
    paddingHorizontal: 16, paddingVertical: 18,
  },
  ctaTitle: { fontSize: 18, fontWeight: '900', color: C.white, marginBottom: 2 },
  ctaSub: { fontSize: 11, color: 'rgba(255,255,255,0.55)', marginBottom: 12 },
});