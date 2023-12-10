/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useRef, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import CustomButton from './src/Components/CustomButton';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import OtpScreen from './src/screens/OtpScreen';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [phone, setphone] = useState('');

  const textInputRef = useRef<TextInput>(null);
  const [isFocused, setisFocused] = useState(false);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  console.log('teref', textInputRef?.current?.isFocused());

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTitle: ''}}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Otp" component={OtpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  textInputContainer: {
    // backgroundColor: 'green',
    marginTop: '15%',
    width: '90%',
    marginHorizontal: '10%',
    position: 'relative',
  },
  countryCodeContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: 14,
    left: 25,
  },
});

export default App;
