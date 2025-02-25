import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const HomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>Admin</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("User")}
      >
        <Text style={styles.buttonText}>User</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  button: {
    width: 200, 
    backgroundColor: "#000", 
    borderRadius: 25,
    paddingVertical: 20, 
    alignItems: "center",
    marginVertical: 20,
  },
  buttonText: {
    fontSize: 25, 
    color: "#fff", 
    fontWeight: "bold",
  },
});

export default HomePage;
