import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

const LogCard = ({ log }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.logText}>{log.message}</Text>
    </View>
  );
};

const ViewLogsPage = () => {
  const dummyLog = { id: 1, message: 'User1 has unlocked the door at 1.00 p.m' };
  const navigation = useNavigation(); 

  const handleLogout = () => {
    console.log('Logging out...');
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Log Out</Text>
      </TouchableOpacity>
      <LogCard log={dummyLog} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
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
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 10,
  },
  logText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default ViewLogsPage;