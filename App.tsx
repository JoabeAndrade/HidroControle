import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Login } from './src/screens/Login';
import { UserRegister } from './src/screens/UserResgiter';
import { AddressRegister } from './src/screens/AddressRegister';

export default function App() {
  return (
    <View style={styles.container}>
      <AddressRegister/>
      {/* <UserRegister/> */}
      {/* <Login /> */}
      <StatusBar style="auto" />
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
