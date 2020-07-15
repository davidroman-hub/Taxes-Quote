import React,{Fragment} from 'react'
import {StyleSheet, View, Text, SafeAreaView} from 'react-native'


const App = () => {
  return (
    <Fragment>
      {/* <> */}
          <SafeAreaView style={styles.safeArea}>
            <Text>Formulario Head </Text>
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
    backgroundColor: '#f00',
    height:200,
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    alignItems:"center"
  }
})

export default App