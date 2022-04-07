import { useEffect } from "react";
import { Button, Text, View } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

export default function HomeScreen({ navigation }: NativeStackHeaderProps) {
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
