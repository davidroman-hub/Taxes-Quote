import React,{Fragment} from 'react';

import {StyleSheet,
        View,
        Text,
        SafeAreaView, 
        StatusBar, 
        LogBox, 
        ViewBase
      } 
from 'react-native';

import colors from './src/utils/colors' ;// all the props of colors like Sass
import Form from './src/components/Form';

 LogBox.ignoreLogs(["Picker has been extracted"])


const App = () => {
  return (
    <Fragment>
      {/* <> */}
        <StatusBar barStyle='light-content' />
          <SafeAreaView style={styles.safeArea}>
            <View style={styles.background} />
            <Text style={styles.titleApp}>  Cotizador de Intereses por meses</Text>
            <Form/>
          </SafeAreaView>

          <View>
            <Text>Resultado</Text>
          </View>

          <View>
            <Text>Footer</Text>
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