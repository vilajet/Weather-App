import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TestScreen from './test'
import ProfileScreen from './profile'

const Stack = createStackNavigator();

export default function WeatherStack(props) {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={TestScreen} options={{ title: 'Welcome' }} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
  );
};

