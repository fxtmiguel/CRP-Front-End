import React, { useState } from "react";
import { Text, TextInput, View, Button, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function Index() {
  const navigation = useNavigation(); // Use useNavigation hook
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Handle login logic here
    console.log("Login button pressed");
  };

  const handleRegister = () => {
    // Navigate to the registration page
    navigation.navigate("register");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
      <TouchableOpacity onPress={handleRegister}>
        <Text style={styles.registerText}>Don't have an account? Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#0d47a1"
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    color: "#fff",
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    marginBottom: 12,
    paddingLeft: 8,
    color: "#fff",
  },
  registerText: {
    marginTop: 20,
    color: "yellow",
    textDecorationLine: "underline",
  },
});
