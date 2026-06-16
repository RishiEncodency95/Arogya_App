import React, { useEffect } from 'react';
import { View, StyleSheet, StatusBar, Dimensions } from 'react-native';
import Video from 'react-native-video';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const { width, height } = Dimensions.get('window');

export const OnboardingScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();



  return (
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" backgroundColor="#FAFBF8" hidden={true} />
      <Video
        source={require('../assets/logo/splice.mp4')}
        style={styles.video}
        resizeMode="stretch"
        controls={false}
        repeat={false}
        muted={true}
        onEnd={() => navigation.replace('Login')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FAFBF8',
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});