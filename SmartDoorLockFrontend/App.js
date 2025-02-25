import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './screens/LoginPage';
import Dashboard from './screens/Dashboard';
import UserRegisterPage from './screens/UserRegisterPage';
import RegistrationFormPage from './screens/RegistrationFormPage';
import VerifyUserPage from './screens/VerifyUserPage';
import ViewLogsPage from './screens/ViewLogsPage';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './screens/HomePage';


// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
    
//   );
// }

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="User" component={UserRegisterPage} />
        <Stack.Screen name="Registration" component={RegistrationFormPage} />
        <Stack.Screen name="VerifyUser" component={VerifyUserPage} />
        <Stack.Screen name="ViewLogs" component={ViewLogsPage} />
      </Stack.Navigator>
    </NavigationContainer> 
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
