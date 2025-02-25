import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

const UserCard = ({ user, onVerify, onBlock }) => {
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
    <View style={styles.card}>
      <Text style={styles.userName}>{user.name}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.verifyButton} onPress={() => onVerify(user.id)}>
          <Text style={styles.buttonText}>Verify</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.blockButton} onPress={() => onBlock(user.id)}>
          <Text style={styles.buttonText}>Block</Text>
        </TouchableOpacity>
      </View>
    </View>
     </View>
  );
};

const VerifyUserPage = () => {
  const dummyUser = { id: 1, name: 'User1' };

  const handleVerify = (userId) => {
    console.log(`Verifying user with ID: ${userId}`);
    // Backend API call to verify user goes here
  };

  const handleBlock = (userId) => {
    console.log(`Blocking user with ID: ${userId}`);
    // Backend API call to block user goes here
  };

  return (
    <View style={styles.container}>
      <UserCard user={dummyUser} onVerify={handleVerify} onBlock={handleBlock} />
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
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    width: '90%',
    marginBottom: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  verifyButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  blockButton: {
    backgroundColor: '#FF5733',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default VerifyUserPage;
