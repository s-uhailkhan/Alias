import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';

export default function SuhailProfile() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0f172a" />
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Header Banner */}
        <View style={styles.banner}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatarText}>SK</Text>
          </View>
          <Text style={styles.name}>Suhail Khan</Text>
          <Text style={styles.role}>Future Full Stack Developer</Text>
          <View style={styles.locationBadge}>
            <Text style={styles.locationText}>📍 Durban, South Africa</Text>
          </View>
        </View>

        {/* Quick Stats Card */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Overview</Text>
          <View style={styles.statsRow}>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>18</Text>
              <Text style={styles.statLabel}>Years Old</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>SE</Text>
              <Text style={styles.statLabel}>Software Eng.</Text>
            </View>
          </View>
        </View>

        {/* About Me Card */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>About Me</Text>
          <Text style={styles.bioText}>
            Passionate software engineering student based in Durban. Dedicated to mastering both frontend and backend technologies to build impactful, scalable applications. When I'm not writing code or building apps with Expo and React Native, you'll find me on the soccer pitch or tracking the latest developments in tech.
          </Text>
        </View>

        {/* Interests & Passions */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Passions & Hobbies</Text>
          <View style={styles.tagContainer}>
            <View style={styles.tag}><Text style={styles.tagText}>⚽ Soccer</Text></View>
            <View style={styles.tag}><Text style={styles.tagText}>💻 Coding</Text></View>
            <View style={styles.tag}><Text style={styles.tagText}>🚀 Tech Innovation</Text></View>
            <View style={styles.tag}><Text style={styles.tagText}>📱 Mobile Apps</Text></View>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  banner: {
    alignItems: 'center',
    marginBottom: 24,
    marginTop: 10,
  },
  avatarContainer: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#3b82f6',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#3b82f6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 6,
  },
  avatarText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#f8fafc',
    textAlign: 'center',
  },
  role: {
    fontSize: 16,
    fontWeight: '600',
    color: '#38bdf8',
    marginTop: 4,
    marginBottom: 12,
  },
  locationBadge: {
    backgroundColor: '#1e293b',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#334155',
  },
  locationText: {
    color: '#cbd5e1',
    fontSize: 13,
    fontWeight: '500',
  },
  card: {
    backgroundColor: '#1e293b',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#334155',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f8fafc',
    marginBottom: 12,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 8,
  },
  statBox: {
    alignItems: 'center',
    flex: 1,
  },
  statDivider: {
    width: 1,
    height: '80%',
    backgroundColor: '#334155',
  },
  statNumber: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#38bdf8',
  },
  statLabel: {
    fontSize: 13,
    color: '#94a3b8',
    marginTop: 4,
  },
  bioText: {
    fontSize: 15,
    color: '#cbd5e1',
    lineHeight: 24,
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    backgroundColor: '#0f172a',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#334155',
  },
  tagText: {
    color: '#e2e8f0',
    fontSize: 14,
    fontWeight: '500',
  },
});