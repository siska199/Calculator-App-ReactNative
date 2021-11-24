import React from 'react'
import {Text ,StyleSheet,View, TouchableOpacity} from 'react-native'

const ButtonComponent = (props)=> {
    return (
        <View>
            {
                props.number=="Del" || props.number=="C"?(
                    <TouchableOpacity onPress={()=>props.handleInput(props.number)} style={{...styles.button,width : 150,height : 70, backgroundColor:`${props.color}` }} >
                        <Text style={styles.number}>{String(props.number)}</Text>
                    </TouchableOpacity> 
                ):(
                    <TouchableOpacity onPress={()=>props.handleInput(props.number)} style={{...styles.button, backgroundColor:`${props.color}` }} >
                        <Text style={styles.number}>{String(props.number)}</Text>
                    </TouchableOpacity> 
                )
            }

        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        width : 70,
        height : 70,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    number :{
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 50,
        color: 'white'
    }
  });
  

export default ButtonComponent