import React from 'react';
import { View, Text } from 'react-native';
import styles from './acceuil.scss';


const Acceuil = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bonjour, ceci est ma page React Native!</Text>
    </View>
  );
};

export default Acceuil;