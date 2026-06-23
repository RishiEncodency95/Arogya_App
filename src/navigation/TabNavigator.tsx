import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { HomeScreen } from '../screens/HomeScreen';
import { PlaceholderScreen } from '../screens/PlaceholderScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { TracksScreen } from '../screens/TracksScreen';
import { SpeakersScreen } from '../screens/SpeakersScreen';
import { MenuScreen } from '../screens/MenuScreen';

import { AboutUsScreen } from '../screens/AboutUsScreen';
import { PaperScreen } from '../screens/PaperScreen';
import { EnquiryScreen } from '../screens/EnquiryScreen';
import { RegistrationFeeScreen } from '../screens/RegistrationFeeScreen';
import { GalleryScreen } from '../screens/GalleryScreen';
import { BlogsScreen } from '../screens/BlogsScreen';
import { ContactUsScreen } from '../screens/ContactUsScreen';
import { DelegateRegScreen } from '../screens/DelegateRegScreen';
import { DelegateRegistrationFormScreen } from '../screens/DelegateRegistrationFormScreen';

const Tab = createBottomTabNavigator();

const ACTIVE = '#064E3B'; 
const INACTIVE = '#6B7280';
const BG = '#FFFFFF';

const QRButton = ({ children, onPress }: any) => (
  <TouchableOpacity
    style={styles.qrButtonWrapper}
    onPress={onPress}
    activeOpacity={0.8}
  >
    <View style={styles.qrButtonInner}>
      <Ionicons name="qr-code-outline" size={24} color="#FFF" />
      <Text style={styles.qrText}>QR Pass</Text>
    </View>
  </TouchableOpacity>
);

import { QRPassScreen } from '../screens/QRPassScreen';

export const TabNavigator = () => {
  const insets = useSafeAreaInsets();
  const bottom = insets.bottom > 0 ? insets.bottom - 10 : 10;

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: ACTIVE,
        tabBarInactiveTintColor: INACTIVE,
        tabBarStyle: {
          backgroundColor: BG,
          marginBottom: bottom > 0 ? bottom : 10,
          marginHorizontal: 10,
          elevation: 8,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: 4 },
          shadowRadius: 10,
          borderTopWidth: 0,
          borderRadius: 40,
          height: 64,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: '600',
          marginTop: 2,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home' : 'home-outline'} size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Schedule"
        component={TracksScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'calendar' : 'calendar-outline'} size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="QR Pass"
        component={QRPassScreen}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: () => null,
          tabBarButton: (props) => <QRButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Network"
        component={SpeakersScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'people' : 'people-outline'} size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={MenuScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'grid' : 'grid-outline'} size={24} color={color} />
          ),
        }}
      />
      
      {/* Sidebar Hidden Tab Screens */}
      <Tab.Screen name="AboutUs" component={AboutUsScreen} options={{ tabBarItemStyle: { display: 'none' } }} />
      <Tab.Screen name="PaperPresentation" component={PaperScreen} options={{ tabBarItemStyle: { display: 'none' } }} />
      <Tab.Screen name="Enquiry" component={EnquiryScreen} options={{ tabBarItemStyle: { display: 'none' } }} />
      <Tab.Screen name="RegistrationFee" component={RegistrationFeeScreen} options={{ tabBarItemStyle: { display: 'none' } }} />
      <Tab.Screen name="Gallery" component={GalleryScreen} options={{ tabBarItemStyle: { display: 'none' } }} />
      <Tab.Screen name="Blogs" component={BlogsScreen} options={{ tabBarItemStyle: { display: 'none' } }} />
      <Tab.Screen name="ContactUs" component={ContactUsScreen} options={{ tabBarItemStyle: { display: 'none' } }} />
      <Tab.Screen name="DelegateRegistration" component={DelegateRegScreen} options={{ tabBarItemStyle: { display: 'none' } }} />
      <Tab.Screen name="DelegateRegistrationForm" component={DelegateRegistrationFormScreen} options={{ tabBarItemStyle: { display: 'none' } }} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  qrButtonWrapper: {
    top: -24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#064E3B',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 8,
  },
  qrButtonInner: {
    width: 66,
    height: 66,
    borderRadius: 33,
    backgroundColor: '#064E3B',
    borderWidth: 4,
    borderColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  qrText: {
    color: '#FFF',
    fontSize: 9,
    fontWeight: '600',
    marginTop: 2,
  },
});