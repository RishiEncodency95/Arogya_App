import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export const NextSession = () => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.contentRow}>
                    {/* Left Icon Circle */}
                    <View style={styles.iconCircle}>
                        <FontAwesome5 name="calendar-alt" size={20} color="#1a3a2e" />
                    </View>

                    {/* Middle Content */}
                    <View style={styles.middleContent}>
                        <Text style={styles.sessionLabel}>
                            NEXT SESSION
                        </Text>
                        <Text style={styles.sessionTitle}>
                            The Future of Integrative Healthcare
                        </Text>
                        <View style={styles.infoRow}>
                            <Ionicons name="person-outline" size={13} color="rgba(255,255,255,0.6)" />
                            <Text style={styles.infoText}>
                                Dr. Vaidya Balendu Prakash
                            </Text>
                            <Text style={styles.infoDot}> • </Text>
                            <Text style={styles.infoText}>Hall A</Text>
                        </View>
                        <View style={styles.timeRow}>
                            <Ionicons name="time-outline" size={13} color="rgba(255,255,255,0.6)" />
                            <Text style={styles.infoText}>
                                10:00 AM – 11:00 AM
                            </Text>
                        </View>
                    </View>
                </View>

                {/* Right - Timer */}
                <View style={styles.timerContainer}>
                    <Text style={styles.timerLabel}>Starts in</Text>
                    <Text style={styles.timerValue}>
                        25
                    </Text>
                    <Text style={styles.timerLabel}>mins</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 12,
        paddingVertical: 12,
    },
    card: {
        backgroundColor: '#1a3a2e',
        borderRadius: 16,
        paddingHorizontal: 12,
        paddingVertical: 24,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
    },
    contentRow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconCircle: {
        width: 64,
        height: 64,
        borderRadius: 32,
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        padding: 16,
        marginRight: 16,
        backgroundColor: 'rgba(255,255,255,1)',
        borderWidth: 1.5,
        borderColor: 'rgba(255,255,255,0.2)',
    },
    middleContent: {
        flex: 1,
    },
    sessionLabel: {
        fontSize: 10,
        fontWeight: '600',
        letterSpacing: 1.2,
        marginBottom: 4,
        color: '#4ade80',
    },
    sessionTitle: {
        color: 'white',
        fontSize: 14,
        fontWeight: '600',
        lineHeight: 20,
        marginBottom: 8,
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        marginBottom: 4,
    },
    timeRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    infoText: {
        color: 'rgba(255,255,255,0.65)',
        fontSize: 10,
    },
    infoDot: {
        color: 'rgba(255,255,255,0.4)',
        fontSize: 10,
    },
    timerContainer: {
        alignItems: 'center',
        minWidth: 'auto',
    },
    timerLabel: {
        color: 'rgba(255,255,255,0.6)',
        fontSize: 10,
    },
    timerValue: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 25,
    },
});