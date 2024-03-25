import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [base, setBase] = React.useState('');
  const [altura, setAltura] = React.useState('');
  const areaTriangulo = (parseFloat(base) * parseFloat(altura)) / 2;

  return (
    <View style={styles.container}>
      <Text style={styles.titulop}>Calcule a área do triângulo</Text>

      <Text style={styles.titulo}>Base:</Text>
      <TextInput onChangeText={setBase} keyboardType='numeric' style={styles.textinp}/>

      <Text style={styles.titulo}>Altura:</Text>
      <TextInput onChangeText={setAltura} keyboardType='numeric' style={styles.textinp}/>

      <Text style={styles.titulo}>Área do triangulo:</Text>
      {!isNaN(areaTriangulo) && <Text style={styles.resultado}>{areaTriangulo}</Text>}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a9a9a9',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,

    },
  titulop: {
    fontSize: 25,
    marginBottom: 50,
    fontWeight: 'bold',
    color: 'white',
  },
  titulo: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'flex-start',
  },
  resultado: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    margin: 25,
  },
  textinp: {
    width: '100%',
    height: 50,
    backgroundColor: '#696969',
    borderRadius: 12,
    color: '#ffffff',
    margin: 10,
    padding: 15,
    marginBottom: 30,
  }
});