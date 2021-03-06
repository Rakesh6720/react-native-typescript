import React, { useEffect, useState } from "react";
import {
  Button,
  Text,
  View,
  StyleSheet,
  FlatList,
  Pressable,
} from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { Workout } from "../types/data";
import WorkoutItem from "../components/WorkoutItem";
import { MontserratText } from "../components/styled/MonterratText";
import { getWorkouts } from "../storage/workout";
import { useWorkouts } from "../hooks/useWorkouts";

export default function HomeScreen({ navigation }: NativeStackHeaderProps) {
  const workouts = useWorkouts();
  return (
    <View style={styles.container}>
      <MontserratText style={{ fontSize: 30 }}>New Workouts</MontserratText>
      <FlatList
        data={workouts}
        renderItem={({ item }) => {
          return (
            <Pressable
              onPress={() =>
                navigation.navigate("WorkoutDetail", { slug: item.slug })
              }
            >
              <WorkoutItem item={item} />
            </Pressable>
          );
        }}
        keyExtractor={(item) => item.slug}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
  },
});
