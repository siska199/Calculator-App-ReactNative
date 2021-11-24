import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import CalculatorV1 from './src/screens/CalculatorV1'
import CalculatorV2 from './src/screens/CalculatorV2'

export default function App() {
  const [switchPage, setSwitchPage] = useState(false)
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={{marginRight: 25,alignItems:'flex-end'}}>
        <TouchableOpacity onPress={()=>setSwitchPage(!switchPage)} style={styles.switchButton}>
            <Text style={{color: 'white'}}>Switch</Text>
        </TouchableOpacity>
      </View>
      {
        switchPage?(
          <CalculatorV1/>
        ):(
          <CalculatorV2/>
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  switchButton:{
    borderRadius: 50,
    backgroundColor: 'black',
    width: 70,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70,
  },
  container: {
    flex: 1,
    backgroundColor: '#f5d8d8',
  },
});
