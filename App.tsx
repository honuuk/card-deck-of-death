import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Landing from './src/containers/LandingContainer';
import Record from './src/containers/RecordContainer';
import Work from './src/containers/WorkContainer';
import { RootStackParamList } from './types';

export default function App() {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Landing'>
        <Stack.Screen name='Landing' component={Landing} />
        <Stack.Screen name='Work' component={Work} />
        <Stack.Screen name='Record' component={Record} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
