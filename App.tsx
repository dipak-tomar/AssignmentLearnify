/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
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

import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [phone, setphone] = useState('');

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

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
            color: '#373737',
            fontWeight: '700',
          }}>
          Login
        </Text>
      </View>
      <View style={styles.textInputContainer}>
        <TextInput
          value={phone}
          onChangeText={txt => setphone(txt)}
          style={styles.textInput}
        />
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
    marginTop: '15%',
    width: '90%',
    marginHorizontal: '4%',
  },
  textInput: {
    width: '90%',
    borderWidth: 1,
    borderRadius: 22,
    borderColor: '#cfcfcf',
  },
});

export default App;
