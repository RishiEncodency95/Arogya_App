import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { CheckCircle2, ArrowRight, FileText, CheckSquare, Presentation, Award } from 'lucide-react-native';

const POINTS = [
  'Open to Doctors, Researchers,\nAcademicians & Students',
  'Best Paper Awards in\nMultiple Categories',
  'Publication Opportunities in\nIndexed Journals',
  'Increase Visibility &\nAcademic Impact',
];

const STEPS = [
  { icon: FileText, title: 'SUBMIT', subtitle: 'YOUR ABSTRACT' },
  { icon: CheckSquare, title: 'REVIEW', subtitle: 'BY EXPERT PANEL' },
  { icon: Presentation, title: 'PRESENT', subtitle: 'AT CONFERENCE' },
  { icon: Award, title: 'GET RECOGNIZED', subtitle: '& PUBLISHED' },
];

export const DelegatePaper = () => {
  return (
    <View style={s.container}>
      <View style={s.card}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800' }}
          style={s.bgImage}
          resizeMode="cover"
        />
        <View style={s.overlay} />

        <View style={s.content}>
          <Text style={s.titleGold}>CALL FOR PAPERS</Text>
          <Text style={s.subtitle}>Present Your Research. <Text style={s.subtitleGold}>Influence the Future.</Text></Text>

          <View style={s.pointsList}>
            {POINTS.map((pt, idx) => (
              <View key={idx} style={s.pointRow}>
                <CheckCircle2 size={16} color="#EBB422" />
                <Text style={s.pointText}>{pt}</Text>
              </View>
            ))}
          </View>

          <View style={s.stepsRow}>
            {STEPS.map((st, idx) => {
              const Icon = st.icon;
              return (
                <View key={idx} style={s.stepItem}>
                  <View style={s.stepIconBox}>
                    <Icon size={16} color="#133E2B" />
                  </View>
                  <View style={s.stepTextCol}>
                    <Text style={s.stepTitle}>{st.title}</Text>
                    <Text style={s.stepSub}>{st.subtitle}</Text>
                  </View>
                </View>
              );
            })}
          </View>

          <TouchableOpacity style={s.btn} activeOpacity={0.8}>
            <Text style={s.btnText}>SUBMIT YOUR ABSTRACT NOW</Text>
            <ArrowRight size={16} color="#0A2518" />
          </TouchableOpacity>

          <Text style={s.footerText}>Deadline: <Text style={{ color: '#EBB422' }}>30th June 2026</Text></Text>
        </View>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    backgroundColor: '#FAF7F2',
    paddingHorizontal: 6,
    paddingVertical: 6,
  },
  card: {
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#0A2518',
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 10,
  },
  bgImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    // opacity: 0.8,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // backgroundColor: 'rgba(6, 32, 19, 0.85)',
  },
  content: {
    padding: 6,
    position: 'relative',
    zIndex: 2,
    alignItems: 'center',
  },
  titleGold: {
    fontSize: 20,
    fontWeight: '800',
    color: '#EBB422',
    marginBottom: 2,
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 14,
    color: '#FFF',
    fontWeight: '600',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitleGold: {
    color: '#EBB422',
    fontWeight: '800',
  },
  pointsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: 8,
    columnGap: 4,
    marginBottom: 12,
    width: '100%',
  },
  pointRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    width: '48%',
  },
  pointText: {
    color: '#FFF',
    fontSize: 11,
    fontWeight: '600',
    lineHeight: 14,
    flex: 1,
  },
  stepsRow: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 10,
    rowGap: 4,
    columnGap: 4,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 10,
    width: '100%',
  },
  stepItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    width: '48%',
  },
  stepIconBox: {
    width: 22,
    height: 22,
    borderRadius: 8,
    backgroundColor: '#F0F7F3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepTextCol: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 10,
    fontWeight: '900',
    color: '#111A15',
    marginBottom: 0,
  },
  stepSub: {
    fontSize: 8,
    color: '#666',
    fontWeight: '600',
  },
  btn: {
    backgroundColor: '#EBB422',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 24,
    borderRadius: 10,
    gap: 8,
    width: '100%',
    marginBottom: 8,
    elevation: 4,
    shadowColor: '#EBB422',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
  },
  btnText: {
    color: '#0A2518',
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  footerText: {
    color: '#DDD',
    fontSize: 12,
    fontWeight: '700',
  },
});
