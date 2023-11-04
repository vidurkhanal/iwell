import { StatusBar } from "expo-status-bar";
import { Platform, SafeAreaView, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ backgroundColor: "turquoise", height: "100%" }}>
      <Text>Home Screen</Text>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
