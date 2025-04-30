import React from 'react';
import { TextInput, TextInputProps } from 'react-native';

import styles from './styles';
import colors from '../../../constants/colors';

// type Props = TextInputProps;
interface Props extends TextInputProps {
  active?: boolean;
}

const Input: React.FC<Props> = ({ active = false, ...rest }: Props) => {
  return (
    <TextInput
      style={[
        styles.input,
        active && {
          borderWidth: 3,
          borderColor: colors.attention,
        },
      ]}
      {...rest}
    />
  );
};

export default Input;
