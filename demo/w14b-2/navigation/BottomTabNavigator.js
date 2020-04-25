import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import Contacts from '../screens/Contacts';
import AddTask from '../screens/AddTask';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Contacts';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Contacts"
        component={Contacts}
        options={{
          title: 'CONTACTS',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-list" />,
        }}
      />
      <BottomTab.Screen
        name="Add"
        component={AddTask}
        options={{
          title: 'ADD ',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-add" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Contacts':
      return 'Contacts';
    case 'Add':
      return 'Add a new contact';
  }
}
