import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import Navigation from "./navigation";
import HomeScreen from "./screens/HomeScreen";
import PlannerScreen from "./screens/PlannerScreen";

export default function App() {
  return (
    <>
      <Navigation />
      <StatusBar style="auto" />
    </>
  );
}
