import { SafeAreaView, Text } from "react-native";
import { Link } from "expo-router";

export default function Page() {
  return (
    <SafeAreaView>
      <Text>Page</Text>
      <Link href={"/home/"}>Home</Link>
    </SafeAreaView>
  );
}
