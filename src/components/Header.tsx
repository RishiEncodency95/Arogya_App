import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Sidebar } from './Sidebar';

export const Header = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  return (
    <>
      <StatusBar hidden={false} barStyle="light-content" backgroundColor="#0f2d25" />
      <SafeAreaView edges={['top']} style={s.safeArea}>
        <View style={s.container}>

          {/* Left — Hamburger */}
          <TouchableOpacity onPress={() => setSidebarVisible(true)} style={s.menuBtn}>
            <Icon name="menu" size={26} color="#fff" />
          </TouchableOpacity>

          {/* Center — Logo */}
          <View style={s.logoWrap}>
            <Image
              source={require('../assets/logo/logo.png')}
              style={s.logoImage}
              resizeMode="contain"
            />
          </View>

          {/* Right — Bell + Avatar */}
          <View style={s.rightRow}>
            <View style={s.bellWrap}>
              <Icon name="bell" size={22} color="#fff" />
              <View style={s.badge}>
                <Text style={s.badgeText}>3</Text>
              </View>
            </View>
            <View style={s.avatar}>
              <Icon name="user" size={18} color="#fff" />
            </View>
            <Icon name="chevron-down" size={14} color="rgba(255,255,255,0.6)" />
          </View>

        </View>
      </SafeAreaView>
      <Sidebar visible={isSidebarVisible} onClose={() => setSidebarVisible(false)} />
    </>
  );
};

const s = StyleSheet.create({
  safeArea: { backgroundColor: '#0f2d25' },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 6,
    backgroundColor: '#0f2d25',
  },
  menuBtn: { padding: 2 },
  logoWrap: { alignItems: 'center', justifyContent: 'center' },
  logoImage: { width: 160, height: 40, resizeMode: 'contain' },
  rightRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  bellWrap: { position: 'relative' },
  badge: {
    position: 'absolute', top: -5, right: -5,
    backgroundColor: '#e84040', width: 16, height: 16,
    borderRadius: 8, alignItems: 'center', justifyContent: 'center',
    borderWidth: 1.5, borderColor: '#0f2d25',
  },
  badgeText: { color: '#fff', fontSize: 9, fontWeight: '700' },
  avatar: {
    width: 36, height: 36, borderRadius: 18,
    backgroundColor: '#8b6544',
    alignItems: 'center', justifyContent: 'center',
    borderWidth: 2, borderColor: 'rgba(255,255,255,0.2)',
  },
});