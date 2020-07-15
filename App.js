import React,{Fragment} from 'react'
import {StyleSheet, View, Text, SafeAreaView, StatusBar} from 'react-native'
import colors from './src/utils/colors' // all the props of colors like Sass



const App = () => {
  return (
    <Fragment>
      {/* <> */}
        <StatusBar barStyle='light-content' />
          <SafeAreaView style={styles.safeArea}>
            <Text> Formulario Head </Text>
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
  }
})

export default App