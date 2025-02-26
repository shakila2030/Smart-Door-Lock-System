import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const UserCard = ({ user, onVerify, onBlock }) => {
  const usernameEmail = `${user.username}:${user.email}`;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.userName}>{usernameEmail}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.verifyButton} onPress={() => onVerify(user._id)}>
            <Text style={styles.buttonText}>Verify</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.blockButton} onPress={() => onBlock(user._id)}>
            <Text style={styles.buttonText}>Block</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const VerifyUserPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://192.168.192.231:8070/user');
      const data = await response.json();

      if (response.ok) {
        const unverifiedUsers = data.filter(user => user.isVerified === 0);
        setUsers(unverifiedUsers);
      } else {
        console.error('Error fetching users:', data.message);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      Alert.alert('Error', 'Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleVerify = async (userId) => {
    try {
      const response = await fetch(`http://192.168.192.231:8070/user/verify/${userId}`, {
        method: 'PUT',
      });
      if (response.ok) {
        setUsers(users.filter(user => user._id !== userId));
        console.log('User verified:', userId);
      } else {
        console.error('Error verifying user');
      }
    } catch (error) {
      console.error('Error verifying user:', error);
    }
  };

  const handleBlock = async (userId) => {
    try {
      const response = await fetch(`http://192.168.192.231:8070/user/block/${userId}`, {
        method: 'PUT',
      });
      if (response.ok) {
        setUsers(users.filter(user => user._id !== userId));
        console.log('User blocked:', userId);
      } else {
        console.error('Error blocking user');
      }
    } catch (error) {
      console.error('Error blocking user:', error);
    }
  };

  const navigation = useNavigation();
  const handleLogout = () => {
    console.log('Logging out...');
    navigation.navigate('Home');
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Log Out</Text>
      </TouchableOpacity>

      {users.map((user) => (
        <UserCard key={user._id} user={user} onVerify={handleVerify} onBlock={handleBlock} />
      ))}
    </ScrollView>
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
