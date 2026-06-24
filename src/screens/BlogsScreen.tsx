import React from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { BlogHeader } from '../components/blogs/BlogHeader';
import { BlogCategories } from '../components/blogs/BlogCategories';
import { FeaturedStory } from '../components/blogs/FeaturedStory';
import { LatestArticles } from '../components/blogs/LatestArticles';
import { BlogWidgets } from '../components/blogs/BlogWidgets';
import { QuotesSection } from '../components/blogs/QuotesSection';
import { StatsBanner } from '../components/blogs/StatsBanner';
import { BlogNewsletter } from '../components/blogs/BlogNewsletter';

export const BlogsScreen = () => {
  return (
    <SafeAreaView style={s.safeArea}>

      <ScrollView 
        contentContainerStyle={s.scrollContent} 
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        <BlogHeader />
        <BlogCategories />
        <FeaturedStory />
        <LatestArticles />
        <BlogWidgets />
        <QuotesSection />
        <StatsBanner />
        <BlogNewsletter />
      </ScrollView>
    </SafeAreaView>
  );
};

const s = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  scrollContent: {
    flexGrow: 1,
    backgroundColor: '#F9FAFB',
  },
});
