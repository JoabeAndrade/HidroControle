import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Login } from './src/screens/Login';
import { UserRegister } from './src/screens/UserResgiter';
import { AddressRegister } from './src/screens/AddressRegister';
import { Home } from './src/screens/Home';
import { Profile } from './src/screens/Profile';
import { PersonalInformation } from './src/screens/PersonalInformation';
import { HomeInformation } from './src/screens/HomeInformation';
import { ForgotPassword } from './src/screens/ForgotPassword/indes';
import { Analysis } from './src/screens/Analysis/indes';
import { PaymentHistory } from './src/screens/PaymentHistory';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { RootStackParamList } from './types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name='UserRegister' component={UserRegister} options={{ headerShown: false }}/>
        <Stack.Screen name='AddressRegister' component={AddressRegister} options={{ headerShown: false }}/>
        <Stack.Screen name='Home' component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name='PaymentHistory' component={PaymentHistory} options={{ headerShown: false }}/>
        <Stack.Screen name='Analysis' component={Analysis} options={{ headerShown: false }}/>
        <Stack.Screen name='Profile' component={Profile} options={{ headerShown: false }}/>
        <Stack.Screen name='PersonalInformation' component={PersonalInformation} options={{ headerShown: false }}/>
        <Stack.Screen name='HomeInformation' component={HomeInformation} options={{ headerShown: false }}/>
      </Stack.Navigator>
      <StatusBar hidden/>
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
