import React from "react";                        //importa o react
import { StyleSheet, View } from 'react-native'   //importa os elementos utilizados no arquivo
import Title from './src/components/Title/'       //importa a função Title que foi definida em Title em src\components\Title\index.js
import Form from './src/components/Form/'


export default function App() {
  return (
    <View style={styles.container}>
      <Title/>                                    
      <Form/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
    paddingTop: 80,                              //Desce do top 
  },
});
