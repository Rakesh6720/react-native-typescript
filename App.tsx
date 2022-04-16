import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import useCacheResources from "./hooks/useCacheResources";
import Navigation from "./navigation";
import HomeScreen from "./screens/HomeScreen";
import PlannerScreen from "./screens/PlannerScreen";

export default function App() {
  const isLoaded = useCacheResources();
  if (isLoaded) {
    return (
      <>
        <Navigation />
        <StatusBar style="auto" />
      </>
    );
  } else return null;
}
