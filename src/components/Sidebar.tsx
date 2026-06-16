import React, { useEffect, useRef } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
  Modal, Animated, Dimensions, TouchableWithoutFeedback, Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const { width } = Dimensions.get('window');
const SIDEBAR_WIDTH = width * 0.75;
const GREEN = '#1B5E3A';
const GOLD = '#B8860B';
const CREAM = '#F2EFE6';

interface SidebarProps {
  visible: boolean;
  onClose: () => void;
}

export const Sidebar = ({ visible, onClose }: SidebarProps) => {
  const slideAnim = useRef(new Animated.Value(SIDEBAR_WIDTH)).current;
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
        toValue: SIDEBAR_WIDTH,
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
    { icon: 'home', label: 'Home', action: () => {} },
    { icon: 'user', label: 'Profile', action: () => {} },
    { icon: 'settings', label: 'Settings', action: () => {} },
    { icon: 'help-circle', label: 'Help & Support', action: () => {} },
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
          {/* Header */}
          <View style={styles.header}>
            <Image source={require('../assets/logo/logo.png')} style={styles.logo} />
            <TouchableOpacity onPress={handleClose} style={styles.closeBtn}>
              <Icon name="x" size={24} color={GREEN} />
            </TouchableOpacity>
          </View>

          {/* User Info */}
          <View style={styles.userInfo}>
            <View style={styles.avatar}>
              <Icon name="user" size={30} color={GOLD} />
            </View>
            <View>
              <Text style={styles.userName}>Guest User</Text>
              <Text style={styles.userPhone}>+91 XXXXX XXXXX</Text>
            </View>
          </View>

          {/* Menu Items */}
          <View style={styles.menuContainer}>
            {menuItems.map((item, index) => (
              <TouchableOpacity key={index} style={styles.menuItem} onPress={handleClose}>
                <View style={styles.menuIconWrap}>
                  <Icon name={item.icon} size={20} color={GREEN} />
                </View>
                <Text style={styles.menuLabel}>{item.label}</Text>
                <Icon name="chevron-right" size={16} color="#ccc" />
              </TouchableOpacity>
            ))}
          </View>

          {/* Footer */}
          <TouchableOpacity style={styles.logoutBtn} onPress={handleClose}>
            <Icon name="log-out" size={20} color="#dc2626" />
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  backdrop: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  sidebar: {
    width: SIDEBAR_WIDTH,
    height: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderBottomLeftRadius: 24,
    paddingVertical: 20,
    shadowColor: '#000',
    shadowOffset: { width: -5, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 30,
    marginTop: 40, // For notch/status bar safety
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  closeBtn: {
    padding: 8,
    backgroundColor: CREAM,
    borderRadius: 20,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: CREAM,
    marginBottom: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: CREAM,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  userName: {
    fontSize: 18,
    fontWeight: '700',
    color: GREEN,
  },
  userPhone: {
    fontSize: 13,
    color: '#666',
    marginTop: 2,
  },
  menuContainer: {
    flex: 1,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 20,
  },
  menuIconWrap: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: CREAM,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  menuLabel: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  logoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: CREAM,
    marginTop: 'auto',
    marginBottom: 20,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#dc2626',
    marginLeft: 8,
  },
});
