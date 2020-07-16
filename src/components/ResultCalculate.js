import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ResultCalculation = (props)=> {
    
    const {errorMessage, 
           capital, 
           taxes, 
           months , 
           total} = props
    
    return (
        <View style={styles.content}>            
            {total && 
                <Text> Result total</Text>
                }
            <View>
                <Text style={styles.errorMessages}>{errorMessage}</Text>
            </View>    
            
        </View>
    )
}

const styles = StyleSheet.create({
    errorMessages: {
        textAlign:'center',
        color:'#f00',
        fontWeight:'bold',
        fontSize:20
    },
    content:{
        marginTop:100,
        marginHorizontal:40
    }
})


export default ResultCalculation