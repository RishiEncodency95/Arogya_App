import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const quickItems = [
  { label: 'My Pass', icon: <FontAwesome5 name="id-card" size={22} color="#0B4A33" />, bg: '#F5FCF8' },
  { label: 'Schedule', icon: <FontAwesome5 name="calendar-alt" size={22} color="#154A8F" />, bg: '#F5F8FF' },
  { label: 'Speakers', icon: <Ionicons name="mic" size={22} color="#7D23A8" />, bg: '#FCF5FF' },
  { label: 'Paper\nPresentation', icon: <MaterialCommunityIcons name="file-document-edit" size={22} color="#D88A11" />, bg: '#FFFBF2' },
  { label: 'Poster\nPresentation', icon: <MaterialCommunityIcons name="presentation" size={22} color="#C41662" />, bg: '#FFF5FA' },
  { label: 'Networking', icon: <Ionicons name="people" size={22} color="#157B85" />, bg: '#F2FAFB' },
];

export const QuickAccess = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Quick Access</Text>
        <View style={styles.headerLine} />
        <TouchableOpacity style={styles.viewAllButton} activeOpacity={0.7}>
          <Text style={styles.viewAllText}>View All</Text>
          <Ionicons name="chevron-forward" size={14} color="#374151" style={{ marginLeft: 2 }} />
        </TouchableOpacity>
      </View>

      {/* Grid */}
      <View style={styles.gridContainer}>
        {quickItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.card, { backgroundColor: item.bg }]}
            activeOpacity={0.7}
          >
            <View style={styles.iconContainer}>
              {item.icon}
            </View>
            <Text style={styles.label}>
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 6,
    paddingHorizontal: 6,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#194D34',
  },
  headerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E5E7EB',
    marginHorizontal: 12,
  },
  viewAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewAllText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#374151',
  },
  gridContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 6,
    flexWrap: 'wrap',
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    // paddingHorizontal: 2,
    // paddingVertical: 4,
    width: 58,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
    height: 30,
    width: 30,
    borderRadius: 22,
  },
  label: {
    fontSize: 8,
    textAlign: 'center',
    color: '#1f2937',
    fontWeight: '600',
    lineHeight: 15,
    marginBottom: 2
  },
});