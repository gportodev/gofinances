import React from 'react';
import { SvgProps } from 'react-native-svg';

import {
  View,
  Text,
  TouchableOpacityProps,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
  svg: React.FC<SvgProps>;
}

function SignInSocialButton({ title, svg: Svg, ...rest }: Props): JSX.Element {
  return (
    <TouchableOpacity style={styles.button} {...rest}>
      <View style={styles.imageContainer}>
        <Svg />
      </View>

      <Text>{title}</Text>
    </TouchableOpacity>
  );
}

export { SignInSocialButton };
