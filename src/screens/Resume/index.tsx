import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useCallback } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { addMonths, subMonths, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { VictoryPie } from 'victory-native';

import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { ActivityIndicator, View, Text, ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { HistoryCard } from '../../components/HistoryCard';
import categories from '../../utils/categories';

import styles from './styles';
import { useAuth } from '../../hooks/auth';
import colors from '../../constants/colors';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  SadIcon,
} from '../../assets/icons/Loader';

interface TransactionData {
  type: 'positive' | 'negative';
  name: string;
  amount: string;
  category: string;
  date: string;
}

interface CategoryData {
  key: string;
  name: string;
  color: string;
  total: number;
  totalFormatted: string;
  percent: string;
}

function Resume(): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [totalByCategories, setTotalByCategories] = useState<CategoryData[]>(
    [],
  );
  const tabHeight = useBottomTabBarHeight();

  const { user: userData } = useAuth();

  const handleDateChange = (action: 'next' | 'prev') => {
    if (action === 'next') {
      setSelectedDate(addMonths(selectedDate, 1));
    } else {
      setSelectedDate(subMonths(selectedDate, 1));
    }
  };

  async function loadData() {
    setIsLoading(true);

    const dataKey = `@gofinances:transactions_user:${userData?.user.id}`;
    const response = await AsyncStorage.getItem(dataKey);
    const responseFormatted = response ? JSON.parse(response) : [];

    const expensives = responseFormatted.filter(
      (expensive: TransactionData) =>
        expensive.type === 'negative' &&
        new Date(expensive.date).getMonth() === selectedDate.getMonth() &&
        new Date(expensive.date).getFullYear() === selectedDate.getFullYear(),
    );

    const expensivesTotal = expensives.reduce(
      (accumulator: number, expensive: TransactionData) => {
        return accumulator + Number(expensive.amount);
      },
      0,
    );

    const totalByCategory: CategoryData[] = [];

    categories.forEach(category => {
      let categorySum = 0;

      expensives.forEach((expensive: TransactionData) => {
        if (expensive.category === category.key) {
          categorySum += Number(expensive.amount);
        }
      });

      const percent = `${((categorySum / expensivesTotal) * 100).toFixed(0)}%`;

      if (categorySum > 0) {
        const totalFormatted = categorySum.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        });

        totalByCategory.push({
          key: category.key,
          name: category.name,
          color: category.color,
          total: categorySum,
          totalFormatted,
          percent,
        });
      }
    });

    setTotalByCategories(totalByCategory);
    setIsLoading(false);
  }

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, []),
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Resumo por categoria</Text>
      </View>
      {isLoading ? (
        <View style={styles.loadContainer}>
          <ActivityIndicator color={colors.primary} size="large" />
        </View>
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 24,
            paddingBottom: tabHeight,
          }}
        >
          <View style={styles.monthSelect}>
            <BorderlessButton onPress={() => handleDateChange('prev')}>
              <ArrowLeftIcon />
            </BorderlessButton>
            <Text style={styles.month}>
              {format(selectedDate, 'MMMM, yyyy', { locale: ptBR })}{' '}
            </Text>

            <BorderlessButton onPress={() => handleDateChange('next')}>
              <ArrowRightIcon />
            </BorderlessButton>
          </View>

          {totalByCategories.length > 0 ? (
            <View style={styles.chartContainer}>
              <VictoryPie
                data={totalByCategories}
                colorScale={totalByCategories.map(category => category.color)}
                style={{
                  labels: {
                    fontSize: RFValue(18),
                    fontWeight: 'bold',
                    fill: colors.shape,
                  },
                }}
                labelRadius={50}
                x="percent"
                y="total"
              />
            </View>
          ) : (
            <View style={styles.warning}>
              <SadIcon width={150} height={150} />
              <Text style={styles.warningText}>Sem dados cadastrados</Text>
            </View>
          )}

          {totalByCategories.map(item => (
            <HistoryCard
              key={item.key}
              title={item.name}
              amount={item.totalFormatted}
              color={item.color}
            />
          ))}
        </ScrollView>
      )}
    </View>
  );
}

export { Resume };
