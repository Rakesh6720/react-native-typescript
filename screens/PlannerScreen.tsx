import { useEffect } from "react";
import { Button, Text, View } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

export default function PlannerScreen({ navigation }: NativeStackHeaderProps) {
  useEffect(() => {
    console.log("rendering planner screen");
    return () => console.log("Unmounting planner screen");
  }, []);

  return (
    <View>
      <Text>I am planner screen</Text>
      <Button
        title="Go to home"
        onPress={() => {
          navigation.navigate("Home");
        }}
      ></Button>
    </View>
  );
}
