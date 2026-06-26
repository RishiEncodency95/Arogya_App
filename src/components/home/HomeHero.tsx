import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet, FlatList, Dimensions, Animated } from 'react-native';
import { Calendar, MapPin, ArrowRight, User } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');
const CAROUSEL_WIDTH = width - 12; // marginHorizontal 6 on both sides

const SLIDES = [
    {
        id: '0',
        img: require('../../assets/banner/hero2.webp'),
        theme: 'gold',
        accentHex: '#b08735',
        textHex: '#063e26',
        iconHex: '#a07b30',
        subtitle: "India's Premier Conference on\nIntegrated Healthcare, AYUSH,\nPharma, Wellness & Innovation",
        btn1: { type: 'gold', label: 'REGISTER AS DELEGATE', textCol: '#0b2912', hasArrow: true },
        btn2: { type: 'darkgreen', label: 'BECOME A SPEAKER', textCol: '#FFF', hasUser: true },
    },
    {
        id: '1',
        img: require('../../assets/banner/hero3.webp'),
        theme: 'blue',
        accentHex: '#0a2c53',
        textHex: '#043055',
        iconHex: '#0a2c53',
        subtitle: "Advancing Science. Enhancing Lives.\nBuilding the Future of Medicine.",
        btn1: { type: 'blue', label: 'EXPLORE SESSIONS', textCol: '#FFF', hasArrow: true },
        btn2: { type: 'gold', label: 'REGISTER NOW', textCol: '#0b2912', hasUser: true },
    },
    {
        id: '2',
        img: require('../../assets/banner/hero4.webp'),
        theme: 'green',
        accentHex: '#063e26',
        textHex: '#063e26',
        iconHex: '#a07b30',
        subtitle: "Reviving Ancient Wisdom for\na Healthier Tomorrow",
        btn1: { type: 'blue', label: 'EXPLORE SESSIONS', textCol: '#FFF', hasArrow: true },
        btn2: { type: 'gold', label: 'REGISTER NOW', textCol: '#0b2912', hasUser: true },
    },
    {
        id: '3',
        img: require('../../assets/banner/hero5.webp'),
        theme: 'green',
        accentHex: '#063e26',
        textHex: '#063e26',
        iconHex: '#a07b30',
        subtitle: "Innovating Today for a\nHealthier Tomorrow",
        btn1: { type: 'blue', label: 'EXPLORE SESSIONS', textCol: '#FFF', hasArrow: true },
        btn2: { type: 'gold', label: 'REGISTER NOW', textCol: '#0b2912', hasUser: true },
    },
];

