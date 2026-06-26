import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export const UpComingEvent = () => {
    const navigation = useNavigation<any>();

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../assets/home/upcoming.png')}
                style={styles.backgroundImage}
                imageStyle={styles.imageStyle}
            >
                <View style={styles.overlay}>
                    <Text style={styles.badgeText}>UPCOMING EVENT</Text>

                    <View style={styles.titleRow}>
                        <View style={styles.titleLeft}>
                            <Text style={styles.titleNumber}>19</Text>
                            <Text style={styles.titleSuperscript}>th</Text>
                        </View>
                        <Text style={styles.titleText}>Arogya Sanghosthi 2027</Text>
                    </View>

                    <View style={styles.bottomRow}>
                        <Text style={styles.subtitle} numberOfLines={1} adjustsFontSizeToFit>
                            Early Bird Registration Open!
                        </Text>
                        <TouchableOpacity 
                            style={styles.button} 
                            activeOpacity={0.8}
                            onPress={() => navigation.navigate('DelegateRegistrationForm')}
                        >
                            <Text style={styles.buttonText}>Register Now</Text>
                            <Ionicons name="arrow-forward" size={14} color="#0F172A" />
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 6,
        paddingVertical: 2,

    },
    backgroundImage: {
        width: '100%',
        borderRadius: 12,
        overflow: 'hidden',
    },
    imageStyle: {
        resizeMode: 'cover',
    },
    overlay: {
        paddingVertical: 3,
        paddingHorizontal: 12,
        backgroundColor: 'rgba(0,0,0,0.1)', // Slight dark overlay just in case text needs contrast
        justifyContent: 'center',
    },
    badgeText: {
        color: '#838A98', // Light gray
        fontSize: 11,
        fontWeight: '600',
        letterSpacing: 1,
        marginBottom: 1,
        textTransform: 'uppercase',
    },
    titleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 2,
    },
    titleLeft: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    titleNumber: {
        color: '#FFFFFF',
        fontSize: 26,
        fontWeight: 'bold',
        fontFamily: 'PlayfairDisplay-Bold',
        fontStyle: 'italic',
        includeFontPadding: false,
        width: 30,
    },
    titleSuperscript: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: 'bold',
        fontFamily: 'PlayfairDisplay-Bold',
        fontStyle: 'italic',
        marginTop: 2,
        includeFontPadding: false,
    },
    titleText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '700',
        marginLeft: 8,
    },
    bottomRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 10,
    },
    subtitle: {
        color: '#F8FAFC',
        fontSize: 12,
        fontWeight: '500',
        flexShrink: 1,
    },
    button: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 14,
        paddingVertical: 6,
        borderRadius: 8,
    },
    buttonText: {
        color: '#0F172A', // Dark navy
        fontSize: 11,
        fontWeight: '700',
        marginRight: 4,
    },
});
