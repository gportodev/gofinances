import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignIn } from '../screens/SignIn';
import colors from '../constants/colors';

const { Navigator, Screen } = createNativeStackNavigator();

function AuthRoutes(): JSX.Element {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        statusBarBackgroundColor: colors.primary,
      }}
      initialRouteName="SignIn"
    >
      <Screen name="SignIn" component={SignIn} />
    </Navigator>
  );
}

export { AuthRoutes };
