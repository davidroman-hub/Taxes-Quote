import React,{Fragment} from 'react'
import {StyleSheet, View, Text, SafeAreaView, StatusBar} from 'react-native'
import colors from './src/utils/colors' // all the props of colors like Sass
import Form from './src/components/Form'


const App = () => {
  return (
    <Fragment>
      {/* <> */}
        <StatusBar barStyle='light-content' />
          <SafeAreaView style={styles.safeArea}>
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
    backgroundColor: colors.PRIMARY_COLOR ,
    height:200,
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    alignItems:"center"
  },
  
  titleApp:{
    fontSize:25,
    fontWeight:'bold',
    color:'#fff',
    marginTop:15
  }

})

export default App