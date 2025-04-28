import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Platform } from 'react-native';
import Dashboard from '../screens/Dashboard';
import Register from '../screens/Register';
import { Resume } from '../screens/Resume';
import colors from '../constants/colors';
import { Fonts } from '../constants/fonts';

const { Navigator, Screen } = createBottomTabNavigator();

const labelStyle = {
  fontSize: 10,
  fontFamily: Fonts.regular,
};

function AppRoutes(): JSX.Element {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.secondary,
        tabBarInactiveTintColor: colors.text,
        tabBarStyle: {
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          height: 64,
        },
      }}
    >
      <Screen
        name="Listagem"
        component={Dashboard}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="format-list-bulleted"
              size={size}
              color={color}
            />
          ),
          tabBarLabelStyle: labelStyle,
        }}
      />

      <Screen
        name="Cadastrar"
        component={Register}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="attach-money" size={size} color={color} />
          ),
          tabBarLabelStyle: labelStyle,
        }}
      />
      <Screen
        name="Resume"
        component={Resume}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="pie-chart" size={size} color={color} />
          ),
          tabBarLabelStyle: labelStyle,
        }}
      />
    </Navigator>
  );
}

export { AppRoutes };
