import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { Send } from 'lucide-react-native';

export const ContactMapNewsletter = () => {
  return (
    <View style={s.container}>
      {/* Map Card */}
      <View style={s.mapCard}>
        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800' }} 
          style={s.mapBg} 
        />
        <View style={s.mapContent}>
          <Text style={s.mapTitle}>Find Us Here</Text>
          <Text style={s.mapDesc}>Pragati Maidan,{'\n'}New Delhi - 110001, India</Text>
          <TouchableOpacity style={s.dirBtn} activeOpacity={0.8}>
            <Send size={12} color="#FFF" />
            <Text style={s.dirBtnText}>Get Directions</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Newsletter Card */}
      <View style={s.newsletterCard}>
        <View style={s.newsHeader}>
          <Text style={s.newsIcon}>✉️</Text>
          <View style={s.newsTextCol}>
            <Text style={s.newsTitle}>Stay Updated!</Text>
            <Text style={s.newsDesc}>Subscribe to our newsletter and never miss an update.</Text>
          </View>
        </View>

        <View style={s.subscribeRow}>
          <TextInput 
            style={s.newsInput} 
            placeholder="Enter your email address" 
            placeholderTextColor="#9CA3AF"
            keyboardType="email-address"
          />
          <TouchableOpacity style={s.subsBtn} activeOpacity={0.8}>
            <Text style={s.subsBtnText}>Subscribe</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  mapCard: {
    height: 160,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    position: 'relative',
  },
  mapBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  mapContent: {
    position: 'absolute',
    left: 12,
    top: 12,
    bottom: 12,
    width: '60%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    justifyContent: 'space-between',
    elevation: 5,
  },
  mapTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#111827',
  },
  mapDesc: {
    fontSize: 11,
    color: '#4B5563',
    lineHeight: 16,
  },
  dirBtn: {
    backgroundColor: '#0A2518',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    borderRadius: 8,
    gap: 6,
  },
  dirBtnText: {
    color: '#FFF',
    fontSize: 11,
    fontWeight: '700',
  },
  newsletterCard: {
    backgroundColor: '#0A2518',
    borderRadius: 16,
    padding: 20,
  },
  newsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginBottom: 16,
  },
  newsIcon: {
    fontSize: 40,
  },
  newsTextCol: {
    flex: 1,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#FFF',
    marginBottom: 4,
  },
  newsDesc: {
    fontSize: 11,
    color: '#D1D5DB',
  },
  subscribeRow: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 4,
  },
  newsInput: {
    flex: 1,
    paddingHorizontal: 12,
    fontSize: 12,
    color: '#111',
  },
  subsBtn: {
    backgroundColor: '#F97316',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 6,
    justifyContent: 'center',
  },
  subsBtnText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '800',
  },
});
