import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
} from 'react-native';
import Svg, { Path, Rect, Circle, Line, Polyline } from 'react-native-svg';

// --- Icons ---

const PaperIcon = () => (
    <Svg width={28} height={28} viewBox="0 0 24 24" fill="none">
        <Path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="#2E7D32" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
        <Polyline points="14 2 14 8 20 8" stroke="#2E7D32" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
        <Line x1="16" y1="13" x2="8" y2="13" stroke="#2E7D32" strokeWidth={1.8} strokeLinecap="round" />
        <Line x1="16" y1="17" x2="8" y2="17" stroke="#2E7D32" strokeWidth={1.8} strokeLinecap="round" />
        <Polyline points="10 9 9 9 8 9" stroke="#2E7D32" strokeWidth={1.8} strokeLinecap="round" />
        {/* Pencil overlay */}
        <Path d="M17.5 17.5l1.5-1.5-2-2-1.5 1.5v1h1v1z" fill="#2E7D32" />
    </Svg>
);

const PosterIcon = () => (
    <Svg width={28} height={28} viewBox="0 0 24 24" fill="none">
        {/* Easel frame */}
        <Rect x="3" y="3" width="18" height="13" rx="2" stroke="#5B4BD5" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
        {/* Image mountain */}
        <Path d="M3 13l4-4 4 4 3-3 4 3" stroke="#5B4BD5" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
        {/* Sun */}
        <Circle cx="8" cy="8" r="1.5" fill="#5B4BD5" />
        {/* Legs */}
        <Line x1="12" y1="16" x2="12" y2="21" stroke="#5B4BD5" strokeWidth={1.8} strokeLinecap="round" />
        <Line x1="9" y1="21" x2="15" y2="21" stroke="#5B4BD5" strokeWidth={1.8} strokeLinecap="round" />
    </Svg>
);

const CertificateIcon = () => (
    <Svg width={28} height={28} viewBox="0 0 24 24" fill="none">
        {/* Document */}
        <Rect x="3" y="3" width="14" height="18" rx="2" stroke="#B45309" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
        <Line x1="7" y1="8" x2="13" y2="8" stroke="#B45309" strokeWidth={1.5} strokeLinecap="round" />
        <Line x1="7" y1="11" x2="13" y2="11" stroke="#B45309" strokeWidth={1.5} strokeLinecap="round" />
        <Line x1="7" y1="14" x2="10" y2="14" stroke="#B45309" strokeWidth={1.5} strokeLinecap="round" />
        {/* Medal / ribbon */}
        <Circle cx="18" cy="18" r="4" stroke="#B45309" strokeWidth={1.8} fill="none" />
        <Path d="M15.5 21.5L14 23l2-0.5L17.5 24 18 22" stroke="#B45309" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M20.5 21.5L22 23l-2-0.5L18.5 24 18 22" stroke="#B45309" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
);

const ArrowRight = ({ color }: { color: string }) => (
    <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
        <Path d="M5 12h14M13 6l6 6-6 6" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
);

// --- Leaf SVG decorations ---

const LeafGreen = () => (
    <Svg width={90} height={120} viewBox="0 0 90 120" style={styles.leafDecoration}>
        <Path
            d="M45 110 C45 110 10 80 15 45 C20 15 45 5 45 5 C45 5 70 15 75 45 C80 80 45 110 45 110Z"
            stroke="#A8C5A0"
            strokeWidth={1.2}
            fill="none"
            opacity={0.5}
        />
        <Path d="M45 110 C45 60 45 5 45 5" stroke="#A8C5A0" strokeWidth={1} fill="none" opacity={0.5} />
        <Path d="M45 80 C35 65 18 58 18 58" stroke="#A8C5A0" strokeWidth={0.8} fill="none" opacity={0.4} />
        <Path d="M45 65 C55 50 72 43 72 43" stroke="#A8C5A0" strokeWidth={0.8} fill="none" opacity={0.4} />
        <Path d="M45 50 C35 38 20 33 20 33" stroke="#A8C5A0" strokeWidth={0.8} fill="none" opacity={0.4} />
        <Path d="M45 35 C55 25 68 22 68 22" stroke="#A8C5A0" strokeWidth={0.8} fill="none" opacity={0.4} />
    </Svg>
);

const LeafPurple = () => (
    <Svg width={80} height={110} viewBox="0 0 90 120" style={styles.leafDecoration}>
        <Path
            d="M45 110 C45 110 10 80 15 45 C20 15 45 5 45 5 C45 5 70 15 75 45 C80 80 45 110 45 110Z"
            stroke="#B8A4D8"
            strokeWidth={1.2}
            fill="none"
            opacity={0.5}
        />
        <Path d="M45 110 C45 60 45 5 45 5" stroke="#B8A4D8" strokeWidth={1} fill="none" opacity={0.5} />
        <Path d="M45 80 C35 65 18 58 18 58" stroke="#B8A4D8" strokeWidth={0.8} fill="none" opacity={0.4} />
        <Path d="M45 65 C55 50 72 43 72 43" stroke="#B8A4D8" strokeWidth={0.8} fill="none" opacity={0.4} />
        <Path d="M45 50 C35 38 20 33 20 33" stroke="#B8A4D8" strokeWidth={0.8} fill="none" opacity={0.4} />
        <Path d="M45 35 C55 25 68 22 68 22" stroke="#B8A4D8" strokeWidth={0.8} fill="none" opacity={0.4} />
    </Svg>
);

