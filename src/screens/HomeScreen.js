import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
import ProfileCard from "../components/ProfileCard";
import axios from "axios";

export default function HomeScreen() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    // API recuperer les profils
    axios
      .get("https://example.com/api/profiles")
      .then((response) => {
        setProfiles(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des profils", error);
      });
  }, []);

  if (!profiles || profiles.length === 0) {
    return (
      <View style={styles.loading}>
        <Text>Chargement des profils...</Text>
      </View>
    );
  }

  return (
    <Swiper
      style={styles.wrapper}
      showsButtons={false}
      loop={false}
      onIndexChanged={(index) => console.log("Index changé:", index)}
    >
      {profiles.map((profile, index) => (
        <ProfileCard key={index} profile={profile} />
      ))}
    </Swiper>
  );
}

const styles = StyleSheet.create({
  wrapper: {},
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
