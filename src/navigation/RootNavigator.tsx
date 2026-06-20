import React from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OnboardingScreen } from '../screens/SplashScreen';
import { LoginScreen } from '../screens/auth/LoginScreen';
import { OTPScreen } from '../screens/auth/OTPScreen';
import { TabNavigator } from './TabNavigator';
import { Header } from '../components/Header';

const Stack = createNativeStackNavigator();

const MainLayout = () => {
  return (
    <View className="flex-1 bg-bg-cream">
      <Header />
      <TabNavigator />
    </View>
  );
};

export const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={OnboardingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ animation: 'fade' }} />
      <Stack.Screen name="OTP" component={OTPScreen} />
      <Stack.Screen name="Main" component={MainLayout} />
    </Stack.Navigator>
  );
};
