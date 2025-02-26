import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const UserRegistrationPage = ({ navigation }) => {
  const [fingerprintId, setFingerprintId] = useState('');
  const [message, setMessage] = useState('');

  const handleVerifyFingerprint = async () => {
    try {
      const response = await fetch(`http://192.168.192.231:8070/user/verifyFingerprint/${fingerprintId}`);
      
      // Check if the response is valid JSON
      if (response.ok) {
        const data = await response.json();
    
        if (data.message === 'User is verified') {
          setMessage(`User verified! Username: ${data.user.username}`);
        } else {
          setMessage('User not verified or fingerprint ID not found.');
        }
      } else {
        // If the response is not OK, log the error
        const errorText = await response.text();
        setMessage(`Error: ${errorText}`);
      }
    } catch (error) {
      console.error('Error occurred:', error); // Improved error logging
      setMessage('Error occurred while verifying fingerprint.');
    }
  };
  
  

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Verify Fingerprint</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Fingerprint ID"
        value={fingerprintId}
        onChangeText={setFingerprintId}
      />
      <TouchableOpacity style={styles.button} onPress={handleVerifyFingerprint}>
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>
      {message ? <Text style={styles.message}>{message}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    width: '80%',
    paddingLeft: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  message: {
    marginTop: 20,
    fontSize: 16,
    color: 'green',
  },
});

export default UserRegistrationPage;
