import React, { useState } from "react";
import { Text, TextInput, View, Button, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "./FirebaseConfig";
import { router } from "expo-router";

export default function Register() {
  const navigation = useNavigation(); 
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [major, setMajor] = useState("");
  const [ethnicity, setEthnicity] = useState("");
  const [gender, setGender] = useState("");

  const handleRegister = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        FIREBASE_AUTH,
        email,
        password
      );
      if (user) router.replace("/(tabs)");
    } catch (error: any) {
      console.log(error);
      alert("Sign in failed: " + error.message);
    }
  };

  const handleBackPress = () => {
    // Navigate back to the index page
    navigation.navigate("index");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
        placeholderTextColor="#fff" 
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
        placeholderTextColor="#fff" 
      />
      <TextInput
        style={styles.input}
        placeholder="School Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        placeholderTextColor="#fff" // White text color
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        placeholderTextColor="#fff" // White text color
      />
      <TextInput
        style={styles.input}
        placeholder="Major"
        value={major}
        onChangeText={setMajor}
        placeholderTextColor="#fff" 
      />
      <Text style={styles.label}>Ethnicity</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={ethnicity}
          style={styles.picker}
          onValueChange={(itemValue) => setEthnicity(itemValue)}
        >
          <Picker.Item label="Select Ethnicity" value="" />
          <Picker.Item label="Asian" value="asian" />
          <Picker.Item label="Black or African American" value="black_or_african_american" />
          <Picker.Item label="Hispanic or Latino" value="hispanic_or_latino" />
          <Picker.Item label="White" value="white" />
          <Picker.Item label="Other" value="other" />
        </Picker>
      </View>
      <Text style={styles.label}>Gender</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={gender}
          style={styles.picker}
          onValueChange={(itemValue) => setGender(itemValue)}
        >
          <Picker.Item label="Select Gender" value="" />
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
          <Picker.Item label="Other" value="other" />
        </Picker>
      </View>
      <Button title="Register" onPress={handleRegister} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#0d47a1", // Dark blue background
  },
  backButton: {
    alignSelf: "flex-start",
    marginBottom: 16,
  },
  backButtonText: {
    color: "#fff", // back button text
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    color: "#fff", // title
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    marginBottom: 12,
    paddingLeft: 8,
    color: "#fff", // White text color for input
    backgroundColor: "#333", // Dark background for inputs for better visibility
  },
  label: {
    alignSelf: "flex-start",
    marginBottom: 4,
    marginTop: 12,
    color: "#fff", // White color for labels
  },
  pickerContainer: {
    width: '100%',
    backgroundColor: "#fff", // White background for picker container
    borderRadius: 4,
    marginBottom: 12,
  },
  picker: {
    color: "#000", // Black text color for picker
  },
});
