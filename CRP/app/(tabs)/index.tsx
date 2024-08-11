import { Text, StyleSheet, ScrollView, Image } from "react-native";

export default function Home() {

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require("../../assets/images/CRP_logo.png")}
      />
      <Text style={styles.title}>Home</Text>
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
    borderColor: "gray",
    borderWidth: 1,
    width: "100%",
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
    width: "100%",
    backgroundColor: "#fff", // White background for picker container
    borderRadius: 4,
    marginBottom: 12,
  },
  picker: {
    color: "#000", // Black text color for picker
  },
  tinyLogo: {
    width: 100,
    height: 50,
  },
});
