import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import {Button, StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import {Input, Card } from 'react-native-elements';

const HEADERS = {
  "method": "GET",
  "headers":  {
    "API": "barrett",
    "Content-Type": "application/json"
  }
}

export default function newContact() {
  const addUser = React.useCallback(()=>
  {
    fetch('http://plato.mrl.ai:8080/contacts/add', HEADERS
    )
    .then(response => response.json())
    .then(body => console.log(body))
  },
   [])

   


  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Input placeholder="Contact Name"
        onChangeText={text => this.handleTextInput(text)} />  
      <Input placeholder="Phone Number"
        onChangeText={text => this.handleTextInput(text)} /> 
   <Button title="Add User" onPress={addUser} />
    </ScrollView>
  );
}

function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});
