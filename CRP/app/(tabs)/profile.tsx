import { StyleSheet, TouchableOpacity, Text, View, Image } from "react-native";
import { FIREBASE_AUTH } from "../FirebaseConfig";
import { router } from "expo-router";
import { getAuth } from "firebase/auth";

export default function TabOneScreen() {
  getAuth().onAuthStateChanged((user) => {
    // Change to redirect to login page
    if (!user) router.replace("/..");
  });

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Your Upcoming Events</Text>
      <Image
        style={styles.profilePhoto}
        source={require("../../assets/images/profilePhoto.png")}
      />
      <Text style={styles.subtitle}>About</Text>
      <Text style={styles.label}>Name</Text>
      <Text style={styles.label}>Ryan Schmitt</Text>
      <Text style={styles.label}>Email</Text>
      <Text style={styles.label}>rtsch@gmail.com</Text>
      <Text style={styles.label}>Major</Text>
      <Text style={styles.label}>Computer Science</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => FIREBASE_AUTH.signOut()}
      >
        <Text style={styles.text}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FAFAFA", // A softer white for a modern, minimalist background
  },
  subtitle: {
    fontSize: 25,
    fontWeight: "800",
    color: "#1A237E",
    marginBottom: 40,
  },
  profilePhoto: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  label: {
    fontSize: 20,
    fontWeight: "800",
    color: "black",
    marginBottom: 15,
  },
  separator: {
    marginVertical: 30,
    height: 2, // Slightly thicker for a more pronounced separation
    width: "80%",
    backgroundColor: "#E8EAF6", // Using a light indigo to match the border of the textInput
  },
  button: {
    width: "90%",
    backgroundColor: "#5C6BC0", // A lighter indigo to complement the title color
    padding: 20,
    borderRadius: 15, // Softly rounded corners for a modern, friendly touch
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#5C6BC0", // Shadow color to match the button for a cohesive look
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 5, // Slightly elevated for a subtle 3D effect
    marginTop: 15, // Adjusted to match the new style
  },
  text: {
    color: "#FFFFFF", // Maintained white for clear visibility
    fontSize: 18, // Slightly larger for emphasis
    fontWeight: "600", // Semi-bold for a balanced weight
  },
});