const LeafPeach = () => (
    <Svg width={85} height={115} viewBox="0 0 90 120" style={styles.leafDecoration}>
        <Path
            d="M45 110 C45 110 10 80 15 45 C20 15 45 5 45 5 C45 5 70 15 75 45 C80 80 45 110 45 110Z"
            stroke="#D4A878"
            strokeWidth={1.2}
            fill="none"
            opacity={0.45}
        />
        <Path d="M45 110 C45 60 45 5 45 5" stroke="#D4A878" strokeWidth={1} fill="none" opacity={0.45} />
        <Path d="M45 80 C35 65 18 58 18 58" stroke="#D4A878" strokeWidth={0.8} fill="none" opacity={0.35} />
        <Path d="M45 65 C55 50 72 43 72 43" stroke="#D4A878" strokeWidth={0.8} fill="none" opacity={0.35} />
        <Path d="M45 50 C35 38 20 33 20 33" stroke="#D4A878" strokeWidth={0.8} fill="none" opacity={0.35} />
        <Path d="M45 35 C55 25 68 22 68 22" stroke="#D4A878" strokeWidth={0.8} fill="none" opacity={0.35} />
    </Svg>
);

// --- Card data ---

const cards = [
    {
        id: 'paper',
        bg: '#E8F5E9',
        iconBg: '#FFFFFF',
        Icon: PaperIcon,
        Leaf: LeafGreen,
        title: 'Paper\nPresentation',
        subtitle: 'Share Your Research',
        btnLabel: 'Submit Paper',
        btnBorderColor: '#2E7D32',
        btnTextColor: '#2E7D32',
    },
    {
        id: 'poster',
        bg: '#EDE7F6',
        iconBg: '#FFFFFF',
        Icon: PosterIcon,
        Leaf: LeafPurple,
        title: 'Poster\nPresentation',
        subtitle: 'Showcase Your Work',
        btnLabel: 'Submit Poster',
        btnBorderColor: '#5B4BD5',
        btnTextColor: '#5B4BD5',
    },
    {
        id: 'cert',
        bg: '#FFF3E0',
        iconBg: '#FFFFFF',
        Icon: CertificateIcon,
        Leaf: LeafPeach,
        title: 'My\nCertificates',
        subtitle: 'Download Your Certificates',
        btnLabel: 'View Certificates',
        btnBorderColor: '#B45309',
        btnTextColor: '#B45309',
    },
];

// --- Main Component ---

export const Presentation = () => {
    return (
        <View style={styles.container}>
            {cards.map((card) => {
                const { Icon, Leaf } = card;
                return (
                    <View key={card.id} style={[styles.card, { backgroundColor: card.bg }]}>
                        {/* Leaf decoration top-right */}
                        <View style={styles.leafWrapper} pointerEvents="none">
                            <Leaf />
                        </View>

                        {/* Icon circle */}
                        <View style={[styles.iconCircle, { backgroundColor: card.iconBg }]}>
                            <Icon />
                        </View>

                        {/* Text */}
                        <View style={styles.textContainer}>
                            <Text style={styles.cardTitle}>{card.title}</Text>
                            <Text style={styles.cardSubtitle} numberOfLines={1}>{card.subtitle}</Text>
                        </View>

                        {/* Button */}
                        <TouchableOpacity
                            style={[styles.btn, { borderColor: card.btnBorderColor }]}
                            activeOpacity={0.75}
                        >
                            <Text style={[styles.btnText, { color: card.btnTextColor }]}>
                                {card.btnLabel}
                            </Text>
                            <View style={styles.btnArrow}>
                                <ArrowRight color={card.btnTextColor} />
                            </View>
                        </TouchableOpacity>
                    </View>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 6,
        paddingVertical: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 4,
    },
    card: {
        flex: 1,
        borderRadius: 16,
        padding: 10,
        paddingTop: 12,
        overflow: 'hidden',
        position: 'relative',
        minHeight: 160,
        justifyContent: 'space-between',
    },
    leafWrapper: {
        position: 'absolute',
        right: -15,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        opacity: 0.9,
    },
    leafDecoration: {
        transform: [{ scale: 0.8 }],
    },
    iconCircle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 0,
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
    },
    textContainer: {
        marginBottom: 0,
    },
    cardTitle: {
        fontSize: 13,
        fontWeight: '700',
        color: '#1A1A2E',
        lineHeight: 18,
        marginBottom: 2,
    },
    cardSubtitle: {
        fontSize: 9,
        color: '#6B7280',
        fontWeight: '500',
    },
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 50,
        paddingVertical: 4,
        paddingHorizontal: 8,
        alignSelf: 'flex-start',
        backgroundColor: 'transparent',
    },
    btnText: {
        fontSize: 9,
        fontWeight: '600',
    },
    btnArrow: {
        marginLeft: 2,
        transform: [{ scale: 0.8 }],
    },
});