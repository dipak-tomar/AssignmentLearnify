import {Button, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface ButtonProps {
  onPress: () => void;
  title: string;
}

const CustomButton = ({onPress, title}: ButtonProps) => {
  //   const [isPressed, setisPressed] = useState(false);
  return (
    <Pressable
      style={{
        width: '93%',
        backgroundColor: '#e44433',
        borderRadius: 22,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={onPress}>
      <Text style={{color: 'white'}}>{title}</Text>
    </Pressable>
  );
};

export default CustomButton;
