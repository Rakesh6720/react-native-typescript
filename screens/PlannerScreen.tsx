import { Button, Text, View } from "react-native";

export default function PlannerScreen({ navigation }) {
  return (
    <View>
      <Text>I am planner screen</Text>
      <Button
        title="Go to home"
        onPress={() => {
          navigation.push("Home");
        }}
      ></Button>
    </View>
  );
}
