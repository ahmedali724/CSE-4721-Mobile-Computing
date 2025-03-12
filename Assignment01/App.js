import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  FlatList,
  Text,
} from "react-native";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";

export default function App() {
  const [goal, setGoal] = useState("");
  const [goalsList, setGoalsList] = useState([]);

  const [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    console.log("error loading fonts");
  }

  const addGoalHandler = () => {
    if (goal.trim() === "") return;
    setGoalsList((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goal },
    ]);
    setGoal("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To-Do List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter a goal"
          placeholderTextColor="#90caf9"
          value={goal}
          onChangeText={(text) => setGoal(text)}
        />
        <Button title="Add Goal" onPress={addGoalHandler} color="#1976d2" />
      </View>
      <FlatList
        data={goalsList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.goalItem}>
            <Text style={styles.goalText}>{item.value}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#e3f2fd",
  },
  title: {
    fontSize: 24,
    fontFamily: "Inter_900Black",
    marginBottom: 20,
    color: "#0d47a1",
    textAlign: "center",
    marginTop: 10,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  textInput: {
    flex: 1,
    borderColor: "#64b5f6",
    borderWidth: 1,
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
    color: "#0d47a1",
  },
  goalItem: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: "#bbdefb",
    borderColor: "#64b5f6",
    borderWidth: 1,
    borderRadius: 5,
  },
  goalText: {
    fontSize: 16,
    fontFamily: "Inter_900Black",
    color: "#0d47a1",
  },
});
