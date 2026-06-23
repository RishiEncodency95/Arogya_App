import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
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
        <ImageBackground 
          source={{ uri: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=600' }} 
          style={s.bg}
          imageStyle={s.bgImage}
        >
          <View style={s.overlay} />
          
          <View style={s.content}>
            <Text style={s.titleGold}>PAPER PRESENTATION</Text>
            <Text style={s.subtitle}>Present Your Research. <Text style={s.subtitleGold}>Influence the Future.</Text></Text>
            
            <View style={s.pointsList}>
              {POINTS.map((pt, idx) => (
                <View key={idx} style={s.pointRow}>
                  <CheckCircle2 size={14} color="#EBB422" />
                  <Text style={s.pointText}>{pt}</Text>
                </View>
              ))}
            </View>

            <View style={s.stepsRow}>
              {STEPS.map((st, idx) => {
                const Icon = st.icon;
                return (
                  <View key={idx} style={s.stepItem}>
                    <Icon size={18} color="#133E2B" />
                    <View>
                      <Text style={s.stepTitle}>{st.title}</Text>
                      <Text style={s.stepSub}>{st.subtitle}</Text>
                    </View>
                  </View>
                );
              })}
            </View>

            <TouchableOpacity style={s.btn} activeOpacity={0.8}>
              <Text style={s.btnText}>SUBMIT YOUR ABSTRACT NOW</Text>
              <ArrowRight size={14} color="#FFF" />
            </TouchableOpacity>

            <Text style={s.footerText}>Last Date: 30th June 2026</Text>
          </View>
        </ImageBackground>
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
  },
  bg: {
    width: '100%',
  },
  bgImage: {
    opacity: 0.2,
  },
  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(10, 37, 24, 0.85)',
  },
  content: {
    padding: 16,
    position: 'relative',
    zIndex: 2,
    alignItems: 'center',
  },
  titleGold: {
    fontSize: 22,
    fontWeight: '800',
    color: '#EBB422',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#FFF',
    fontWeight: '600',
    marginBottom: 16,
  },
  subtitleGold: {
    color: '#EBB422',
  },
  pointsList: {
    gap: 12,
    marginBottom: 20,
    width: '100%',
  },
  pointRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  pointText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 16,
  },
  stepsRow: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 10,
    gap: 8,
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 16,
    width: '100%',
  },
  stepItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    width: '45%',
    marginBottom: 4,
  },
  stepTitle: {
    fontSize: 10,
    fontWeight: '800',
    color: '#111',
  },
  stepSub: {
    fontSize: 8,
    color: '#555',
  },
  btn: {
    backgroundColor: '#1A36A8',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
    gap: 8,
    width: '90%',
    marginBottom: 12,
  },
  btnText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '800',
  },
  footerText: {
    color: '#FFF',
    fontSize: 11,
    fontWeight: '600',
  },
});
