import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import GalleryList from '../screens/GalleryList';

const GalleryStack = createStackNavigator();

function GalleryNavigation() {
  return (
    <GalleryStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <GalleryStack.Screen name="Gallery" component={GalleryList} />
    </GalleryStack.Navigator>
  );
}

export default GalleryNavigation;
