/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import firebase from 'react-native-firebase'

class FirebaseService {
  constructor() {
    this.ref = firebase.firestore().collection('marks')
  }
  async load(id) {
    const doc = await this.ref.doc(id).get()
    if (doc.exists) {
      console.log('================================================')
      console.log(doc.data())
      console.log('================================================')

      return doc.data()
    } else {
      const defaultDoc = {
        name: "ABC",
        age: 2
      }   
      await this.ref.doc(id).set(defaultDoc)
      return doc 
    }   
  }
}
export const firebaseService = new FirebaseService()


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
		firebaseService.load('0k1adnhqyG6qTzJeBCZw')

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
