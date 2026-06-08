import { Stack } from "expo-router";
import "../global.css";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";


const AppShell = () => {
  return (
    <View className="flex-1 bg-background">
      <Stack screenOptions={{
        headerShown: false
        , contentStyle: { backgroundColor: "transparent" }
      }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="splash" />
      </Stack>
      <StatusBar style="dark"/>
    </View>
  )
}
export default function RootLayout() {
  return <AppShell />
}
