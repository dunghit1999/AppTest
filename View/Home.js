import React from "react";
import { Text,View,StyleSheet, TouchableOpacity } from "react-native";
function Home({ navigation }){
    return(
        <View>
            <View></View>
            
            <View style ={styles.End}>
               <Text>abd</Text>
            </View>
        </View>
    )
}
export default Home;
const styles =StyleSheet.create({
  End :{
    height:'30%',
    backgroundColor: 'black',
    flexDirection: 'row',
    
  },
   button: {
    marginBottom: 30,
    width: '50%',
    alignItems: 'center',
    flex:1
    
  },button1: {
    marginBottom: 30,
    width: '50%',
    alignItems: 'center',
    
    
  },button2: {
    marginBottom: 30,
    width: '50%',
    alignItems: 'center',
    
    
  },button3: {
    marginBottom: 30,
    width: '50%',
    alignItems: 'center',
    
    
  },button: {
    marginBottom: 30,
    width: '50%',
    alignItems: 'center',
    
    
  },
  buttonText : {
    textAlign: 'center',
    color: 'white',
    fontSize:10
  }
  
})