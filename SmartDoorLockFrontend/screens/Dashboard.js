import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';

const Dashboard = ({ navigation }) => { 
      const handleLogout = () => {
        console.log('Logging out...');
        navigation.navigate('Home');
      };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Log Out</Text>
      </TouchableOpacity>
      <View style={styles.container1}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  container1: {
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
  logoutButton: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  logoutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Dashboard;
