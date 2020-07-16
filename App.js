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


 LogBox.ignoreLogs(["Picker has been extracted"])


const App = (props) => {



// state
const [capital, setCapital] = useState(null); //Cantidad state
const [taxes, setTaxes] = useState(null); // taxes state
const [months,setMonths] = useState(null); //months state


const calculate = () => {
  console.log("capital =>", capital)
  console.log("taxes =>", taxes)
  console.log("months =>", months)
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
          <Footer calculate={calculate} />
          <View>
            <Text>Resultado</Text>
          </View>

         
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