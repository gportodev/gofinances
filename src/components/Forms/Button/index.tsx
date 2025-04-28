import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { Text } from 'react-native';

import styles from './styles';

interface Props extends RectButtonProps {
  title: string;
  onPress: () => void;
}

const Button: React.FC<Props> = ({ title, onPress, ...rest }: Props) => {
  return (
    <RectButton style={styles.container} onPress={onPress} {...rest}>
      <Text style={styles.title}>{title}</Text>
    </RectButton>
  );
};

export default Button;
