import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Users, ArrowRight } from 'lucide-react-native';

const COMMITTEE = [
  { id: '1', name: 'Dr. P. K. Gupta', role: 'Chairman\nPNA Group', image: 'https://i.pravatar.cc/150?img=12' },
  { id: '2', name: 'Dr. Meenakshi Sharma', role: 'Chairperson\nArogya Sanghosthi', image: 'https://i.pravatar.cc/150?img=5' },
  { id: '3', name: 'Mr. S. K. Verma', role: 'Vice Chairman\nPNA Group', image: 'https://i.pravatar.cc/150?img=14' },
  { id: '4', name: 'Dr. B. R. Sharma', role: 'Chairman\nPNA Group', image: 'https://i.pravatar.cc/150?img=11' },
];

const ADVISORS = [
  'Dr. Anurag Aggarwal',
  'Dr. G. N. Singh',
  'Dr. Bhushan Patwardhan',
  'Dr. Abhay Bang',
  'Dr. Rama Joshi',
  'And Many More',
];

export const OrganisingCommittee = () => {
  return (
    <View style={s.container}>
      <View style={s.card}>
        <View style={s.headerRow}>
          <Users size={16} color="#133E2B" />
          <Text style={s.title}>ORGANISING COMMITTEE</Text>
        </View>

        <View style={s.avatarsRow}>
          {COMMITTEE.map((c) => (
            <View key={c.id} style={s.avatarItem}>
              <Image source={{ uri: c.image }} style={s.avatar} />
              <Text style={s.name}>{c.name}</Text>
              <Text style={s.role}>{c.role}</Text>
            </View>
          ))}
        </View>

        <View style={s.divider} />

        <View style={s.bottomSection}>
          <View style={s.advisoryCol}>
            <Text style={s.subhead}>ADVISORY BOARD</Text>
            {ADVISORS.map((adv, idx) => (
              <View key={idx} style={s.advRow}>
                <Users size={10} color="#4A7A3A" />
                <Text style={s.advText}>{adv}</Text>
              </View>
            ))}
          </View>

          <View style={s.membersCol}>
            <Text style={s.subhead}>ORGANISING MEMBERS</Text>
            <View style={s.membersCard}>
              <Users size={32} color="#133E2B" />
              <Text style={s.membersText}>
                A Dedicated Team of Healthcare Professionals Working Together to Deliver an Impactful Experience
              </Text>
            </View>
            
            <TouchableOpacity style={s.btn} activeOpacity={0.8}>
              <Text style={s.btnText}>VIEW FULL COMMITTEE</Text>
              <ArrowRight size={12} color="#555" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      
      {/* Bottom Register Bar */}
      <View style={s.bottomBar}>
        <Text style={s.bottomBarText}>BE A PART OF THE CHANGE. SHAPE THE FUTURE OF HEALTHCARE.</Text>
        <TouchableOpacity style={s.bottomBarBtn}>
          <Text style={s.bottomBarBtnText}>REGISTER NOW</Text>
          <ArrowRight size={12} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    backgroundColor: '#FAF7F2',
    paddingHorizontal: 6,
    paddingVertical: 6,
    paddingBottom: 40,
  },
  card: {
    backgroundColor: '#FAFAFA',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#EAEAEA',
    padding: 16,
    marginBottom: 12,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 20,
  },
  title: {
    fontSize: 14,
    fontWeight: '800',
    color: '#133E2B',
  },
  avatarsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  avatarItem: {
    alignItems: 'center',
    width: '24%',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginBottom: 6,
    backgroundColor: '#EEE',
  },
  name: {
    fontSize: 9,
    fontWeight: '800',
    color: '#111',
    textAlign: 'center',
    marginBottom: 2,
  },
  role: {
    fontSize: 7,
    color: '#666',
    textAlign: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: '#EAEAEA',
    marginBottom: 16,
  },
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  advisoryCol: {
    flex: 1,
    paddingRight: 10,
  },
  subhead: {
    fontSize: 10,
    fontWeight: '800',
    color: '#133E2B',
    marginBottom: 8,
  },
  advRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 6,
  },
  advText: {
    fontSize: 9,
    fontWeight: '600',
    color: '#333',
  },
  membersCol: {
    flex: 1.2,
    paddingLeft: 10,
    borderLeftWidth: 1,
    borderLeftColor: '#EAEAEA',
  },
  membersCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  membersText: {
    fontSize: 8,
    color: '#444',
    flex: 1,
    lineHeight: 12,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#CCC',
    gap: 4,
  },
  btnText: {
    fontSize: 9,
    fontWeight: '700',
    color: '#555',
  },
  bottomBar: {
    backgroundColor: '#F5F5F0',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    flexDirection: 'column',
    gap: 12,
  },
  bottomBarText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#111',
    textAlign: 'center',
  },
  bottomBarBtn: {
    backgroundColor: '#8B1538',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    gap: 6,
  },
  bottomBarBtnText: {
    color: '#FFF',
    fontSize: 11,
    fontWeight: '800',
  },
});
