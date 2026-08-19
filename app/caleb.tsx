import { Image, StyleSheet, Text, View } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1xub9GBUACPSVyTBUs1xPdKRvSkIsYyIbLI_8KpOwx2Gi_2Px4ry1J40SCVR5QtA&s=10&ec=121966416',
        }}
        style={styles.image}
      />

      <Text style={styles.name}>Name: Caleb</Text>
      <Text style={styles.text}>Favourite Color: Green</Text>
      <Text style={styles.text}>Age: 19</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },

  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },

  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  text: {
    fontSize: 20,
    marginBottom: 8,
  },
});