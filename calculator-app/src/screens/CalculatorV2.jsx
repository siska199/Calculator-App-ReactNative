import React, {useState} from 'react'
import {View, StyleSheet,Text } from 'react-native'
import ButtonComponent from '../components/Button';
import Display from '../components/Display';
import Input from '../components/Input';

export default function CalculatorV2() {
    const operator= ['+','-','*','/','%','c']
    const [display, setDisplay] = useState('')
    const [value, setValue] = useState({
        value1 : '',
        value2 : ''
    })
    const regex = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/

    const onChangeValue1 = (input) =>{
        if(String(input).match(regex)){
            return('')
        }else{
            setValue({
                ...value,
                value1 : String(input)
            })
        }
    }
    const onChangeValue2 = (input) =>{
        if(String(input).match(regex)){
            return('')
        }else{
            setValue({
                ...value,
                value2 : String(input)
            })
        }
    }

    const handleInput = (inp) =>{
        if(inp=='c'){
            setValue({
                value1 : '',
                value2 : ''
            })
            setDisplay('')
        }else{
            setDisplay(eval(value.value1+inp+value.value2))
        }
    }

    return (
        <View style={styles.container}>
            <Text style={{fontWeight:'700',fontSize:40}}>
                Result
            </Text>
            <View style={styles.display}>
                <Text style={styles.text}>
                    {display}
                </Text>
            </View>

            <View>
                <Input onChange={onChangeValue1} value={value.value1} name="Value 1"/>
            </View>

            <View>
                <Input onChange={onChangeValue2} value={value.value2} name="Value 2"/>
            </View>

            <View style={styles.butContainer}>
                {
                    operator.map((v,i)=>(
                        <ButtonComponent handleInput={handleInput} key={i} color={"#FF5757"} number={v}/>
                    ))
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent:'center',
        paddingLeft: 40,
        paddingRight : 40,
    },
    butContainer : {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent:'center'
    },
    display : {
        backgroundColor: "#ECECEC",
        width: 310,
        padding: 20,
        height: 90,
        marginBottom: 30,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontWeight: "bold",
        fontSize: 40,
      },
  });