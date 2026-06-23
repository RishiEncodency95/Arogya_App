import React from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { DelegateHero } from '../components/delegateReg/DelegateHero';
import { PowerfulThemes } from '../components/delegateReg/PowerfulThemes';
import { ConferenceThemes } from '../components/delegateReg/ConferenceThemes';
import { WhyAttend } from '../components/delegateReg/WhyAttend';
import { DelegateEminentSpeakers } from '../components/delegateReg/DelegateEminentSpeakers';
import { DelegatePaper } from '../components/delegateReg/DelegatePaper';
import { OrganisingCommittee } from '../components/delegateReg/OrganisingCommittee';

export const DelegateRegScreen = () => {
    return (
        <SafeAreaView style={s.safeArea}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={s.scrollContent}>
                <DelegateHero />
                <PowerfulThemes />
                <ConferenceThemes />

                {/* These two stack on mobile */}
                <View style={s.rowWrapper}>
                    <WhyAttend />
                    <DelegateEminentSpeakers />
                </View>

                <View style={s.rowWrapper}>
                    <DelegatePaper />
                    <OrganisingCommittee />
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};

const s = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#FAF7F2',
    },
    scrollContent: {
        paddingBottom: 20,
    },
    rowWrapper: {
        // We keep them stacked because on mobile side-by-side is too squished.
        flexDirection: 'column',
    },
});
