import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"; 
import { FontAwesome } from "@expo/vector-icons"; 
import { Link } from "expo-router";

const HomePage = () => {
  

  

  return (
    <View style={{ flex: 2, marginTop: 60 }}>
      <View style={{ flex: 1, flexDirection: "row", alignSelf: "flex-end" }}>
          {/* <Ionicons name="notifications-sharp" size={40} color="black" />
          <FontAwesome
            name="user-circle-o"
            size={40}
            color="black"
            style={{ marginLeft: 30 }}
          /> */}
      </View>

      <View style={{ flex: 2, flexDirection: "column", marginTop: -120 }}>
        <View>
          <TouchableOpacity
            style={styles.appButtonContainer}
          >
            <Text style={styles.appButtonText}>Admin</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.appButtonContainer}
          >
            <Text style={styles.appButtonText}>User</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 6,
    backgroundColor: "#0e0d0d",
    borderRadius: 15,
    paddingVertical: 30,
    paddingHorizontal: 24,
    marginVertical: 40,
    borderWidth: 1, 
    borderColor: "black",
  },
  appButtonText: {
    fontSize: 35,
    color: "#f2f6f7",
    fontWeight: "bold",
    alignSelf: "center",
  },
});

export default HomePage;
