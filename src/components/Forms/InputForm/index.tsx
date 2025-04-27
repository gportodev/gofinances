import React from 'react';
import { Controller } from 'react-hook-form';
import { Text, TextInputProps, View } from 'react-native';

import Input from '../Input';

import styles from './styles';

interface Props extends TextInputProps {
  control: Control;
  name: string;
  error: string;
}

const InputForm: React.FC<Props> = ({
  control,
  name,
  error,
  ...rest
}: Props) => {
  return (
    <View style={styles.container}>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input onChangeText={onChange} value={value} {...rest} />
        )}
      />
      {error && <Text style={styles.text}> {error} </Text>}
    </View>
  );
};
export default InputForm;
