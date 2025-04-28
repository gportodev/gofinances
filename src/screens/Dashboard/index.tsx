import React, { useState, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  ActivityIndicator,
  View,
  Image,
  Text,
  ScrollView,
  FlatList,
} from 'react-native';

import { useFocusEffect } from '@react-navigation/native';

import { BorderlessButton } from 'react-native-gesture-handler';
import { HighlightCard } from '../../components/HighlightCard';

import TransactionCard, {
  TransactionCardProps,
} from '../../components/TransactionCard';

import styles from './styles';
import { useAuth } from '../../hooks/auth';
import colors from '../../constants/colors';
import { PowerIcon } from '../../assets/icons/Loader';

export interface DataListProps extends TransactionCardProps {
  id: string;
}

interface HighlightProps {
  amount: string;
  lastTransaction: string;
}

interface HighlightData {
  entries: HighlightProps;
  expensives: HighlightProps;
  total: HighlightProps;
}

const Dashboard: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [transactions, setTransactions] = useState<DataListProps[]>([]);
  const [highlightData, setHighlightData] = useState<HighlightData>(
    {} as HighlightData,
  );

  const { signOut, user: data } = useAuth();

  function getLastTransactionDate(
    collection: DataListProps[],
    type: 'positive' | 'negative',
  ) {
    const collectionFilttered = collection.filter(
      transaction => transaction.type === type,
    );

    if (collectionFilttered.length === 0) {
      return 0;
    }

    const lastTransaction = new Date(
      Math.max(
        ...collectionFilttered.map(transaction =>
          new Date(transaction.date).getTime(),
        ),
      ),
    );

    return `${lastTransaction.getDate()} de ${lastTransaction.toLocaleString(
      'pt-BR',
      {
        month: 'long',
      },
    )}`;
  }

  async function loadTransactions() {
    const dataKey = `@gofinances:transactions_user:${data?.user.id}`;
    const response = await AsyncStorage.getItem(dataKey);
    const transactionsList = response ? JSON.parse(response) : [];

    let entriesTotal = 0;
    let expensiveTotal = 0;

    const transactionsFormatted: DataListProps[] = transactionsList.map(
      (item: DataListProps) => {
        if (item.type === 'positive') {
          entriesTotal += Number(item.amount);
        } else {
          expensiveTotal += Number(item.amount);
        }

        const amount = Number(item.amount).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        });

        const date = Intl.DateTimeFormat('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: '2-digit',
        }).format(new Date(item.date));

        return {
          id: item.id,
          name: item.name,
          amount,
          type: item.type,
          category: item.category,
          date,
        };
      },
    );

    setTransactions(transactionsFormatted);

    const lastTransactionEntries = getLastTransactionDate(
      transactionsList,
      'positive',
    );

    const lastTransactionExpensives = getLastTransactionDate(
      transactionsList,
      'negative',
    );

    const totalInterval =
      lastTransactionExpensives === 0
        ? 'Não há movimentações'
        : `01 a ${lastTransactionExpensives}`;

    const total = entriesTotal - expensiveTotal;

    setHighlightData({
      entries: {
        amount: entriesTotal.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }),
        lastTransaction:
          lastTransactionEntries === 0
            ? 'Não há transações'
            : `Última entrada dia ${lastTransactionEntries}`,
      },
      expensives: {
        amount: expensiveTotal.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }),
        lastTransaction:
          lastTransactionExpensives === 0
            ? 'Não há transações'
            : `Última saída dia ${lastTransactionExpensives}`,
      },
      total: {
        amount: total.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }),
        lastTransaction: totalInterval,
      },
    });

    setIsLoading(false);
  }

  useFocusEffect(
    useCallback(() => {
      loadTransactions();
    }, []),
  );

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.loadContainer}>
          <ActivityIndicator color={colors.primary} size="large" />
        </View>
      ) : (
        <>
          <View style={styles.header}>
            <View style={styles.userWrapper}>
              <View style={styles.userInfo}>
                <Image
                  style={styles.photo}
                  source={{
                    uri: data?.user.photo || '',
                  }}
                />

                <View style={styles.user}>
                  <Text style={styles.text}>Olá,</Text>
                  <Text style={styles.text}>{data?.user.name}</Text>
                </View>
              </View>

              <BorderlessButton onPress={signOut}>
                <PowerIcon color={colors.secondary} />
              </BorderlessButton>
            </View>
          </View>

          <ScrollView
            style={styles.highlightCards}
            contentContainerStyle={styles.highlightCardsContent}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <HighlightCard
              type="up"
              title="Entradas"
              amount={highlightData.entries.amount}
              lastTransaction={highlightData.entries.lastTransaction}
            />

            <HighlightCard
              type="down"
              title="Saídas"
              amount={highlightData.expensives.amount}
              lastTransaction={highlightData.expensives.lastTransaction}
            />

            <HighlightCard
              type="total"
              title="Total"
              amount={highlightData.total.amount}
              lastTransaction={highlightData.total.lastTransaction}
            />
          </ScrollView>

          <View style={styles.transactions}>
            <FlatList
              data={transactions}
              keyExtractor={item => item.id}
              ListHeaderComponent={<Text style={styles.title}>Listagem</Text>}
              renderItem={({ item }) => <TransactionCard data={item} />}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default Dashboard;
