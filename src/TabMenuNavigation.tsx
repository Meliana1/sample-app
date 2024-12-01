import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {StyleSheet, View} from 'react-native';
import TabBar from './TabBar';
import UploadFormNavigation from './navigations/UploadFormNavigation';
import {BOTTOM_NAVIGATION_NAME} from './constant/General.constant';
import GalleryNavigation from './navigations/GalleryNavigation';
import Settings from './screens/Settings';

const Tab = createBottomTabNavigator();

const tabBar = (props: BottomTabBarProps) => <TabBar {...props} />;

const Tabs = () => {
  return (
    <View style={styles.viewContainer}>
      <Tab.Navigator
        tabBar={tabBar}
        screenOptions={{
          tabBarShowLabel: true,
        }}>
        <Tab.Screen
          name="Home"
          component={GalleryNavigation}
          options={{
            tabBarLabel: BOTTOM_NAVIGATION_NAME.HOME,
          }}
        />
        <Tab.Screen
          name="Upload"
          component={UploadFormNavigation}
          options={{
            tabBarLabel: BOTTOM_NAVIGATION_NAME.UPLOAD,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarLabel: BOTTOM_NAVIGATION_NAME.SETTING,
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#fffff',
  },
});
export default Tabs;
