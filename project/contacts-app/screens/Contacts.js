import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Button, Platform, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Card } from 'react-native-elements';
import { trackPromise, usePromiseTracker} from 'react-promise-tracker';

import { MonoText } from '../components/StyledText';

const HEADERS = {
  "method": "GET",
  "headers":  {
    "API": "barrett",
    "Content-Type": "application/json"
  }
}

export default function Contacts(){
  
  const { promiseInProgress } = usePromiseTracker();
  const[contacts, setContacts] = React.useState([])
  


React.useEffect(() => {
  console.log("Use effect")
  trackPromise(fetch('http://plato.mrl.ai:8080/contacts',HEADERS
  )
  .then(response => response.json())
  .then(body => setContacts(body.contacts)))
}, [])

return (
  <View style={styles.container}>
  <ScrollView>
    
    { promiseInProgress ?
    <ActivityIndicator />
  :
    contacts.map((contact, i)=>
    <Card key={i} title={contact.name} text={contact.number}>
     
      <Text>{contact.number}</Text>
      <br></br>
      <Button title="Delete"></Button>
      
    </Card>
    
     )
    }
  </ScrollView>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  ContactsFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
