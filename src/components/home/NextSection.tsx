import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const NextSession = () => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.contentRow}>
                    {/* Left Icon Circle */}
                    <View style={styles.iconCircle}>
                        <MaterialCommunityIcons name="calendar-clock-outline" size={30} color="#0B3024" />
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
                            <Ionicons name="person-outline" size={14} color="#9BB883" />
                            <Text style={styles.infoText}>
                                Dr. Vaidya Balendu Prakash
                            </Text>
                            <Text style={styles.infoDot}> • </Text>
                            <Text style={styles.infoText}>Hall A</Text>
                        </View>
                        <View style={styles.timeRow}>
                            <Ionicons name="time-outline" size={14} color="#9BB883" />
                            <Text style={styles.infoText}>
                                10:00 AM – 11:00 AM
                            </Text>
                        </View>
                    </View>
                </View>

                {/* Vertical Divider */}
                <View style={styles.verticalDivider} />

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
        paddingHorizontal: 6,
        paddingVertical: 1,
    },
    card: {
        backgroundColor: '#073220', // Darker rich green
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
    },
    contentRow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconCircle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    middleContent: {
        flex: 1,
    },
    sessionLabel: {
        fontSize: 10,
        fontWeight: '700',
        color: '#9BB883', // Olive/light green
        letterSpacing: 0.5,
        marginBottom: 2,
        textTransform: 'uppercase',
    },
    sessionTitle: {
        color: '#CEDDDE',
        fontSize: 12,
        fontWeight: '600',
        lineHeight: 20,
        marginBottom: 2,
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
        flexWrap: 'wrap',
    },
    timeRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    infoText: {
        color: 'rgba(255,255,255,0.85)',
        fontSize: 10,
        marginLeft: 4,
        flexShrink: 1,
    },
    infoDot: {
        color: 'rgba(255,255,255,0.85)',
        fontSize: 10,
        marginHorizontal: 2,
    },
    verticalDivider: {
        width: 1,
        alignSelf: 'stretch',
        backgroundColor: '#53765A',
        marginHorizontal: 10,
        marginVertical: 4,
    },
    timerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 45,
    },
    timerLabel: {
        color: 'rgba(255,255,255,0.85)',
        fontSize: 10,
    },
    timerValue: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 30,
        lineHeight: 34,
        marginVertical: 2,
    },
});