import React, { useEffect } from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

import { MontserratText } from "../components/styled/MonterratText";

type DetailParams = {
  route: { params: { slug: string } };
};

type Navigation = NativeStackHeaderProps & DetailParams;

export default function WorkoutDetailScreen({ route }: Navigation) {
  return (
    <View style={styles.container}>
      <MontserratText style={{ fontSize: 30 }}>
        Slug - {route.params.slug}
      </MontserratText>
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
