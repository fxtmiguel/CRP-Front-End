import { Stack } from "expo-router";
import Index from "./index";  // Import your Index component (adjust the path as needed)
import register from "./register";  // Import your Register component (adjust the path as needed)

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: 'login' }} />
      <Stack.Screen name="register" options={{ title: 'register' }} />
    </Stack>
  );
}
