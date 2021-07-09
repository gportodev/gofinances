import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Platform } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Dashboard from '../screens/Dashboard';
import Register from '../screens/Register';
import Resume from '../screens/Resume';

const { Navigator, Screen } = createBottomTabNavigator();

interface ParamsProps {
  size: number;
  color: string;
}

const AppRoutes: React.FC = () => {
  const theme = useTheme();

  return (
    <Navigator
      tabBarOptions={{
        activeTintColor: theme.colors.secondary,
        inactiveTintColor: theme.colors.text,
        labelPosition: 'beside-icon',
        style: {
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          height: RFValue(88),
        },
      }}
    >
      <Screen
        name="Listagem"
        component={Dashboard}
        options={{
          tabBarIcon: ({ size, color }: ParamsProps) => (
            <MaterialIcons
              name="format-list-bulleted"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Screen
        name="Cadastrar"
        component={Register}
        options={{
          tabBarIcon: ({ size, color }: ParamsProps) => (
            <MaterialIcons name="attach-money" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Resume"
        component={Resume}
        options={{
          tabBarIcon: ({ size, color }: ParamsProps) => (
            <MaterialIcons name="pie-chart" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
};

export default AppRoutes;
