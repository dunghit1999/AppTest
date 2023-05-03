

import React from 'react'
import { Button, View, Text, StyleSheet,Image } from 'react-native';
import Home from './Home';

function Title({ navigation }) {
  return (
    
     
      <View style={styles.container}>
      <View>
        <Image style={{height:100,width:100,}} source={require ('../assets/Social-media_Tiktok-512.webp')}/>
      
        <Text style={{ color:'white', fontSize:30, fontWeight:'bold'}}> TikTok</Text>
        <Button
      title="Go to Home"
      onPress={() => navigation.navigate('Home')}
      
    />
      </View>
      
    
    </View>
      
    
  );
}
export default Title;
const styles = StyleSheet.create({
  container: {
    marginTop:20,
    flex:1,
     backgroundColor:'black',
    alignItems: 'center',
    justifyContent :'center',
    flexDirection: 'row'

    
   
  },
  
});
