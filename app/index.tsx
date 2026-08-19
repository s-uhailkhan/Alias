import { router } from 'expo-router';
import React from 'react';
import { FlatList, Pressable, SafeAreaView, StyleSheet, Text } from 'react-native';

const TEAM_MEMBERS = [
  { id: '1', name: 'Suhail', route: '/suhail' },
  { id: '2', name: 'Caleb', route: '/caleb' },
  { id: '3', name: 'Minenhle', route: '/minenhle' },
  { id: '4', name: 'Ace', route: '/ace' },
  { id: '5', name: 'Cameron', route: '/cameron' },
  { id: '6', name: 'Layten', route: '/layten' },
  { id: '7', name: 'Callan', route: '/callan' },
];

export default function HomeScreen() {
  const renderItem = ({ item }) => (
    <Pressable 
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
      onPress={() => router.push(item.route)}
    >
      <Text style={styles.cardTitle}>{item.name}</Text>
      <Text style={styles.cardSubtitle}>Tap to view profile file</Text>
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Team Directory</Text>
      <FlatList
        data={TEAM_MEMBERS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#333',
  },
  listContainer: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  cardPressed: {
    backgroundColor: '#e0e0e0',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});