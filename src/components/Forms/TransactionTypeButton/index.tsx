import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';
import colors from '../../../constants/colors';

export type FeatherIconName = keyof typeof Feather.glyphMap;

const icons: Record<'up' | 'down', FeatherIconName> = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
};

interface Props extends RectButtonProps {
  title: string;
  type: 'up' | 'down';
  isActive: boolean;
}

const TransactionTypeButton: React.FC<Props> = ({
  type,
  title,
  isActive,
  ...rest
}: Props) => {
  const containerActive = (component: 'button' | 'icon') => {
    if (component === 'icon') {
      return type === 'up' ? colors.success : colors.attention;
    }
    return type === 'up' ? colors.success_light : colors.attention_light;
  };

  return (
    <View
      style={[
        styles.container,
        {
          borderWidth: isActive ? 0 : 1.5,
          backgroundColor: isActive ? containerActive('button') : 'transparent',
        },
      ]}
    >
      <RectButton style={styles.button} {...rest}>
        <Feather
          name={icons[type]}
          type={type}
          style={[
            styles.icon,
            {
              color: containerActive('icon'),
            },
          ]}
        />
        <Text style={styles.title}>{title}</Text>
      </RectButton>
    </View>
  );
};

export default TransactionTypeButton;
