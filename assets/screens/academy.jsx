import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, Alert, View } from 'react-native';


export default function App(){
  return (
    <View style = {styles.mainContainer}>
      <Text>Here goes the Academy index</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer :
  {
    width : '100%',
    height : '100%',
    alignItems : 'center',
    justifyContent : 'center',
    backgroundColor : '#fff'
  },
});