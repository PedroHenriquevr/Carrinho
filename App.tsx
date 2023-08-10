import { SafeAreaView, StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
import Carrinho from './src/pages/Carrinho';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar  />
      <Carrinho/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
