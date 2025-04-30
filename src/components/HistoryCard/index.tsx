import React from 'react';

import { Text, View } from 'react-native';
import styles from './styles';

interface Props {
  title: string;
  amount: string;
  color: string;
}

function HistoryCard({ title, amount, color }: Props): JSX.Element {
  return (
    <View
      style={[
        styles.container,
        {
          borderLeftColor: color,
        },
      ]}
    >
      <Text>{title}</Text>
      <Text>{amount}</Text>
    </View>
  );
}

export { HistoryCard };
