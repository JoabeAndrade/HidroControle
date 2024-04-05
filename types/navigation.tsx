import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export type RootStackParamList = {
    Home: undefined;
    Login: undefined;
    UserRegister: undefined;
    AddressRegister: undefined;
    PaymentHistory: undefined;
    Analysis: undefined;
    Profile: undefined;
    PersonalInformation: undefined;
    HomeInformation: undefined;
  };