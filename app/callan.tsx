import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  StatusBar,
} from 'react-native';

type InfoItem = {
  label: string;
  value: string;
  emoji: string;
};

const hobbies = ['🎵 Playing Music', '🎮 Gaming', '🎨 Drawing', '⚽ Playing Sports'];

const infoItems: InfoItem[] = [
  { emoji: '🎂', label: 'Age', value: '18 years old' },
  { emoji: '💎', label: 'Favorite Colour', value: 'Sapphire' },
  { emoji: '🍣', label: 'Favorite Food', value: 'Sushi' },
];

export default function Callan() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.avatarCircle}>
            <Text style={styles.avatarInitials}>CX</Text>
          </View>
          <Text style={styles.name}>Callan Xander Stephen</Text>
          <Text style={styles.tagline}>Musician · Gamer · Artist · Athlete</Text>
        </View>

        {/* Info Cards */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About Me</Text>
          <View style={styles.infoGrid}>
            {infoItems.map((item, index) => (
              <View key={index} style={styles.infoCard}>
                <Text style={styles.infoEmoji}>{item.emoji}</Text>
                <Text style={styles.infoLabel}>{item.label}</Text>
                <Text style={styles.infoValue}>{item.value}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Hobbies */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Favorite Things to Do</Text>
          <View style={styles.hobbiesContainer}>
            {hobbies.map((hobby, index) => (
              <View key={index} style={styles.hobbyPill}>
                <Text style={styles.hobbyText}>{hobby}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContent: {
    paddingBottom: 40,
  },
  header: {
    backgroundColor: '#AEDBFF',
    paddingTop: 50,
    paddingBottom: 32,
    paddingHorizontal: 24,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    alignItems: 'center',
  },
  avatarCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
    shadowColor: '#3AA0FF',
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  avatarInitials: {
    fontSize: 28,
    fontWeight: '800',
    color: '#2E86FF',
  },
  name: {
    fontSize: 24,
    fontWeight: '800',
    color: '#0A3D91',
    textAlign: 'center',
  },
  tagline: {
    fontSize: 14,
    color: '#155BB0',
    marginTop: 6,
    textAlign: 'center',
    fontWeight: '500',
  },
  section: {
    paddingHorizontal: 20,
    marginTop: 28,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0A3D91',
    marginBottom: 14,
  },
  infoGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoCard: {
    flex: 1,
    backgroundColor: '#F0F8FF',
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 10,
    marginHorizontal: 4,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D6ECFF',
  },
  infoEmoji: {
    fontSize: 24,
    marginBottom: 8,
  },
  infoLabel: {
    fontSize: 12,
    color: '#5A7DA8',
    fontWeight: '600',
    marginBottom: 4,
    textAlign: 'center',
  },
  infoValue: {
    fontSize: 14,
    color: '#0A3D91',
    fontWeight: '700',
    textAlign: 'center',
  },
  hobbiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  hobbyPill: {
    backgroundColor: '#E4F3FF',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#BFE3FF',
    marginRight: 10,
    marginBottom: 10,
  },
  hobbyText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0A66C2',
  },
});