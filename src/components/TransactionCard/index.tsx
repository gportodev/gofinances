import React from 'react';
import { Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import categories from '../../utils/categories';

import styles from './styles';
import colors from '../../constants/colors';

export interface TransactionCardProps {
  type: 'positive' | 'negative';
  name: string;
  amount: string;
  category: string;
  date: string;
}

interface Props {
  data: TransactionCardProps;
}

const TransactionCard: React.FC<Props> = ({ data }: Props) => {
  const [category] = categories.filter(item => item.key === data.category);
  const { type } = data;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.name}</Text>

      <Text
        style={[
          styles.amount,
          {
            color: type === 'positive' ? colors.success : colors.attention,
          },
        ]}
      >
        {data.type === 'negative' && '- '}
        {data.amount}
      </Text>

      <View style={styles.footer}>
        <View style={styles.category}>
          <Feather style={styles.icon} name={category.icon} />
          <Text> {category.name}</Text>
        </View>
        <Text style={styles.categoryName}>{data.date}</Text>
      </View>
    </View>
  );
};

export default TransactionCard;
