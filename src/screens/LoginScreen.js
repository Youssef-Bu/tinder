import React from 'react';
import { View, Text, Button } from 'react-native';

export default function LoginScreen({ navigation }) {
  const handleLogin = () => {
    // auth logic here
    navigation.navigate('Home');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Écran de connexion</Text>
      <Button title="Se connecter" onPress={handleLogin} />
    </View>
  );
}
