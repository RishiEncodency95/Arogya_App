import React, { useEffect, useRef } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
  Modal, Animated, Dimensions, TouchableWithoutFeedback, Image, ScrollView, SafeAreaView, Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const { width } = Dimensions.get('window');
const SIDEBAR_WIDTH = width * 0.8;
const GREEN = '#1B5E3A'; // Dark green from logo
const ACTIVE_BG = '#F0F7F3'; // Light green for active item
const TEXT_DARK = '#1F2937';
const TEXT_GRAY = '#6B7280';

interface SidebarProps {
  visible: boolean;
  onClose: () => void;
}

export const Sidebar = ({ visible, onClose }: SidebarProps) => {
  const slideAnim = useRef(new Animated.Value(-SIDEBAR_WIDTH)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [visible]);

  const handleClose = () => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: -SIDEBAR_WIDTH,
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }),
    ]).start(() => {
      onClose();
    });
  };

  const menuItems = [
    { icon: 'home', label: 'Home', action: () => {}, active: true },
    { icon: 'grid', label: 'My Pass', action: () => {} },
    { icon: 'calendar', label: 'Schedule', action: () => {} },
    { icon: 'mic', label: 'Speakers', action: () => {} },
    { icon: 'bell', label: 'Notifications', action: () => {}, badge: 3 },
    { icon: 'headphones', label: 'Help & Support', action: () => {} },
  ];

  const otherItems = [
    { icon: 'user', label: 'My Profile', action: () => {} },
    { icon: 'settings', label: 'Settings', action: () => {} },
  ];

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="none"
      onRequestClose={handleClose}
    >
      <View style={styles.overlay}>
        <TouchableWithoutFeedback onPress={handleClose}>
          <Animated.View style={[styles.backdrop, { opacity: fadeAnim }]} />
        </TouchableWithoutFeedback>

        <Animated.View style={[styles.sidebar, { transform: [{ translateX: slideAnim }] }]}>
          <SafeAreaView style={styles.safeArea}>
            
            {/* --- FIXED TOP SECTION --- */}
            <View style={styles.fixedTop}>
              {/* Header */}
              <View style={styles.header}>
                <Image source={require('../assets/logo/logo.png')} style={styles.logo} />
                <TouchableOpacity onPress={handleClose} style={styles.closeBtn}>
                  <Icon name="x" size={20} color={TEXT_DARK} />
                </TouchableOpacity>
              </View>

              {/* Profile Card */}
              <View style={styles.profileCard}>
                <Image 
                  source={{ uri: 'https://i.pravatar.cc/150?u=rohit' }} 
                  style={styles.profileImage} 
                />
                <View style={styles.profileInfo}>
                  <Text style={styles.profileName}>Dr. Rohit Kumar</Text>
                  <Text style={styles.profileId}>Delegate ID: AS2026-1025</Text>
                  <View style={styles.badgeContainer}>
                    <Icon name="check-circle" size={12} color={GREEN} />
                    <Text style={styles.badgeText}>Delegate Pass Active</Text>
                  </View>
                </View>
              </View>
            </View>

            {/* --- SCROLLABLE MENU SECTION --- */}
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
              {/* Main Menu */}
              <View style={styles.menuContainer}>
                {menuItems.map((item, index) => (
                  <TouchableOpacity 
                    key={index} 
                    style={[styles.menuItem, item.active && styles.menuItemActive]} 
                    onPress={handleClose}
                  >
                    <View style={[styles.menuIconWrap, item.active && styles.menuIconWrapActive]}>
                      <Icon name={item.icon} size={20} color={item.active ? '#fff' : GREEN} />
                    </View>
                    <Text style={[styles.menuLabel, item.active && styles.menuLabelActive]}>{item.label}</Text>
                    {item.badge && (
                      <View style={styles.badgeCount}>
                        <Text style={styles.badgeCountText}>{item.badge}</Text>
                      </View>
                    )}
                    {!item.active && <Icon name="chevron-right" size={18} color={TEXT_GRAY} />}
                  </TouchableOpacity>
                ))}
              </View>

              {/* Others Menu */}
              <View style={styles.othersContainer}>
                <Text style={styles.othersTitle}>OTHERS</Text>
                {otherItems.map((item, index) => (
                  <TouchableOpacity key={index} style={styles.menuItem} onPress={handleClose}>
                    <View style={styles.menuIconWrap}>
                      <Icon name={item.icon} size={20} color={TEXT_GRAY} />
                    </View>
                    <Text style={styles.menuLabel}>{item.label}</Text>
                    <Icon name="chevron-right" size={18} color={TEXT_GRAY} />
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>

            {/* --- FIXED BOTTOM SECTION --- */}
            <View style={styles.fixedBottom}>
              <TouchableOpacity style={styles.logoutBtn} onPress={handleClose}>
                <Icon name="log-out" size={20} color="#dc2626" />
                <Text style={styles.logoutText}>Logout</Text>
              </TouchableOpacity>
            </View>

          </SafeAreaView>
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  backdrop: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  sidebar: {
    width: SIDEBAR_WIDTH,
    height: '100%',
    backgroundColor: '#fff',
    borderTopRightRadius: 24,
    borderBottomRightRadius: 24,
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
    overflow: 'hidden',
  },
  safeArea: {
    flex: 1,
  },
  fixedTop: {
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'android' ? 20 : 10,
    paddingBottom: 10,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  fixedBottom: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  logo: {
    width: 140,
    height: 45,
    resizeMode: 'contain',
  },
  closeBtn: {
    padding: 8,
    backgroundColor: '#F3F4F6',
    borderRadius: 20,
  },
  profileCard: {
    backgroundColor: '#0c4a2e',
    borderRadius: 16,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  profileImage: {
    width: 52,
    height: 52,
    borderRadius: 26,
    borderWidth: 2,
    borderColor: '#fff',
    marginRight: 12,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 4,
  },
  profileId: {
    color: '#E5E7EB',
    fontSize: 11,
    marginBottom: 6,
  },
  badgeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  badgeText: {
    color: GREEN,
    fontSize: 10,
    fontWeight: '600',
    marginLeft: 4,
  },
  menuContainer: {
    marginBottom: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 12,
    marginBottom: 4,
  },
  menuItemActive: {
    backgroundColor: ACTIVE_BG,
  },
  menuIconWrap: {
    width: 32,
    height: 32,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  menuIconWrapActive: {
    backgroundColor: GREEN,
  },
  menuLabel: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    color: TEXT_DARK,
  },
  menuLabelActive: {
    color: GREEN,
  },
  badgeCount: {
    backgroundColor: GREEN,
    width: 22,
    height: 22,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  badgeCountText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '700',
  },
  othersContainer: {
    marginBottom: 16,
  },
  othersTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: TEXT_GRAY,
    letterSpacing: 0.5,
    marginBottom: 8,
    paddingHorizontal: 12,
  },
  logoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  logoutText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#dc2626',
    marginLeft: 14,
  },
});

