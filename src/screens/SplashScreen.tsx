import React, { useRef } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import Video from 'react-native-video';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export const OnboardingScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const navigatedRef = useRef(false);
  
  // Smart frame tracking variables
  const lastTimeRef = useRef(-1);
  const endDetectTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleProgress = (progress: any) => {
    if (progress.currentTime !== lastTimeRef.current) {
      lastTimeRef.current = progress.currentTime;

      if (endDetectTimer.current) {
        clearTimeout(endDetectTimer.current);
      }

      endDetectTimer.current = setTimeout(() => {
        if (!navigatedRef.current) {
          navigatedRef.current = true;
          // React Navigation native stack handles the smooth cross-fade natively.
          // No manual opacity fade, preventing any white screen flash!
          navigation.replace('Login');
        }
      }, 500);
    }
  };

  return (
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" backgroundColor="#FAFBF8" hidden={true} />

      {/* No cheap loading spinner! The background is clean while video instantly initializes natively. */}

      <Video
        source={require('../assets/logo/splice3.mp4')}
        style={styles.video}
        resizeMode="stretch"
        controls={false}
        repeat={false}
        muted={true}
        useTextureView={true} // Guarantees Android keeps the last frame instead of turning black
        onProgress={handleProgress}
        progressUpdateInterval={100} // Check frames every 100ms
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
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAFBF8',
    zIndex: 10,
  },
});