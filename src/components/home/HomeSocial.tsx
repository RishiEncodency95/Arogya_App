import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export const HomeSocial = () => {
    return (
        <View style={styles.scrollContainer}>
            {/* Card 1: Stay Connected */}
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Stay Connected</Text>
                
                <View style={styles.socialGrid}>
                    <TouchableOpacity style={[styles.socialIcon, { backgroundColor: '#1877F2' }]} activeOpacity={0.8}>
                        <FontAwesome5 name="facebook-f" size={12} color="#FFF" />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.socialIcon, { backgroundColor: '#E1306C' }]} activeOpacity={0.8}>
                        <FontAwesome5 name="instagram" size={14} color="#FFF" />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.socialIcon, { backgroundColor: '#0A66C2' }]} activeOpacity={0.8}>
                        <FontAwesome5 name="linkedin-in" size={12} color="#FFF" />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.socialIcon, { backgroundColor: '#FF0000' }]} activeOpacity={0.8}>
                        <FontAwesome5 name="youtube" size={10} color="#FFF" />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.socialIcon, { backgroundColor: '#25D366' }]} activeOpacity={0.8}>
                        <FontAwesome5 name="whatsapp" size={14} color="#FFF" />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.socialIcon, { backgroundColor: '#000000' }]} activeOpacity={0.8}>
                        <Text style={styles.xIconText}>𝕏</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>Follow Us</Text>
                    <Ionicons name="chevron-forward" size={10} color="#1F2937" />
                </View>
            </View>

            {/* Card 2: Notifications */}
            <View style={styles.card}>
                <View style={styles.headerRow}>
                    <Text style={[styles.cardTitle, { marginBottom: 0 }]}>Notifications</Text>
                    <TouchableOpacity activeOpacity={0.7}>
                        <Text style={styles.viewAllText}>View All</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.notificationList}>
                    {/* Item 1 */}
                    <View style={styles.notifItem}>
                        <View style={[styles.notifIconCircle, { backgroundColor: '#EF4444' }]}>
                            <Ionicons name="notifications" size={12} color="#FFF" />
                        </View>
                        <View style={styles.notifContent}>
                            <View style={styles.notifTitleRow}>
                                <Text style={styles.notifTitle} numberOfLines={1}>Hall Change</Text>
                                <Text style={styles.notifTime}>10m</Text>
                            </View>
                            <Text style={styles.notifDesc} numberOfLines={2}>Session in Hall B moved to Hall C</Text>
                        </View>
                    </View>
                    
                    {/* Item 2 */}
                    <View style={styles.notifItem}>
                        <View style={[styles.notifIconCircle, { backgroundColor: '#F59E0B' }]}>
                            <Ionicons name="person" size={12} color="#FFF" />
                        </View>
                        <View style={styles.notifContent}>
                            <View style={styles.notifTitleRow}>
                                <Text style={styles.notifTitle} numberOfLines={1}>Speaker</Text>
                                <Text style={styles.notifTime}>30m</Text>
                            </View>
                            <Text style={styles.notifDesc} numberOfLines={2}>Dr. Ritu will be joining today.</Text>
                        </View>
                    </View>

                    {/* Item 3 */}
                    <View style={styles.notifItem}>
                        <View style={[styles.notifIconCircle, { backgroundColor: '#10B981' }]}>
                            <Ionicons name="people" size={12} color="#FFF" />
                        </View>
                        <View style={styles.notifContent}>
                            <View style={styles.notifTitleRow}>
                                <Text style={styles.notifTitle} numberOfLines={1}>Lunch</Text>
                                <Text style={styles.notifTime}>1h</Text>
                            </View>
                            <Text style={styles.notifDesc} numberOfLines={2}>Lunch from 01:00 PM onwards.</Text>
                        </View>
                    </View>
                </View>
            </View>

            {/* Card 3: Need Help? */}
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Need Help?</Text>
                
                <View style={styles.helpList}>
                    {/* Help Item 1 */}
                    <TouchableOpacity style={styles.helpItem} activeOpacity={0.7}>
                        <View style={styles.helpIconPlaceholder}>
                            <MaterialCommunityIcons name="headset" size={18} color="#047857" />
                        </View>
                        <View style={styles.helpContent}>
                            <Text style={styles.helpTitle} numberOfLines={1}>Customer Care</Text>
                            <Text style={styles.helpSubtitle} numberOfLines={1}>+91 9876543210</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={12} color="#6B7280" />
                    </TouchableOpacity>

                    <View style={styles.divider} />

                    {/* Help Item 2 */}
                    <TouchableOpacity style={styles.helpItem} activeOpacity={0.7}>
                        <View style={styles.helpIconPlaceholder}>
                            <View style={styles.whatsappCircle}>
                                <FontAwesome5 name="whatsapp" size={12} color="#FFF" />
                            </View>
                        </View>
                        <View style={styles.helpContent}>
                            <Text style={styles.helpTitle} numberOfLines={1}>WhatsApp</Text>
                            <Text style={styles.helpSubtitle} numberOfLines={1}>+91 9876543210</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={12} color="#6B7280" />
                    </TouchableOpacity>
                </View>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>View All</Text>
                    <Ionicons name="chevron-forward" size={10} color="#1F2937" />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        paddingHorizontal: 6,
        paddingVertical: 6,
        gap: 6,
        flexDirection: 'row',
    },
    card: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 8,
        borderWidth: 1,
        borderColor: '#F3F4F6',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.04,
        shadowRadius: 6,
        elevation: 2,
        minHeight: 150,
        justifyContent: 'space-between',
    },
    cardTitle: {
        fontSize: 10,
        fontWeight: '800',
        color: '#1F2937',
        marginBottom: 10,
    },
    // Stay Connected
    socialGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 4,
        flex: 1,
    },
    socialIcon: {
        width: 20,
        height: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 2,
    },
    xIconText: {
        color: '#FFF',
        fontSize: 12,
        fontWeight: '600',
    },
    // Notifications
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    viewAllText: {
        fontSize: 8,
        color: '#4B5563',
        fontWeight: '600',
    },
    notificationList: {
        flex: 1,
        gap: 6,
    },
    notifItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 6,
    },
    notifIconCircle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 2,
    },
    notifContent: {
        flex: 1,
    },
    notifTitleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 0,
    },
    notifTitle: {
        fontSize: 8,
        fontWeight: '700',
        color: '#1F2937',
        flex: 1,
    },
    notifTime: {
        fontSize: 7,
        color: '#9CA3AF',
        fontWeight: '500',
        marginLeft: 2,
    },
    notifDesc: {
        fontSize: 7,
        color: '#6B7280',
        lineHeight: 10,
    },
    // Need Help
    helpList: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 0,
    },
    helpItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 4,
        gap: 4,
    },
    helpIconPlaceholder: {
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    whatsappCircle: {
        width: 18,
        height: 18,
        borderRadius: 9,
        backgroundColor: '#25D366',
        alignItems: 'center',
        justifyContent: 'center',
    },
    helpContent: {
        flex: 1,
    },
    helpTitle: {
        fontSize: 8,
        fontWeight: '600',
        color: '#1F2937',
        marginBottom: 1,
    },
    helpSubtitle: {
        fontSize: 7,
        color: '#6B7280',
    },
    divider: {
        height: 1,
        backgroundColor: '#E5E7EB',
        marginVertical: 2,
        width: '100%',
    },
    // Shared Footer
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#E5E7EB',
        paddingTop: 8,
        marginTop: 4,
    },
    footerText: {
        fontSize: 9,
        fontWeight: '600',
        color: '#1F2937',
        marginRight: 4,
    },
});
