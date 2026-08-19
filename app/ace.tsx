import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

export default function AceProfile() {
  return (
    <ScrollView style={styles.container}>
      {/* Cover Photo */}
      <View style={styles.coverPhoto}>
        <Text style={styles.coverText}>✨ My Profile ✨</Text>
      </View>

      {/* Profile Picture */}
      <View style={styles.profileSection}>
        <Image
          source={{ uri: 'https://via.placeholder.com/120' }} // Replace with your profile image
          style={styles.profilePic}
        />
        <Text style={styles.profileName}> Aceshreda </Text>
        <Text style={styles.profileBio}>⚡ Vibe coder | man united fan | Creator ⚡</Text>
      </View>

      {/* Action Buttons */}
      <View style={styles.actionRow}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add Friend</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Message</Text>
        </TouchableOpacity>
      </View>

      {/* Friends Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Friends</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {[1, 2, 3, 4, 5].map((friend) => (
            <Image
              key={friend}
              source={{ uri: 'https://via.placeholder.com/80' }}
              style={styles.friendPic}
            />
          ))}
        </ScrollView>
      </View>

      {/* Posts Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Posts</Text>
        {[1, 2, 3].map((post) => (
          <View key={post} style={styles.postCard}>
            <Text style={styles.postText}>✨ This is post #{post} ✨</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Black background
  },
  coverPhoto: {
    height: 150,
    backgroundColor: '#FFD700', // Gold cover
    justifyContent: 'center',
    alignItems: 'center',
  },
  coverText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  profileSection: {
    alignItems: 'center',
    marginTop: -60,
  },
  profilePic: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#FFD700',
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD700',
    marginTop: 10,
  },
  profileBio: {
    fontSize: 14,
    color: '#FFD700',
    marginTop: 5,
    textAlign: 'center',
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 15,
  },
  button: {
    backgroundColor: '#FFD700',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  section: {
    marginVertical: 15,
    paddingHorizontal: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 10,
  },
  friendPic: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 10,
    borderWidth: 2,
    borderColor: '#FFD700',
  },
  postCard: {
    backgroundColor: '#111',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#FFD700',
  },
  postText: {
    color: '#FFD700',
    fontSize: 16,
  },
});