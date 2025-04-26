import React from 'react';

import { View, Text } from 'react-native';
import styles from './styles';
import colors from '../../constants/colors';
import { getIconColor, getIconFromType, Icon } from './helpers';

interface Props {
  type: 'up' | 'down' | 'total';
  title: string;
  amount: string;
  lastTransatcion: string;
}

function HighlightCard({
  type,
  title,
  amount,
  lastTransatcion,
}: Props): JSX.Element {
  const renderIcon = (type: Icon) => {
    const Icon = getIconFromType(type);

    return <Icon color={getIconColor(type)} />;
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: type === 'total' ? colors.secondary : colors.shape,
        },
      ]}
    >
      <View style={styles.header}>
        <Text
          style={[
            styles.title,
            {
              color: type === 'total' ? colors.shape : colors.text_dark,
            },
          ]}
        >
          {title}
        </Text>

        {renderIcon(type)}
      </View>

      <View>
        <Text style={styles.amount}>{amount}</Text>

        <Text style={styles.lastTransaction}>{lastTransatcion}</Text>
      </View>
    </View>
  );
}

export { HighlightCard };
