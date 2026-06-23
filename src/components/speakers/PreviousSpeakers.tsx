import React, { useRef, useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Text } from 'react-native';
import { SpeakerCard, SpeakerProps } from './SpeakerCard';
import { SectionHeader } from './SectionHeader';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react-native';

const PREVIOUS_SPEAKERS: SpeakerProps[] = [
  { id: '1', name: 'Dr. Y. S. Rawat', degree: 'IFS (Retd.)', role: 'Former PCCF, HP', topic: 'Forest Administration', iconType: 'globe', image: 'https://i.pravatar.cc/150?img=13' },
  { id: '2', name: 'Dr. R. K. Maikhuri', degree: 'Dean', role: 'HNB Garhwal University', topic: 'Himalayan Ecology', iconType: 'book', image: 'https://i.pravatar.cc/150?img=14' },
  { id: '3', name: 'Dr. J. P. Gusain', degree: 'Professor Emeritus', role: 'GB Pant Univ.', topic: 'Agricultural Science', iconType: 'globe', image: 'https://i.pravatar.cc/150?img=15' },
  { id: '4', name: 'Dr. P. K. Bargali', degree: 'Scientist \'F\'', role: 'WII, Dehradun', topic: 'Wildlife Conservation', iconType: 'globe', image: 'https://i.pravatar.cc/150?img=16' },
  { id: '5', name: 'Dr. A. Pathak', degree: 'Director', role: 'FRI, Dehradun', topic: 'Forestry Research', iconType: 'book', image: 'https://i.pravatar.cc/150?img=17' },
  { id: '6', name: 'Dr. S. Nautiyal', degree: 'Professor', role: 'HNBG University', topic: 'Botany & Plant Science', iconType: 'book', image: 'https://i.pravatar.cc/150?img=18' },
  { id: '7', name: 'Dr. O. P. Gusain', degree: 'Former Dean', role: 'College of Forestry', topic: 'Silviculture', iconType: 'globe', image: 'https://i.pravatar.cc/150?img=19' },
];

export const PreviousSpeakers = () => {
  const flatListRef = useRef<FlatList<SpeakerProps>>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const ITEM_WIDTH = 160;
  const GAP = 6;
  const SNAP_WIDTH = ITEM_WIDTH + GAP;

  const handlePrev = () => {
    if (currentIndex > 0) {
      const nextIdx = currentIndex - 1;
      setCurrentIndex(nextIdx);
      flatListRef.current?.scrollToOffset({ offset: nextIdx * SNAP_WIDTH, animated: true });
    }
  };

  const handleNext = () => {
    if (currentIndex < PREVIOUS_SPEAKERS.length - 1) {
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);
      flatListRef.current?.scrollToOffset({ offset: nextIdx * SNAP_WIDTH, animated: true });
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      let nextIdx = currentIndex + 1;
      if (nextIdx >= PREVIOUS_SPEAKERS.length) {
        nextIdx = 0; // wrap around to beginning
      }
      setCurrentIndex(nextIdx);
      flatListRef.current?.scrollToOffset({ offset: nextIdx * SNAP_WIDTH, animated: true });
    }, 3000); // Auto scroll every 3 seconds

    return () => clearInterval(timer);
  }, [currentIndex, SNAP_WIDTH]);

  return (
    <View style={s.container}>
      <View style={s.headerRow}>
        <View style={s.headerTitleWrap}>
          <SectionHeader title="PREVIOUS SPEAKERS" />
        </View>
        <View style={s.controlsRow}>
          <TouchableOpacity onPress={handlePrev} style={s.arrowBtn} disabled={currentIndex === 0}>
            <ChevronLeft color={currentIndex === 0 ? '#ccc' : '#133E2B'} size={18} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNext} style={s.arrowBtn} disabled={currentIndex === PREVIOUS_SPEAKERS.length - 1}>
            <ChevronRight color={currentIndex === PREVIOUS_SPEAKERS.length - 1 ? '#ccc' : '#133E2B'} size={18} />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        ref={flatListRef}
        data={PREVIOUS_SPEAKERS}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={s.scrollContent}
        keyExtractor={item => item.id}
        snapToInterval={SNAP_WIDTH}
        decelerationRate="fast"
        renderItem={({ item }) => <SpeakerCard speaker={item} cardWidth={ITEM_WIDTH} />}
        onMomentumScrollEnd={(e) => {
          const contentOffset = e.nativeEvent.contentOffset.x;
          const idx = Math.round(contentOffset / SNAP_WIDTH);
          setCurrentIndex(idx);
        }}
      />

      <View style={s.buttonContainer}>
        <TouchableOpacity style={s.blockButton} activeOpacity={0.8}>
          <Text style={s.blockButtonText}>VIEW MORE SPEAKERS</Text>
          <ArrowRight size={14} color="#133E2B" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    backgroundColor: '#FAF7F2',
    paddingBottom: 6,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    marginBottom: 4,
  },
  headerTitleWrap: {
    flex: 1,
    alignItems: 'flex-start',
  },
  controlsRow: {
    flexDirection: 'row',
    gap: 8,
  },
  arrowBtn: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#EAEAEA',
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  scrollContent: {
    paddingHorizontal: 12,
    gap: 6,
  },
  buttonContainer: {
    marginTop: 2,
    alignItems: 'center',
    paddingHorizontal: 6,
  },
  blockButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 6,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#133E2B',
    gap: 6,
    width: '100%',
  },
  blockButtonText: {
    color: '#133E2B',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});
