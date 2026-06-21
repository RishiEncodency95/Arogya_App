import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';
import { Camera, useCameraDevice, useCameraPermission, useCodeScanner, Code } from 'react-native-vision-camera';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation, useIsFocused } from '@react-navigation/native';

export const QRPassScreen = () => {
  const { hasPermission, requestPermission } = useCameraPermission();
  const device = useCameraDevice('back');
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const scannedRef = useRef(false);

  useEffect(() => {
    if (!hasPermission) {
      requestPermission();
    }
  }, [hasPermission, requestPermission]);

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: (codes: Code[]) => {
      if (scannedRef.current) return;
      const value = codes[0]?.value;
      if (value) {
        scannedRef.current = true;
        Alert.alert('Scanned QR Details', value, [
          { text: 'Scan Again', onPress: () => { scannedRef.current = false; } },
          { text: 'Close', style: 'cancel', onPress: () => { scannedRef.current = false; navigation.goBack(); } }
        ]);
      }
    }
  });

  if (!hasPermission) {
    return (
      <View style={[styles.center, { backgroundColor: '#fff' }]}>
        <Text style={styles.text}>We need your permission to use the camera to scan QR passes.</Text>
        <TouchableOpacity style={styles.btn} onPress={requestPermission}>
          <Text style={styles.btnText}>Grant Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (device == null) {
    return (
      <View style={[styles.center, { backgroundColor: '#fff' }]}>
        <Text style={styles.text}>No camera device found on this phone.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {isFocused && (
        <Camera
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={isFocused}
          codeScanner={codeScanner}
        />
      )}
      
      {/* Scanner Overlay UI */}
      <View style={styles.overlay}>
        <View style={styles.topBar}>
           <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
             <Ionicons name="arrow-back" size={24} color="#FFF" />
           </TouchableOpacity>
           <Text style={styles.headerTitle}>Scan QR Pass</Text>
           <View style={{width: 24}}/>
        </View>

        <View style={styles.scanBoxWrapper}>
          <View style={styles.scanBox} />
        </View>

        <View style={styles.bottomBar}>
          <Text style={styles.instruction}>Align QR code within the frame to scan</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    color: '#333',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  btn: {
    backgroundColor: '#0A4232',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  overlay: {
    ...StyleSheet.absoluteFill,
    justifyContent: 'space-between',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  backBtn: {
    padding: 4,
  },
  headerTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  scanBoxWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanBox: {
    width: 250,
    height: 250,
    borderWidth: 2,
    borderColor: '#DFE7DE',
    backgroundColor: 'transparent',
    borderRadius: 16,
  },
  bottomBar: {
    padding: 30,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    paddingBottom: 120, // Leave room for bottom nav
  },
  instruction: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '500',
  }
});
