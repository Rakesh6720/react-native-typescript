import { useEffect } from "react";
import { Button, Text, View } from "react-native";

export default function HomeScreen({ navigation }: any) {
  useEffect(() => {
    console.log("rendering home screen");
  }, []);
  return (
    <View>
      <Text>I am the home screen</Text>
      <Button
        title="Go to planner"
        onPress={() => {
          navigation.push("Planner");
        }}
      ></Button>
    </View>
  );
}
