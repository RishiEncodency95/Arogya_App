import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ArrowRight, Calendar, Bookmark, FolderOpen } from 'lucide-react-native';

const CATEGORIES = [
  { name: 'All Updates', count: '24' },
  { name: 'News & Announcements', count: '12' },
  { name: 'Conference Highlights', count: '09' },
  { name: 'Research & Innovations', count: '15' },
  { name: 'Health & Wellness', count: '11' },
];

const EVENTS = [
  { day: '10', month: 'OCT', title: 'Pre-Conference Workshop', time: '09:00 AM - 05:00 PM' },
  { day: '11', month: 'OCT', title: 'Arogya Sanghosthi Day 1', time: '09:00 AM - 06:00 PM' },
];

export const BlogWidgets = () => {
  return (
    <View style={s.container}>
      
      {/* Categories Widget */}
      <View style={s.widget}>
        <View style={s.widgetHeader}>
          <Text style={s.widgetTitle}>Categories</Text>
          <TouchableOpacity style={s.viewAllBtn}>
            <Text style={s.viewAllText}>VIEW ALL</Text>
            <ArrowRight size={10} color="#0A2518" />
          </TouchableOpacity>
        </View>

        {CATEGORIES.map((cat, index) => (
          <View key={index} style={s.catItem}>
            <View style={s.catLeft}>
              <FolderOpen size={14} color="#064E3B" style={s.catIcon} />
              <Text style={s.catName}>{cat.name}</Text>
            </View>
            <Text style={s.catCount}>{cat.count}</Text>
          </View>
        ))}
      </View>

      {/* Popular Posts Widget */}
      <View style={s.widget}>
        <View style={s.widgetHeader}>
          <Text style={s.widgetTitle}>Popular Posts</Text>
          <TouchableOpacity style={s.viewAllBtn}>
            <Text style={s.viewAllText}>VIEW ALL</Text>
            <ArrowRight size={10} color="#0A2518" />
          </TouchableOpacity>
        </View>

        <View style={s.postItem}>
          <Image source={{ uri: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=200' }} style={s.postImg} />
          <View style={s.postInfo}>
            <Text style={s.postTitle} numberOfLines={2}>Arogya Sanghosthi 2025: Key Takeaways</Text>
            <Text style={s.postDate}>28 Apr 2026</Text>
          </View>
        </View>
      </View>

      {/* Upcoming Events Widget */}
      <View style={s.widget}>
        <View style={s.widgetHeader}>
          <Text style={s.widgetTitle}>Upcoming Events</Text>
          <TouchableOpacity style={s.viewAllBtn}>
            <Text style={s.viewAllText}>VIEW ALL EVENTS</Text>
            <ArrowRight size={10} color="#0A2518" />
          </TouchableOpacity>
        </View>

        {EVENTS.map((event, index) => (
          <View key={index} style={s.eventItem}>
            <View style={s.eventDateBox}>
              <Text style={s.eventDay}>{event.day}</Text>
              <Text style={s.eventMonth}>{event.month}</Text>
            </View>
            <View style={s.eventInfo}>
              <Text style={s.eventTitle}>{event.title}</Text>
              <Text style={s.eventLocation}>📍 Pragati Maidan, New Delhi</Text>
              <Text style={s.eventTime}>🕒 {event.time}</Text>
            </View>
          </View>
        ))}
      </View>

    </View>
  );
};

const s = StyleSheet.create({
  container: {
    paddingHorizontal: 6,
    marginTop: 6,
    gap: 6,
  },
  widget: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  widgetHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  widgetTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: '#111827',
  },
  viewAllBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  viewAllText: {
    fontSize: 9,
    fontWeight: '800',
    color: '#0A2518',
  },
  catItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  catLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  catIcon: {
    marginRight: 8,
  },
  catName: {
    fontSize: 12,
    fontWeight: '700',
    color: '#111827',
  },
  catCount: {
    fontSize: 10,
    fontWeight: '800',
    color: '#F97316',
    backgroundColor: '#FFF3E0',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  postItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  postImg: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  postInfo: {
    flex: 1,
  },
  postTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 4,
  },
  postDate: {
    fontSize: 10,
    color: '#6B7280',
  },
  eventItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 6,
  },
  eventDateBox: {
    backgroundColor: '#F8F9F5',
    borderRadius: 8,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  eventDay: {
    fontSize: 14,
    fontWeight: '800',
    color: '#0A2518',
  },
  eventMonth: {
    fontSize: 10,
    fontWeight: '700',
    color: '#4B5563',
  },
  eventInfo: {
    flex: 1,
  },
  eventTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 2,
  },
  eventLocation: {
    fontSize: 10,
    color: '#4B5563',
    marginBottom: 2,
  },
  eventTime: {
    fontSize: 10,
    color: '#F97316',
    fontWeight: '600',
  },
});
