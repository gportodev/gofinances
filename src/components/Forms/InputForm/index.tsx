import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { TextInputProps } from 'react-native';

import Input from '../Input';

import { Container, Error } from './styles';

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
    <Container>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input onChangeText={onChange} value={value} {...rest} />
        )}
      />
      <Error>{error && <Error> {error} </Error>}</Error>
    </Container>
  );
};
export default InputForm;
