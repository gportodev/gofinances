import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';
import colors from '../../../constants/colors';

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
      <Feather name="chevron-down" size={20} color={colors.text} />
    </RectButton>
  );
};

export default CategorySelectButton;
