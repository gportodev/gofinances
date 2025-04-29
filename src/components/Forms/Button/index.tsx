import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import styles from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
}

const Button: React.FC<Props> = ({ title, onPress, ...rest }: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} {...rest}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
