import React, {useState} from 'react'
import {View, StyleSheet, Text} from 'react-native'
import ButtonComponent from '../components/Button'
import Display from '../components/Display';
const CalculatorV1 = () =>{
    const [currValue, setCurrValue] = useState('')
    const [finalValue, setFinalValue] = useState('')
    const handleInput = (inp) =>{
        const regex = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/

        if(currValue=='' && String(inp).match(regex)){
            return(
                alert("Input invalid value")
            )
        }

        if(String(inp).match(regex) && String(currValue).slice(-1).match(regex)  ){
            return(
                alert("Input invalid value")
            )
        }

        if(inp != '='){
            setCurrValue(String(currValue)+inp)
        }
        switch(inp) {
            case 'C':
              setCurrValue('')
              setFinalValue('')
              break;
            case 'Del':
                setCurrValue(String(currValue).substring(0,String(currValue).length-1))
                setFinalValue('')
              break;
            case '%':
                setCurrValue(eval(currValue)/100)
                break;
            case '=':
                setFinalValue(eval(currValue))
                setCurrValue(eval(currValue))
            default:
              // code block
          }
    }
    const value = ['C','Del',1,2,'-','+',3,4,'/','*',5,6,'%','=',7,8,9,0,]
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Display</Text>
            <Display valFinally={finalValue} val={currValue}/>
            <View style={styles.conButton}>
                {
                    value.map((v,i)=>{
                        if(typeof v =='number'){
                            return(<ButtonComponent handleInput={handleInput} key={i} color={"#FF5757"} number={v}/>)
                        }else{
                            return(<ButtonComponent handleInput={handleInput} key={i} color={"#930707"} number={v}/>)
                        }
                    }
                    )
                }
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent:'center',
    },
    conButton:{
        flexDirection: 'row',
        flex: 1,
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent:'center'
    },
    text:{
        fontWeight: 'bold',
        fontSize: 24,
        color: 'black',
        marginBottom: 10,
    }
  });
export default CalculatorV1