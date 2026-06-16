import React from 'react';
import { View, Text } from 'react-native';

interface Props {
  title: string;
}

export const PlaceholderScreen: React.FC<Props> = ({ title }) => {
  return (
    <View className="flex-1 items-center justify-center bg-bg-cream">
      <Text className="text-2xl font-bold text-primary-green mb-2">{title}</Text>
      <Text className="text-base text-text-dark text-center px-8">
        This screen is currently under construction. Please check back later!
      </Text>
    </View>
  );
};
