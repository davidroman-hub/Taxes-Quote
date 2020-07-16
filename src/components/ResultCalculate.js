import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ResultCalculation = (props)=> {
    console.log(props)

    const {errorMessage, 
           capital, 
           taxes, 
           months , 
           total} = props
    
    return (
        <View style={styles.content}>            
            {total && (
                <View style ={styles.boxResult}>
                    <Text style = {styles.title}> RESUMEN </Text>
                    {/* <View style = {styles.value}>
                        <Text>Cantidad a Pedir: </Text>
                        <Text> $ {capital} </Text>
                    </View> */}
                       <DataResult title="Cantidad Solicitada" value={`${capital} $`} />
                       <DataResult title="Interes %" value={`${taxes} %`} />
                       <DataResult title="Plazos" value={`${months} meses`} />
                       <DataResult title="Pago Mensual" value={`${total. monthlyfee} $`} />
                       <DataResult title="Total al pagar al finalizar" value={`${total.totalPayable} $`} />
                </View>
            ) //<Text> Result total</Text>
                }
            <View>
                <Text style={styles.errorMessages}>{errorMessage}</Text>
            </View>    
            
        </View>
    )
}

function DataResult(props){
    const {title, value} = props
    return(
    <View style = {styles.value}>
        <Text>   {title} </Text>
        <Text>  {value} </Text>
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
        marginTop:0,
        marginHorizontal:40
    },
    boxResult:{
        padding:30,
    },
    title:{
        fontSize:30, 
        textAlign:'center',
        fontWeight:'bold',
        marginBottom:30
    },
    value:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:20
    }
})


export default ResultCalculation