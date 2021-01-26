import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import {Header} from 'react-native-elements';
 export default class App extends React.Component{
   constructor(){
      super();
      this.state={
        text:''
      }
   }
   render(){
     return(
        <View style={styles.container}>
          <Header backgroundColor={"white"} centerComponent={
            {
              text:'Monkey Chunky',
              style:{color:"blue",fontSize:20}
              }
            }>
            
          </Header>
          <TextInput value={this.state.text}
          onChangeText={(textObj)=>{
            this.setState({
              text:textObj
            })
          }}>

          </TextInput>
        </View>
     );
   }
 }

const  styles= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },

});
