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

export default function App() {
  return (
    <View style={styles.container}>
      {/* <AddressRegister/> */}
      {/* <UserRegister/> */}
      {/* <Login /> */}
      {/* <Home/> */}
      {/* <PersonalInformation/> */}
      {/* <Profile/> */}
      {/* <HomeInformation/> */}
      {/* <ForgotPassword/> */}
      {/* <Analysis/> */}
      <PaymentHistory/>
      <StatusBar hidden/>
    </View>
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
