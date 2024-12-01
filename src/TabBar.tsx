import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {EdgeInsets, useSafeAreaInsets} from 'react-native-safe-area-context';
import {BOTTOM_NAVIGATION_NAME} from './constant/General.constant';

export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;
const BottomTabBar = ({state, descriptors, navigation}: BottomTabBarProps) => {
  const getLabel = (route: any, options: any) => {
    if (options?.tabBarLabel) {
      return options.tabBarLabel;
    } else if (options?.title) {
      return options?.title;
    } else {
      return route.name;
    }
  };
  const getImage = (options: any) => {
    switch (options?.tabBarLabel) {
      case BOTTOM_NAVIGATION_NAME.HOME:
        return require('./assets/images/homeLine.png');
      case BOTTOM_NAVIGATION_NAME.UPLOAD:
        return require('./assets/images/more.png');
      case BOTTOM_NAVIGATION_NAME.SETTING:
        return require('./assets/images/setting.png');
      default:
        return require('./assets/images/homeLine.png');
    }
  };
  const styles = createStyles(useSafeAreaInsets());
  return (
    <View style={styles.tabContainer}>
      <View style={{flexDirection: 'row'}}>
        {state.routes.map((route: any, index: any) => {
          const {options} = descriptors[route.key];
          const label = getLabel(route, options);

          const isFocused = state.index === index;

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityLabel={options.tabBarAccessibilityLabel}
              onPress={() => navigation.navigate(route.name)}
              style={styles.touchableOpacity}
              key={route.key}>
              {/* <View> */}
              <Image
                source={getImage(options)}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: isFocused ? '#e32f45' : '#748c94',
                }}
              />
              <Text
                style={{
                  fontSize: deviceWidth * 0.025,
                  color: isFocused ? '#e32f45' : '#748c94',
                }}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const createStyles = (insets: EdgeInsets) =>
  StyleSheet.create({
    tabContainer: {
      backgroundColor: '#00000',
      width: deviceWidth,
      paddingTop: deviceWidth * 0.03,
    },
    touchableOpacity: {
      flex: 1,
      alignItems: 'center',
      paddingBottom: insets.bottom || deviceWidth * 0.02,
    },
    tabItemContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: insets.bottom || deviceWidth * 0.02,
    },
  });

export default BottomTabBar;
