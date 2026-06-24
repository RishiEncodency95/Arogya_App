import React from 'react';
import { View, Text, StyleSheet, TextInput, ImageBackground } from 'react-native';
import { Search } from 'lucide-react-native';

export const BlogHeader = () => {
  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800' }}
      style={s.container}
      imageStyle={s.bgImage}
    >
      <View style={s.overlay} />
      <View style={s.content}>
        <Text style={s.title}>Blog & News</Text>
        <Text style={s.subtitle}>
          Stay updated with the latest insights, expert opinions, research breakthroughs and announcements from <Text style={s.subtitleBold}>Arogya Sanghosthi</Text>.
        </Text>

        <View style={s.searchBox}>
          <TextInput
            style={s.searchInput}
            placeholder="Search articles, news, topics..."
            placeholderTextColor="#6B7280"
          />
          <View style={s.searchBtn}>
            <Search size={16} color="#FFF" />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const s = StyleSheet.create({
  container: {
    paddingTop: 8,
    paddingBottom: 12,
    paddingHorizontal: 6,
    position: 'relative',
    overflow: 'hidden',
  },
  bgImage: {
    // opacity: 0.5,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // backgroundColor: '#F7EDE2',
    zIndex: -1,
  },
  content: {
    zIndex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: '900',
    // color: '#0A2518',
    color: '#fff',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 12,
    // color: '#4B5563',
    color: "#fff",
    lineHeight: 18,
    marginBottom: 20,
    maxWidth: '90%',
  },
  subtitleBold: {
    fontWeight: '800',
    // color: '#0A2518',
    color: '#fff',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 6,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  searchInput: {
    flex: 1,
    height: 36,
    paddingHorizontal: 8,
    fontSize: 12,
    color: '#111827',
  },
  searchBtn: {
    backgroundColor: '#0A2518',
    padding: 8,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
