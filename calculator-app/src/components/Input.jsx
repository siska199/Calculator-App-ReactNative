import { setStatusBarTranslucent } from 'expo-status-bar'
import React from 'react'
import {Text, TextInput, View, StyleSheet} from 'react-native'

const Input = (props)=> {
    return (
        <View>
            <Text  style={styles.text}>
                {props.name}
            </Text>

            <TextInput onChangeText={(value)=>props.onChange(value)} value={props.value} keyboardType='numeric'  style={styles.inputContainer} />

        </View>
    )
}

export default Input


const styles = StyleSheet.create({
    inputContainer: {
      width: 310,
      paddingLeft: 20,
      alignItems: "flex-end",
      justifyContent: "center",
      height: 45,
      backgroundColor: "#ECECEC",
      borderRadius: 10,
      marginBottom: 20,
      color: 'black',
    },
    text: {
      fontWeight: "bold",
      fontSize: 20,
      marginBottom: 10,
    },

  });