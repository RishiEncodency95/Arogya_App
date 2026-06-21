import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HERO_IMAGES = [
    require('../../assets/home/homehero.png'),
    require('../../assets/home/homehero1.png'),
    require('../../assets/home/homehero2.png'),
];

export const HomeHero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <ImageBackground
            source={HERO_IMAGES[currentImageIndex]}
            style={styles.container}
            imageStyle={{ resizeMode: 'cover' }}
        >
            {/* Background Overlay to tint image white */}
            <View style={styles.overlay} />

            {/* Left side — content */}
            <View style={styles.content}>

                {/* Welcome pill */}
                <View style={styles.welcomePill}>
                    <Text style={styles.welcomeText}>WELCOME</Text>
                    <Text style={styles.welcomeEmoji}>👏</Text>
                </View>

                {/* Title */}
                <View style={styles.titleRow}>
                    {/* Left: 18th */}
                    <View style={styles.titleLeft}>
                        <Text style={styles.titleNumber}>18</Text>
                        <Text style={styles.titleSuperscript}>th</Text>
                    </View>
                    {/* Right: Arogya & Sanghosthi 2026 */}
                    <View style={styles.titleRight}>
                        <Text style={styles.titleTextTop}>Arogya</Text>
                        <Text style={styles.titleTextBottom}>Sanghosthi 2026</Text>
                    </View>
                </View>

                {/* Subtitle */}
                <View style={styles.subtitleContainer}>
                    <Text style={styles.subtitleText}>
                        Integrating AYUSH & Modern Science{'\n'}for a Healthier Tomorrow
                    </Text>
                </View>

                {/* Meta info */}
                <View style={styles.metaInfoRow}>
                    <View style={styles.metaItem}>
                        <FontAwesome5 name="calendar-alt" size={16} color="#0A4232" />
                        <Text style={styles.metaText}>21 – 23 August 2026</Text>
                    </View>
                    {/* Vertical Divider */}
                    <View style={styles.verticalDivider} />
                    <View style={styles.metaItem}>
                        <Icon name="map-pin" size={16} color="#0A4232" />
                        <Text style={[styles.metaText]}>Pragati Maidan,{'\n'}New Delhi</Text>
                    </View>
                </View>

                {/* Delegate Pass pill */}
                <View style={styles.delegatePill}>
                    <MaterialCommunityIcons name="shield-check" size={16} color="#244E32" style={{ marginRight: 6 }} />
                    <Text style={styles.delegateText}>Delegate Pass Active</Text>
                </View>

                {/* Buttons */}
                <View style={styles.buttonsRow}>
                    <TouchableOpacity style={styles.primaryBtn} activeOpacity={0.85}>
                        <Icon name="grid" size={12} color="#FFFFFF" />
                        <Text style={styles.primaryBtnText}>QR Pass</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.secondaryBtn} activeOpacity={0.85}>
                        <FontAwesome5 name="calendar-alt" size={12} color="#0A4232" />
                        <Text style={styles.secondaryBtnText}>My Schedule</Text>
                    </TouchableOpacity>
                </View>

            </View>

            {/* Carousel dots */}
            <View style={styles.dotsContainer}>
                {HERO_IMAGES.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.dot,
                            index === currentImageIndex ? styles.activeDot : styles.inactiveDot
                        ]}
                    />
                ))}
            </View>

        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 12,
        marginTop: 2,
        marginBottom: 0,
        borderRadius: 16,
        overflow: 'hidden',
        flexDirection: 'row',
    },
    overlay: {
        ...StyleSheet.absoluteFill,
        backgroundColor: 'rgba(255, 255, 255, 0.17)',
        zIndex: 0,
    },
    content: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 16,
        paddingBottom: 12,
        zIndex: 10,
    },
    welcomePill: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 4,
        alignSelf: 'flex-start',
        marginBottom: 8,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    welcomeText: {
        fontSize: 12,
        fontWeight: '800',
        color: '#194D34',
        // letterSpacing: 0.5,
        marginRight: 4,
    },
    welcomeEmoji: {
        fontSize: 12,
    },
    titleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 2,
    },
    titleLeft: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginRight: 6,
    },
    titleNumber: {
        fontSize: 24,
        lineHeight: 42,
        fontWeight: 'bold',
        color: '#005f33',
        fontFamily: 'PlayfairDisplay-Bold',
        fontStyle: 'italic',
        includeFontPadding: false,
        width: 27,
    },
    titleSuperscript: {
        fontSize: 16,
        color: '#005f33',
        fontFamily: 'PlayfairDisplay-Bold',
        fontStyle: 'italic',
        marginTop: 2,
        includeFontPadding: false,

    },
    titleRight: {
        justifyContent: 'center',
    },
    titleTextTop: {
        fontSize: 18,
        fontWeight: '800',
        color: '#0a192f',
        lineHeight: 22,
        includeFontPadding: false,
    },
    titleTextBottom: {
        fontSize: 18,
        fontWeight: '800',
        color: '#0a192f',
        lineHeight: 24,
        includeFontPadding: false,
    },
    subtitleContainer: {
        borderLeftWidth: 2,
        borderLeftColor: '#005f33',
        paddingLeft: 8,
        marginBottom: 10,
        marginTop: 4,
    },
    subtitleText: {
        fontSize: 9,
        color: '#666B72',
        fontWeight: '500',
    },
    metaInfoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
    },
    metaItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    metaText: {
        marginLeft: 4,
        fontSize: 10,
        fontWeight: '700',
        color: '#0a192f',
    },
    verticalDivider: {
        width: 1,
        height: 20,
        backgroundColor: '#000',
        marginHorizontal: 3,
    },
    delegatePill: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#DFE7DE',
        borderRadius: 8,
        paddingHorizontal: 8,
        paddingVertical: 4,
        alignSelf: 'flex-start',
        marginTop: 9,
        marginBottom: 12,
    },
    checkIconWrapper: {
        backgroundColor: '#0A4232',
        borderRadius: 20,
        padding: 2,
        marginRight: 8,
    },
    delegateText: {
        marginLeft: 0,
        fontSize: 11,
        fontWeight: 'bold',
        color: '#244E32',
    },
    buttonsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
        marginBottom: 4
    },
    primaryBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0A4232',
        borderRadius: 8,
        paddingHorizontal: 8,
        paddingVertical: 8,
        marginRight: 10,
    },
    primaryBtnText: {
        fontSize: 9,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 4,
    },
    secondaryBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#e5e7eb',
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 8,
        marginLeft: 2,
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
    },
    secondaryBtnText: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#0A4232',
        marginLeft: 4,
    },
    dotsContainer: {
        position: 'absolute',
        bottom: 16,
        right: 16,
        flexDirection: 'row',
        zIndex: 10,
    },
    dot: {
        height: 8,
        borderRadius: 4,
        marginRight: 8,
    },
    activeDot: {
        width: 16,
        backgroundColor: 'white',
    },
    inactiveDot: {
        width: 8,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
});