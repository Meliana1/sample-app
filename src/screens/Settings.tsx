import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Divider, Icon, MD3Colors, Text} from 'react-native-paper';
import {deviceWidth} from '../TabBar';

const SettingsComponent = () => {
  return (
    <View style={styles.container}>
      <Text variant="titleMedium">My Account</Text>
      <Divider bold style={styles.divider} />
      <View style={styles.rowDirection}>
        <Icon
          source="account-circle-outline"
          color={MD3Colors.primary100}
          size={20}
        />
        <View>
          <Text variant="bodyMedium">Account Centre</Text>
          <Text variant="bodySmall">
            Password, security, personal details, ad preferences
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  divider: {
    marginVertical: 15,
  },
  container: {
    paddingHorizontal: deviceWidth * 0.02,
  },
  rowDirection: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default SettingsComponent;
