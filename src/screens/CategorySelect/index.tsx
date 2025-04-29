import React, { useState } from 'react';
import { Alert, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import categories from '../../utils/categories';

import styles from './styles';
import colors from '../../constants/colors';

interface Category {
  key: string;
  name: string;
}

interface Props {
  category: Category;
  setCategory: (category: Category) => void;
  closeSelectCategory: () => void;
}

const CategorySelect: React.FC<Props> = ({
  category,
  setCategory,
  closeSelectCategory,
}: Props) => {
  const [selected, setSelected] = useState<boolean>(false);

  const handleCategorySelect = (categ: Category) => {
    setCategory(categ);
  };

  const confirmCategorySelect = () => {
    if (category.key !== 'category') {
      setSelected(!selected);
      closeSelectCategory();
    } else {
      Alert.alert('Erro', 'É preciso selecionar a categoria.');
    }
  };

  const goBack = () => {
    if (!selected) {
      const categ = {
        key: 'category',
        name: 'Categoria',
      };

      setCategory(categ);
      closeSelectCategory();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Categoria</Text>
      </View>

      <FlatList
        data={categories}
        style={{ flex: 1, width: '100%' }}
        keyExtractor={item => item.key}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handleCategorySelect(item)}
            style={[
              styles.category,
              {
                backgroundColor:
                  category.key === item.key
                    ? colors.secondary_light
                    : colors.background,
              },
            ]}
          >
            <Feather
              name={item.icon}
              size={16}
              style={{
                margin: 16,
              }}
            />

            <Text style={styles.name}>{item.name}</Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />

      <View style={styles.footer}>
        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor: colors.success,
            },
          ]}
          onPress={() => confirmCategorySelect()}
        >
          <Text style={styles.buttonTitle}>Confirmar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor: colors.secondary,
            },
          ]}
          onPress={goBack}
        >
          <Text style={styles.buttonTitle}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CategorySelect;
