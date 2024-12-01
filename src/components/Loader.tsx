import React from 'react';
import {Dimensions, Platform, View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useSelector} from 'react-redux';

function Loader() {
  const showLoad = useSelector((state: any) => state.image.showLoader);
  const height = Dimensions.get('window').height;
  const isIOS = () => {
    return Platform.OS === 'ios';
  };
  const androidHeight = height + getStatusBarHeight();
  return (
    <>
      {showLoad && (
        <View
          style={{
            height: isIOS() ? height : androidHeight,
            width: '100%',
            backgroundColor: 'black',
            opacity: 0.5,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ActivityIndicator
            size={'large'}
            animating={true}
            color={Colors.red800}
          />
        </View>
      )}
    </>
  );
}

export default Loader;
