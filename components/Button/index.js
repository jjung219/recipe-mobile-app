import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';

const Button = () => {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => {
          console.warn('hey there')
        }}
      >
        <Text style={styles.text}>Recipe</Text>
      </Pressable>
    </View>
  )
}

export default Button;