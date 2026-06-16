import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, List, Users, Grid2x2, User } from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { HomeScreen } from '../screens/HomeScreen';
import { PlaceholderScreen } from '../screens/PlaceholderScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { TracksScreen } from '../screens/TracksScreen';
import { SpeakersScreen } from '../screens/SpeakersScreen';
import { MenuScreen } from '../screens/MenuScreen';

const Tab = createBottomTabNavigator();

const GOLD = '#DFB143';
const INACTIVE = 'rgba(255,255,255,0.8)';
const BG = '#071f15';

type IconProps = { color: string; size: number };
type TabIconProps = { focused: boolean; icon: React.ReactNode };

const TabIcon = ({ focused, icon }: TabIconProps) => (
  <View style={[styles.iconWrap, focused && styles.iconWrapActive]}>
    {icon}
  </View>
);

export const TabNavigator = () => {
  const insets = useSafeAreaInsets();
  const bottom = insets.bottom > 0 ? insets.bottom : 8;

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: GOLD,
        tabBarInactiveTintColor: INACTIVE,
        tabBarStyle: {
          backgroundColor: BG,
          borderTopWidth: 1.5,
          borderTopColor: GOLD,
          paddingBottom: bottom,
          paddingTop: 6,
          height: 56 + bottom,
          elevation: 20,
        },
        tabBarLabelStyle: {
          fontSize: 8,
          fontWeight: '700',
          letterSpacing: 0.8,
          textTransform: 'uppercase',
          marginTop: 1,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color }: IconProps & { focused: boolean }) => (
            <TabIcon focused={focused} icon={<Home color={color} size={22} strokeWidth={focused ? 2.5 : 1.8} />} />
          ),
        }}
      />
      <Tab.Screen
        name="Tracks"
        component={TracksScreen}
        options={{
          tabBarIcon: ({ focused, color }: IconProps & { focused: boolean }) => (
            <TabIcon focused={focused} icon={<List color={color} size={22} strokeWidth={focused ? 2.5 : 1.8} />} />
          ),
        }}
      />
      <Tab.Screen
        name="Speakers"
        component={SpeakersScreen}
        options={{
          tabBarIcon: ({ focused, color }: IconProps & { focused: boolean }) => (
            <TabIcon focused={focused} icon={<Users color={color} size={22} strokeWidth={focused ? 2.5 : 1.8} />} />
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          tabBarIcon: ({ focused, color }: IconProps & { focused: boolean }) => (
            <TabIcon focused={focused} icon={<Grid2x2 color={color} size={22} strokeWidth={focused ? 2.5 : 1.8} />} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color }: IconProps & { focused: boolean }) => (
            <TabIcon focused={focused} icon={<User color={color} size={22} strokeWidth={focused ? 2.5 : 1.8} />} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconWrap: {
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 20,
  },
  iconWrapActive: {
    backgroundColor: 'rgba(223, 177, 67, 0.15)',
  },
});