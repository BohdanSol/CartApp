import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export type ButtonProps = {
  onPress: () => void;
  text: string;
  disabled: boolean;
  color?: string;
  textColor?: string;
};

const styles = StyleSheet.create({
  button: {
    height: 48,
    justifyContent: 'center',
    width: '100%',
    borderRadius: 4,
    flexGrow: 0,
    backgroundColor: 'green',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    alignItems: 'flex-start',
    marginHorizontal: 26,
  },
});

export const MyButton = ({ text, onPress, disabled, color, textColor }: ButtonProps) => (
  <View style={styles.buttonContainer}>
    <TouchableOpacity
      style={[styles.button, !!color && { backgroundColor: color }, disabled && { backgroundColor: '#ccc' }]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}>
      <Text style={[styles.buttonText, !!textColor && { color: textColor }]}>
        {text}
      </Text>
    </TouchableOpacity>
  </View>
);
