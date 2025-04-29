import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';
import colors from '../../../constants/colors';

interface Props extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
}

const CategorySelectButton: React.FC<Props> = ({
  title,
  onPress,
  testID,
}: Props) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      testID={testID}
    >
      <Text style={styles.category}>{title}</Text>
      <Feather name="chevron-down" size={20} color={colors.text} />
    </TouchableOpacity>
  );
};

export default CategorySelectButton;
