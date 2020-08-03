import React, { Component } from 'react';
import { View, Text , StyleSheet } from 'react-native';
 
export default class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
 
  render() {
    return (
      <View style ={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}> Hello World !!!! </Text>
        </View>
        <View>
            <Text style={styles.subtitle}> Powered by React Native </Text>
        </View>
      </View>
    );
  }
}
 
 
 
const styles = StyleSheet.create({
    
    container: { 
        // backgroundColor: 'red', 
        backgroundColor : '#3498db',
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center"  
    },
    title : {
        color : 'white',
        fontSize: 35,
        fontWeight: 'bold'
    },
    subtitle : {
        color : 'white',
        fontWeight: '200'
    }, titleContainer : {
        justifyContent : 'center',
        flex : 1
    }
});