export const HomeHero = () => {
    const navigation = useNavigation<any>();
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef<FlatList>(null);
    const progressAnim = useRef(new Animated.Value(0)).current;

    // Carousel Timer
    useEffect(() => {
        const interval = setInterval(() => {
            if (currentIndex === SLIDES.length - 1) {
                // Instantly snap back to the first slide without a rewind animation
                flatListRef.current?.scrollToIndex({ index: 0, animated: false });
                setCurrentIndex(0);
            } else {
                const nextIndex = currentIndex + 1;
                flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
                setCurrentIndex(nextIndex);
            }
        }, 5000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    // Progress Bar Animation
    useEffect(() => {
        progressAnim.setValue(0);
        Animated.timing(progressAnim, {
            toValue: 1,
            duration: 5000,
            useNativeDriver: false,
        }).start();
    }, [currentIndex]);

    const handleScroll = (event: any) => {
        const x = event.nativeEvent.contentOffset.x;
        const index = Math.round(x / CAROUSEL_WIDTH);
        if (index !== currentIndex && index >= 0 && index < SLIDES.length) {
            setCurrentIndex(index);
        }
    };

    const handleBtnPress = (label: string) => {
        if (label.includes('REGISTER')) {
            navigation.navigate('DelegateRegistrationForm');
        }
    };

    const renderSlide = ({ item }: { item: typeof SLIDES[0] }) => {
        return (
            <View style={{ width: CAROUSEL_WIDTH, overflow: 'hidden' }}>
                <ImageBackground
                    source={item.img}
                    style={s.slideBackground}
                    imageStyle={{ resizeMode: 'cover' }}
                >
                    {/* Overlay to ensure text readability */}
                    <View style={s.overlay} />

                    <View style={s.content}>
                        {/* Edition Tag */}
                        <View style={s.editionRow}>
                            <View style={[s.editionLine, { backgroundColor: item.accentHex }]} />
                            <Text style={[s.editionText, { color: item.accentHex }]}>18TH EDITION OF</Text>
                            <View style={[s.editionLine, { backgroundColor: item.accentHex }]} />
                        </View>

                        {/* Title / Logo replacement */}
                        <View style={s.logoContainer}>
                            <Text style={s.logoTextTop}>Arogya</Text>
                            <Text style={s.logoTextBottom}>Sanghosthi 2026</Text>
                        </View>

                        {/* Subtitle */}
                        <Text style={[s.subtitleText, { color: item.textHex }]}>
                            {item.subtitle}
                        </Text>

                        {/* Date & Location */}
                        <View style={s.metaContainer}>
                            <View style={s.metaItem}>
                                <Calendar size={12} color={item.iconHex} />
                                <Text style={s.metaText}>21-23 August 2026</Text>
                            </View>
                            <Text style={[s.metaSeparator, { color: item.accentHex }]}>|</Text>
                            <View style={s.metaItem}>
                                <MapPin size={12} color={item.iconHex} />
                                <Text style={s.metaText}>Pragati Maidan, New Delhi</Text>
                            </View>
                        </View>

                        {/* Buttons */}
                        <View style={s.buttonsRow}>
                            <TouchableOpacity 
                                activeOpacity={0.8} 
                                style={[s.btn, s[`btn_${item.btn1.type}` as 'btn_gold' | 'btn_blue' | 'btn_darkgreen']]}
                                onPress={() => handleBtnPress(item.btn1.label)}
                            >
                                <Text style={[s.btnText, { color: item.btn1.textCol }]}>{item.btn1.label}</Text>
                                {item.btn1.hasArrow && <ArrowRight size={12} color={item.btn1.textCol} style={{ marginLeft: 4 }} />}
                            </TouchableOpacity>
            
                            <TouchableOpacity 
                                activeOpacity={0.8} 
                                style={[s.btn, s[`btn_${item.btn2.type}` as 'btn_gold' | 'btn_blue' | 'btn_darkgreen']]}
                                onPress={() => handleBtnPress(item.btn2.label)}
                            >
                                {item.btn2.hasUser && <User size={12} color={item.btn2.textCol} style={{ marginRight: 4 }} />}
                                <Text style={[s.btnText, { color: item.btn2.textCol }]}>{item.btn2.label}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    };

    return (
        <View style={s.container}>
            <FlatList
                ref={flatListRef}
                data={SLIDES}
                keyExtractor={(item) => item.id}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={handleScroll}
                renderItem={renderSlide}
            />

            {/* Dots */}
            <View style={s.dotsContainer}>
                {SLIDES.map((_, i) => (
                    <View key={i} style={[s.dot, i === currentIndex ? s.activeDot : null]} />
                ))}
            </View>

            {/* Progress Bar */}
            <View style={s.progressContainer}>
                <Animated.View 
                    style={[
                        s.progressBar, 
                        { width: progressAnim.interpolate({ inputRange: [0, 1], outputRange: ['0%', '100%'] }) }
                    ]} 
                />
            </View>
        </View>
    );
};

const s = StyleSheet.create({
    container: {
        marginHorizontal: 6,
        marginTop: 6,
        borderRadius: 16,
        overflow: 'hidden',
        height: 240,
        backgroundColor: '#FFF',
        elevation: 4,
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 10,
    },
    slideBackground: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
    },
    overlay: {
        ...StyleSheet.absoluteFill,
        backgroundColor: 'rgba(255, 255, 255, 0.0)', 
    },
    content: {
        flex: 1,
        padding: 16,
        paddingTop: 20,
        justifyContent: 'center',
        zIndex: 10,
    },
    editionRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    editionLine: {
        height: 1.5,
        width: 30,
    },
    editionText: {
        fontSize: 9,
        fontWeight: '900',
        marginHorizontal: 8,
        letterSpacing: 1.2,
    },
    logoContainer: {
        marginBottom: 8,
    },
    logoTextTop: {
        fontSize: 22,
        fontWeight: '900',
        color: '#0a192f',
        lineHeight: 24,
    },
    logoTextBottom: {
        fontSize: 22,
        fontWeight: '900',
        color: '#0a192f',
        lineHeight: 24,
    },
    subtitleText: {
        fontSize: 12,
        fontWeight: '700',
        lineHeight: 18,
        marginBottom: 12,
        textShadowColor: 'rgba(255, 255, 255, 0.95)',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 10,
    },
    metaContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    metaItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    metaText: {
        fontSize: 9,
        fontWeight: '800',
        color: '#0a192f',
        marginLeft: 4,
        textTransform: 'uppercase',
    },
    metaSeparator: {
        marginHorizontal: 6,
        fontSize: 12,
        opacity: 0.5,
    },
    buttonsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 20,
        borderWidth: 1.5,
        borderColor: '#FFF',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 2,
    },
    btnText: {
        fontSize: 8,
        fontWeight: '900',
        letterSpacing: 0.5,
    },
    btn_gold: {
        backgroundColor: '#f5c842', 
    },
    btn_blue: {
        backgroundColor: '#032e55',
    },
    btn_darkgreen: {
        backgroundColor: '#063e26',
    },
    dotsContainer: {
        position: 'absolute',
        bottom: 12,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        zIndex: 10,
    },
    dot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        marginHorizontal: 3,
        borderWidth: 0.5,
        borderColor: 'rgba(0,0,0,0.2)',
    },
    activeDot: {
        width: 14,
        backgroundColor: '#FFF',
    },
    progressContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 3,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        zIndex: 20,
    },
    progressBar: {
        height: '100%',
        backgroundColor: '#f5c842',
    },
});