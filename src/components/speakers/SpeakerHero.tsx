import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import { Users, Mic, Calendar, Globe, Target, UserCheck, Leaf } from 'lucide-react-native';

const { width } = Dimensions.get('window');

const C = {
  greenDark: '#032E1C',
  gold: '#CBA344',
  goldBright: '#F3B71B',
  cream: '#FAF9F6',
  textDark: '#333333',
};

const STATS = [
  { icon: UserCheck, num: '150+', label: 'EXPERT SPEAKERS' },
  { icon: Mic, num: '18', label: 'PREMIUM SESSIONS' },
  { icon: Calendar, num: '3', label: 'DAYS CONFERENCE' },
  { icon: Users, num: '1000+', label: 'DELEGATES' },
  { icon: Globe, num: '25+', label: 'COUNTRIES' },
  { icon: Target, num: 'ENDLESS', label: 'OPPORTUNITIES' },
];

export const SpeakerHero = () => {
  return (
    <View style={s.container}>
      <View style={s.imageContainer}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800' }}
          style={s.heroImage}
        />
      </View>
      <View style={s.textSection}>
        <View style={s.titleRow}>
          <Text style={s.titleGold}>Our Esteemed </Text>
          <Text style={s.titleDark}>Speakers</Text>
          
        </View>

        <View style={s.dividerRow}>
          <View style={s.dividerLine} />
        </View>

        <Text style={s.description}>
          Meet the leading experts, researchers and practitioners who are shaping the future of integrated healthcare, wellness and innovation.
        </Text>
      </View>

      

      {/* Stats Band overlapping image */}
      <View style={s.statsWrapper}>
        <View style={s.statsContainer}>
          <View style={s.statsGrid}>
            {STATS.map((stat, idx) => {
              const IconComp = stat.icon;
              return (
                <View key={idx} style={s.statItem}>
                  <IconComp size={20} color={C.goldBright} />
                  <View style={s.statTextCol}>
                    <Text style={s.statNum}>{stat.num}</Text>
                    <Text style={s.statLabel}>{stat.label}</Text>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    backgroundColor: C.cream,
    paddingTop: 0,
    paddingBottom: 0,
    marginBottom: 0,
  },
  textSection: {
    paddingHorizontal: 6,
    marginBottom: 2,
    marginTop:6
  },
  titleGold: {
    fontSize: 16,
    color: '#B7821A',
    fontWeight: '600',
    fontStyle: 'italic',
    marginBottom: 0,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  titleDark: {
    fontSize: 16,
    fontWeight: '800',
    color: C.greenDark,
   
  },
  
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 6,
    marginBottom: 6,
  },
  dividerLine: {
    height: 2,
    backgroundColor: '#B7821A',
    width: '100%'
  },
  description: {
    fontSize: 13,
    color: '#4B5563',
    lineHeight: 18,
    fontWeight: '500',
  },
  imageContainer: {
    // marginHorizontal: 6,
    position: 'relative',
    // No bottom margin needed since stats will negative margin over it
  },
  heroImage: {
    width: '100%',
    height: 180,
    // borderRadius: 8,
    backgroundColor: '#EAEAEA',
  },
  statsWrapper: {
    marginTop: 5, // Pull it up over the image
    alignItems: 'center',
    zIndex: 10,
    marginBottom: 1,
    paddingHorizontal:6
  },
  statsContainer: {
    backgroundColor: C.greenDark,
    borderRadius: 10,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 5,
    width: '100%',
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 12,
    paddingTop: 8,
    paddingBottom: 4,
    justifyContent: 'space-between',
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '48%',
    marginBottom: 12,
  },
  statTextCol: {
    marginLeft: 10,
    marginRight: 16,
  },
  statNum: {
    color: C.goldBright,
    fontSize: 16,
    fontWeight: '800',
  },
  statLabel: {
    color: '#FFFFFF',
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 0.5,
    marginTop: 2,
  },
});
