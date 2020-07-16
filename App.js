import React,{Fragment, useState, useEffect} from 'react';

import {StyleSheet,
        View,
        Text,
        SafeAreaView, 
        StatusBar, 
        LogBox, 
        ViewBase,
        button,
        Button
      } 
from 'react-native';

/// Components

import colors from './src/utils/colors' ;// all the props of colors like Sass
import Form from './src/components/Form';
import Footer from './src/components/Footer'
import ResultCalculation from './src/components/ResultCalculate'

 LogBox.ignoreLogs(["Picker has been extracted"])


const App = (props) => {



// state
const [capital, setCapital] = useState(null); //Cantidad state
const [taxes, setTaxes] = useState(null); // taxes state
const [months,setMonths] = useState(null); //months state
const [total, setTotal] = useState(null)
const [errorMessage, setErrorMessage] = useState(null)

const calculate = () => {
  // console.log("capital =>", capital)
  // console.log("taxes =>", taxes)
  // console.log("months =>", months)
console.log(total)
  reset();
    if(!capital){
          setErrorMessage("Añade la cantidad que quieres solicitar")
        } else if(!taxes){
          setErrorMessage("Selecciona los intereses que tendra, si es 0 pon 0.1")
        } else if (!months){
         setErrorMessage("Selecciona los meses a los plazos que vas a pagar")
        } else {
          //console.log('ok')
          const i = taxes / 100;
          const fee = capital / (( 1 - Math.pow( i + 1, -months)) / i);
          console.log(fee.toFixed(2).replace('.',','))
            setTotal({
              monthlyfee:fee.toFixed(2).replace('.',','),
              totalPayable:(fee * months).toFixed(2).replace('.',',')
            })
            console.log((fee * months).toFixed(2).replace('.',','));
        }
}


const reset = () => {
  setErrorMessage("");
  setTotal(null)
}


  return (
    <Fragment>
      {/* <> */}
        <StatusBar barStyle='light-content' />
          <SafeAreaView style={styles.safeArea}>
            <View style={styles.background} />
            <Text style={styles.titleApp}>  Cotizador de Intereses por meses</Text>
            <Form setCapital={setCapital} 
                  setTaxes={setTaxes} 
                  setMonths={setMonths}
                  />
          </SafeAreaView>
          <ResultCalculation errorMessage={errorMessage}/>
          <Footer calculate={calculate} />
         

         
     {/* </> */}
    </Fragment>
  )
}


const styles = StyleSheet.create({
  safeArea: {
    height:290,
    alignItems:"center"
  },
  background:{
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'absolute',
    zIndex: -1,
  },

  titleApp:{
    fontSize:25,
    fontWeight:'bold',
    color:'#fff',
    marginTop:15
  }

})

export default App