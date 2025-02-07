import { StyleSheet, View, Text } from 'react-native';
import WelcomeScreen from '../screens/WelcomeScreen';
import GetStartedScreen from '../screens/GetStartedSreen';
import { NavigationContainer } from '@react-navigation/native';
// import { Stack } from 'expo-router';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EncryptScreen from '../screens/EncryptScreen';
import DecryptScreen from '../screens/DecryptScreen';

const Stack = createNativeStackNavigator();

export default function HomeScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#4CAF50',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={GetStartedScreen}
        options={{ title: 'Choose Operation' }}
      />
      <Stack.Screen
        name="Encrypt"
        component={EncryptScreen}
        options={{ title: 'Encryption' }}
      />
      <Stack.Screen
        name="Decrypt"
        component={DecryptScreen}
        options={{ title: 'Decryption' }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
