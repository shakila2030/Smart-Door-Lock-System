import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LogCard = ({ log }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.logText}>Username: {log.username}</Text>
      <Text style={styles.logText}>Logged At: {new Date(log.verifiedAt).toLocaleString()}</Text>
    </View>
  );
};

const ViewLogsPage = () => {
  const [logs, setLogs] = useState([]);
  const [message, setMessage] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await fetch('http://192.168.192.231:8070/logs');  // Fetch logs for all users
  
        if (response.ok) {
          const data = await response.json();
          console.log('Fetched data:', data); // Log the response data for debugging

          if (Array.isArray(data)) {
            // Filter logs based on isVerified and include username and email
            const filteredLogs = data
              .map(log => ({
                ...log,
                username: log.username,  // Include username
                verifiedAt: log.verifiedAt,
              }));

            if (filteredLogs.length > 0) {
              setLogs(filteredLogs);
            } else {
              setMessage('No verified logs found.');
            }
          } else {
            setMessage('Unexpected response structure.');
          }
        } else {
          const errorText = await response.text();
          setMessage(`Server error: ${errorText}`);
        }
      } catch (error) {
        console.error(error);
        setMessage('Error occurred while fetching logs.');
      }
    };

    fetchLogs();
  }, []);

  const handleLogout = () => {
    console.log('Logging out...');
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Log Out</Text>
      </TouchableOpacity>

      {message ? (
        <Text style={styles.message}>{message}</Text>
      ) : (
        <FlatList
  data={logs}
  renderItem={({ item }) => <LogCard log={item} />}
  keyExtractor={(item) => item._id}  // Use the unique MongoDB _id field
/>

      )}
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
  message: {
    fontSize: 16,
    color: 'red',
    marginTop: 20,
    textAlign: 'center',
  },
});

export default ViewLogsPage;
