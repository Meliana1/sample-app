import React, {useEffect, useState} from 'react';
import {View, Text, Button, Platform} from 'react-native';
import CameraKitCameraScreen from 'react-native-camera-kit';
import {PERMISSIONS, RESULTS, check, request} from 'react-native-permissions';

const CameraComponent = () => {
  const [hasPermission, setHasPermission] = useState(false);

  // Function to check and request permissions

  const getPermissionChecking = async () => {
    return (await Platform.OS) === 'ios'
      ? check(PERMISSIONS.IOS.CAMERA)
      : check(PERMISSIONS.ANDROID.CAMERA);
  };

  const requestPermission = async () => {
    return await request(
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.CAMERA
        : PERMISSIONS.ANDROID.CAMERA,
    );
  };

  const isPermissionGranted = async (res: any) => {
    return await (res === RESULTS.GRANTED);
  };

  const isPermissionDenied = async (req: any) => {
    return await (req === RESULTS.DENIED ||
      req === RESULTS.UNAVAILABLE ||
      req === RESULTS.BLOCKED);
  };

  const checkPermissions = async () => {
    let permitStatus: boolean = false;
    let cameraPermissionStatus = await getPermissionChecking();

    if (cameraPermissionStatus === RESULTS.DENIED) {
      const req = await requestPermission();
      permitStatus = await isPermissionGranted(req);
    } else if (cameraPermissionStatus === RESULTS.GRANTED) {
      permitStatus = true;
    } else if (await isPermissionDenied(cameraPermissionStatus)) {
      permitStatus = true;
      await requestPermission();
      const permit = await getPermissionChecking();
      if (await isPermissionDenied(permit)) {
        permitStatus = false;
      }
    }
    setHasPermission(permitStatus);
  };

  useEffect(() => {
    checkPermissions();
  }, []);

  if (!hasPermission) {
    return (
      <View>
        <Text>No permission to access the camera</Text>
        <Button title="Request Permission" onPress={checkPermissions} />
      </View>
    );
  }

  return (
    <CameraKitCameraScreen
      cameraOptions={{
        flashMode: 'auto',
        focusMode: 'on',
        zoomMode: 'on',
      }}
      onBottomButtonPressed={(event: any) => console.log(event)}
    />
  );
};

export default CameraComponent;
