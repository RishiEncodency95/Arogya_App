import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Sidebar } from './Sidebar';

export const Header = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  return (
    <>
      <SafeAreaView edges={['top']} className="bg-white">
        <View className="flex-row items-center justify-between px-4 py-1 bg-white border-b border-border-light">
          <View className="flex-row items-center">
            <Text className="text-xl font-bold text-primary-green tracking-tight">
              arogya
            </Text>
            <Text className="text-xl font-light text-primary-green italic ml-1">
              sangoshthi
            </Text>
          </View>
          <TouchableOpacity className="p-2" onPress={() => setSidebarVisible(true)}>
            <Icon name="menu" size={24} color="#0A4232" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <Sidebar visible={isSidebarVisible} onClose={() => setSidebarVisible(false)} />
    </>
  );
};
