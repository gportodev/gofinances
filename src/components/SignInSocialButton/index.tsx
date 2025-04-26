import React from 'react';
import { SvgProps } from 'react-native-svg';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { View, Text } from 'react-native';
import styles from './styles';

interface Props extends RectButtonProps {
  title: string;
  svg: React.FC<SvgProps>;
}

function SignInSocialButton({ title, svg: Svg, ...rest }: Props): JSX.Element {
  return (
    <RectButton style={styles.button} {...rest}>
      <View style={styles.imageContainer}>
        <Svg />
      </View>

      <Text>{title}</Text>
    </RectButton>
  );
}

export { SignInSocialButton };
