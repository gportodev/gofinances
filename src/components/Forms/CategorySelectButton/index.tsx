import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Category, Icon } from './styles';

interface Props extends RectButtonProps {
  title: string;
  onPress: () => void;
}

const CategorySelectButton: React.FC<Props> = ({
  title,
  onPress,
  testID,
}: Props) => {
  return (
    <Container onPress={onPress} testID={testID}>
      <Category>{title}</Category>
      <Icon name="chevron-down" />
    </Container>
  );
};

export default CategorySelectButton;
