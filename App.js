import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import SignUp from "./src/SignUpPage";
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import LoginPage from "./src/LoginPage";
import Details from "./src/DetailsScreen";
import VideoScreen from "./src/VideoScreen";


export class Page extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return <View style={styles.container}>
    <SignUp />
    <View style={styles.view1}>
    <TouchableOpacity 
    style={styles.login}
    onPress={()=>this.props.navigation.navigate('Login')}> 
    <Text style={styles.ltext}>Already have an account?Login</Text>
    </TouchableOpacity>
    </View>
     
    </View>
  }
};



export default class App extends React.Component{
  render(){
    return(

      
      <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen name="Login" 
        component={LoginPage} 
        options={{
          title: 'Login',
          headerStyle: {
            backgroundColor: '#004B3A',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:25,
          },
        }}
        />
        <Stack.Screen name="Home" 
        component={Page} 
        options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: '#004B3A',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:25,
          },
        }}
        />
        <Stack.Screen name="Details" 
        component={Details}
        options={{
          title: 'Details',
          headerStyle: {
            backgroundColor: '#009387',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:25,
          },
        }}
        />
        <Stack.Screen name="VideoScreen" 
        component={VideoScreen}
        options={{
          title: 'VideoScreen',
          headerStyle: {
            backgroundColor: '#009387',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:25,
          },
        }}
        />
      </Stack.Navigator>
      
    </NavigationContainer>
    );
  }
}

const Stack=createStackNavigator();


const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    flex:1,
    justifyContent:'center',
    backgroundColor:'#007664',
    paddingLeft:60,
    paddingRight:60,
  },
  textinput:{
      alignSelf:'stretch',
      height:60,
      marginBottom:30,
      borderBottomColor:'rgb(255,255,255)',
      borderBottomWidth:1
  },
  login:{
    height:45,
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center',
    borderRadius:15,
  },
  view1:{
    paddingTop:20,
    alignSelf:'stretch',
    paddingLeft:10,
    justifyContent:'center',
  },
   ltext:{
    color:'white',
    alignSelf:'center',
    paddingTop:1,
    fontSize:20,
    paddingBottom:30,
    textDecorationLine:'underline',
  },
});