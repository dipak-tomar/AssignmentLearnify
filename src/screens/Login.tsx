/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useRef, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  FlatList,
  Image,
  Modal,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import CustomButton from '../Components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {normalize} from '../utils';

function Login(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [phone, setphone] = useState('');
  const navigation = useNavigation();

  const textInputRef = useRef<TextInput>(null);
  const [isFocused, setisFocused] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [countryCode, setcountryCode] = useState('+91');

  const countryCodes = [
    {code: '+91', name: 'India'},
    {code: '+1', name: 'United States'},
    {code: '+44', name: 'United Kingdom'},
    {code: '+81', name: 'Japan'},
    {code: '+86', name: 'China'},
    {code: '+49', name: 'Germany'},
    {code: '+33', name: 'France'},
    {code: '+55', name: 'Brazil'},
    {code: '+7', name: 'Russia'},
    {code: '+61', name: 'Australia'},
  ];

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const selectCountryCode = (code: string) => {
    setcountryCode(prevPhone => `${code}`);
    toggleModal();
  };

  const renderItem = ({item}: {item: {code: string; name: string}}) => (
    <TouchableOpacity
      style={styles.modalItem}
      onPress={() => selectCountryCode(item.code)}>
      <Text style={{color: 'white'}}>{`${item.name} ${item.code}`}</Text>
    </TouchableOpacity>
  );

  // useEffect(() => {
  //   const getCountries = () => {
  //     fetch('https://restcountries.com/v3.1/all')
  //       .then(res => res.json())
  //       .then(data => console.log('data', data[0]));
  //   };

  //   getCountries();
  // }, []);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  console.log('teref', textInputRef?.current?.isFocused());

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={{marginTop: '8%'}}>
        <Text
          style={{
            fontSize: 20,
            alignSelf: 'center',
            marginRight: '4%',
            color: '#373737',
            fontWeight: '700',
          }}>
          Login
        </Text>
      </View>
      <View style={{marginTop: '10%', marginLeft: '22%'}}>
        <Image source={require('../Assets/UserLogin.jpeg')} />
      </View>
      <View style={styles.textInputContainer}>
        <View style={styles.countryCodeContainer}>
          <TouchableOpacity
            onPress={toggleModal}
            style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 14,
                alignSelf: 'center',
                color: '#c1c1c1',
                fontWeight: '700',
                paddingLeft: '25%',
              }}>
              {countryCode}
            </Text>
            <Icon
              name="caretdown"
              size={11}
              color="black"
              style={{
                marginLeft: '25%',
                marginTop: Platform.OS === 'ios' ? 20 : normalize(26),
              }}
            />
          </TouchableOpacity>
        </View>
        <TextInput
          value={phone}
          ref={textInputRef}
          onChangeText={txt => setphone(txt)}
          onFocus={() => setisFocused(true)}
          onBlur={() => setisFocused(false)}
          style={{
            width: '65%',
            borderWidth: 1,
            borderRadius: 30,
            borderColor: '#cfcfcf',
            padding: 18,
            paddingTop: 18,
            // paddingLeft: i,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            borderLeftWidth: 0,
            fontSize: 16,
            color: '#c1c1c1',
          }}
          placeholder="Phone Number"
          maxLength={10}
          keyboardType="phone-pad"
        />
      </View>
      <View style={{marginTop: '8%', marginLeft: '5%'}}>
        <CustomButton
          onPress={() =>
            navigation.navigate('Otp', {
              mobile: phone,
              countryCode: countryCode,
            })
          }
          title="Get Otp"
        />
      </View>
      <View style={{width: '80%', alignSelf: 'center', marginTop: '10%'}}>
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
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}>
        <View style={styles.modalContainer}>
          <FlatList
            data={countryCodes}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </Modal>
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
    marginTop: '15%',
    width: '100%',
    // marginHorizontal: '10%',
    position: 'relative',
    flexDirection: 'row',
  },
  countryCodeContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRightWidth: 0,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    borderColor: '#cfcfcf',
    // height: 50,
    width: 90,
    marginLeft: '4%',
    // padding: 5,
    // paddingHorizontal: 20,
    // position: 'absolute',
    // top: 14,
    // left: 25,
  },
  modalContainer: {
    // flex: 1,

    marginTop: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  modalItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#cfcfcf',
  },
});

export default Login;
