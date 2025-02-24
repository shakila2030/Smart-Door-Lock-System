import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './screens/LoginPage';
import Dashboard from './screens/Dashboard';
import UserRegisterPage from './screens/UserRegisterPage';
import RegistrationFormPage from './screens/RegistrationFormPage';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


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
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Login">
    //     <Stack.Screen name="Login" component={LoginPage} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Login">
    //     <Stack.Screen name="Login" component={LoginPage} />
    //     <Stack.Screen name="Dashboard" component={Dashboard} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="User">
        <Stack.Screen name="User" component={UserRegisterPage} />
        <Stack.Screen name="Registration" component={RegistrationFormPage} />
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
