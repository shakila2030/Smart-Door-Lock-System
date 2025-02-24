import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Dashboard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Dashboard</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Verify User"
          onPress={() => navigation.navigate('VerifyUser')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="View Logs"
          onPress={() => navigation.navigate('ViewLogs')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 28,
    marginBottom: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginBottom: 20,
  },
});

export default Dashboard;
