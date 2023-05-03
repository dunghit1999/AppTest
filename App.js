import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Title from './View/Title';
import Home from './View/Home';
import notification from './View/notification';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();
function MyDrawer({navigation}) {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="notification" component={notification} />
    </Drawer.Navigator>
  );
}


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Title" component={Title} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="MyDrawer" component={MyDrawer} options={{ headerShown: false }}/>
      
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;