import { Text, StyleSheet, ScrollView, Image } from "react-native";
import { TopNav } from "@/components/TopNav";

export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require("../../assets/images/CRP_logo.png")}
      />
      <TopNav link1="Blog" link2="Resources" />
      <Image
        style={styles.blogPhoto}
        source={require("../../assets/images/blog1.png")}
      />
      <Text style={styles.bodyText}>
        The effectiveness of an internship on professional prospects
      </Text>

      <Image
        style={styles.blogPhoto}
        source={require("../../assets/images/blog2.png")}
      />
      <Text style={styles.bodyText}>
        Lorem ipsum dolor uber cash is why you need to take a peek inside the
        industry
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "grey",
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
  bodyText: {
    fontSize: 17,
    marginBottom: 24,
    color: "#fff",
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
    position: "absolute",
    top: 60,
    alignContent: "center",
  },
  blogPhoto: {
    width: 347,
    height: 151,
  },
});
