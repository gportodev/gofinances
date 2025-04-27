import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';

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
    <RectButton style={styles.container} onPress={onPress} testID={testID}>
      <Text style={styles.category}>{title}</Text>
      <Feather name="chevron-down" size={20} />
    </RectButton>
  );
};

export default CategorySelectButton;
