import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const { width } = Dimensions.get('window');
const FOREST = '#063A28';
const GOLD = '#B45309';
const GOLD_LT = '#FEF3C7';
const MUTED = '#6B7280';
const WHITE = '#FFFFFF';
const DIVIDER = '#E5E7EB';

const INITIATIVES_DATA = [
  { title: 'Integrated Healthcare', desc: 'Promoting synergy between Modern Medicine, AYUSH and traditional wisdom.', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=400', icon: 'heart' },
  { title: 'Health Awareness', desc: 'Spreading knowledge on preventive healthcare and healthy living.', img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=400', icon: 'book' },
  { title: 'Community Empowerment', desc: 'Empowering communities through health camps and workshops.', img: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=400', icon: 'users' },
  { title: 'Environment Sustainability', desc: 'Working towards clean rivers and green initiatives.', img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=400', icon: 'feather' },
];

const EXTENDED_DATA = [...INITIATIVES_DATA, ...INITIATIVES_DATA];

export const InitiativesSection = () => {
  const scrollViewRef = useRef<ScrollView>(null);
  const cardWidth = (width - 44) / 2;
  const itemWidth = cardWidth + 12; // width + gap

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex += 1;
      
      // Smoothly scroll to the next item
      scrollViewRef.current?.scrollTo({ x: currentIndex * itemWidth, animated: true });

      // If we just reached the duplicated first item (which looks identical to the real first item)
      if (currentIndex === INITIATIVES_DATA.length) {
        // Wait for the slide animation to finish, then instantly and invisibly snap back to 0
        setTimeout(() => {
          currentIndex = 0;
          scrollViewRef.current?.scrollTo({ x: 0, animated: false });
        }, 500);
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [itemWidth]);

  return (
    <View style={styles.initiativesSection}>
      <Text style={styles.initiativesTitle}>OUR INITIATIVES</Text>
      <Text style={styles.initiativesSub}>BUILDING A BETTER TOMORROW</Text>

      <ScrollView 
        ref={scrollViewRef}
        horizontal 
        showsHorizontalScrollIndicator={false} 
        snapToInterval={itemWidth} 
        decelerationRate="fast" 
        contentContainerStyle={styles.initiativesScroll}
      >
        {EXTENDED_DATA.map((item, i) => (
          <View key={i} style={styles.initCard}>
            <View style={styles.initCardContent}>
              <View style={styles.initIconWrap}>
                <Icon name={item.icon} size={14} color={FOREST} />
              </View>
              <Text style={styles.initCardTitle} numberOfLines={2}>{item.title}</Text>
              <Text style={styles.initCardDesc} numberOfLines={3}>{item.desc}</Text>
            </View>
            <Image source={{ uri: item.img }} style={styles.initCardImg} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  initiativesSection: {
    paddingVertical: 6,
    backgroundColor: WHITE,
  },
  initiativesTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: FOREST,
    textAlign: 'center',
    marginBottom: 2,
    letterSpacing: -0.5,
  },
  initiativesSub: {
    fontSize: 11,
    fontWeight: '700',
    color: GOLD,
    textAlign: 'center',
    letterSpacing: 0.5,
    marginBottom: 6,
  },
  initiativesScroll: {
    paddingHorizontal: 6,
    gap: 12,
  },
  initCard: {
    width: (width - 44) / 2, // Exactly fits 2 cards on screen

    backgroundColor: WHITE,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: DIVIDER,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
    marginBottom: 8,
    marginTop: 2,
  },
  initCardContent: {
    padding: 12, // Reduced padding to give text more width
    height: 120, // Increased height to prevent text from being cut off
  },
  initIconWrap: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: GOLD_LT,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  initCardTitle: {
    fontSize: 13, // Smaller font for narrower card
    fontWeight: '800',
    color: FOREST,
    marginBottom: 4,
    letterSpacing: -0.3,
  },
  initCardDesc: {
    fontSize: 11, // Smaller font for narrower card
    color: MUTED,
    lineHeight: 15,
  },
  initCardImg: {
    width: '100%',
    height: 90,
  },
});
