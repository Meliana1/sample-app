import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CameraPreview from '../components/CameraPreview';
import CameraComponent from '../components/CameraComponent';
import GalleryList from '../screens/GalleryList';
import PhotoForm from '../screens/PhotoForm';

const UploadStack = createStackNavigator();

function UploadFormNavigation() {
  return (
    <UploadStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <UploadStack.Screen name="Home" component={PhotoForm} />
      <UploadStack.Screen name="Camera" component={CameraPreview} />
      <UploadStack.Screen name="CameraComponent" component={CameraComponent} />
    </UploadStack.Navigator>
  );
}

export default UploadFormNavigation;
