import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function ProfileCard({ profile }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: profile.image }} style={styles.image} />
      <Text style={styles.name}>
        {profile.name}, {profile.age}
      </Text>
      <Text style={styles.bio}>{profile.bio}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: "#fff",
    margin: 20,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 150,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  bio: {
    fontSize: 16,
    marginTop: 10,
    textAlign: "center",
  },
});
