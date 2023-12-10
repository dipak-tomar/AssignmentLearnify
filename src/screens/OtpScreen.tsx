/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useRef, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Alert,
  Image,
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
import CustomButton from '../Components/CustomButton';
import {useNavigation, useRoute} from '@react-navigation/native';
import {OTPInput} from '../Components/OtpInput';

function OtpScreen(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [otp, setotp] = useState('');
  const navigation = useNavigation();

  const textInputRef = useRef<TextInput>(null);

  const route = useRoute();
  const {mobile, countryCode} = route.params;
  const [code, setcode] = useState<string[]>([]);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  console.log('teref', code);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <View style={{marginTop: '4%'}}>
        <Text
          style={{
            fontSize: 20,
            alignSelf: 'center',
            color: '#3a3a3a',
            fontWeight: '700',
          }}>
          Otp Verify
        </Text>
      </View>
      <View style={{marginTop: '10%', marginLeft: '24%'}}>
        <Image source={require('../Assets/UserLogin.jpeg')} />
      </View>
      <View
        style={{
          width: '80%',
          alignSelf: 'center',
          marginTop: '10%',
          marginLeft: '2%',
        }}>
        <Text
          style={{
            fontSize: 16,
            lineHeight: 24,
            color: '#919191',
            alignSelf: 'center',
          }}>
          OTP Sent to
        </Text>
        <Text
          style={{
            fontSize: 16,
            lineHeight: 24,
            color: '#393939',
            alignSelf: 'center',
          }}>
          {`${countryCode} ${mobile}`}
        </Text>
      </View>
      <View style={styles.textInputContainer}>
        <OTPInput
          length={4}
          onChange={txt => console.log(txt)}
          value={code}
          disabled={false}
        />
        <View style={{marginTop: '12%'}}>
          <CustomButton
            onPress={() => Alert.alert('Your details has been submitted')}
            title="Verify Otp"
          />
        </View>
      </View>
      <View
        style={{
          width: '80%',
          alignSelf: 'center',
          marginTop: '10%',
          marginLeft: '8%',
        }}>
        <Text style={{fontSize: 16, lineHeight: 24, color: 'rgb(202,202,202)'}}>
          By Signing up,you agree with our Terms
        </Text>
        <Text
          style={{
            fontSize: 16,
            lineHeight: 24,
            color: 'rgb(202,202,202)',
            alignSelf: 'center',
          }}>
          and conditions
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  textInputContainer: {
    // backgroundColor: 'green',
    marginTop: '10%',
    width: '100%',
    paddingLeft: '10%',
    // alignItems: 'center',
    position: 'relative',
  },
  countryCodeContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: 14,
    left: 25,
  },
});

export default OtpScreen;
