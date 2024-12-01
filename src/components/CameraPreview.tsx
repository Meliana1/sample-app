import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Button, IconButton, Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

const CameraPreview = (props: any) => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  return (
    <View>
      {!props.img ? (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <IconButton
            icon={'camera'}
            size={30}
            onPress={() => {
              navigation.navigate('CameraComponent');
            }}
          />
        </View>
      ) : (
        <View
          style={{
            alignItems: 'center',
          }}>
          <Image
            style={{width: 300, height: 300}}
            source={{uri: props.img.uri}}
          />
        </View>
      )}
      {props.img && (
        <Button
          style={{marginVertical: 10}}
          onPress={() => {
            navigation.navigate('CameraComponent');
          }}>
          Change Image
        </Button>
      )}
    </View>
  );
};

export default CameraPreview;
