import React, { useState } from 'react';
import { Alert } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import categories from '../../utils/categories';

import {
  Container,
  Header,
  Title,
  Category,
  Icon,
  Name,
  Separator,
  Footer,
  Button,
  ButtonTitle,
} from './styles';

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
    <Container>
      <Header>
        <Title>Categoria</Title>
      </Header>

      <FlatList
        data={categories}
        style={{ flex: 1, width: '100%' }}
        keyExtractor={item => item.key}
        renderItem={({ item }) => (
          <Category
            onPress={() => handleCategorySelect(item)}
            isActive={category.key === item.key}
          >
            <Icon name={item.icon} />
            <Name>{item.name}</Name>
          </Category>
        )}
        ItemSeparatorComponent={() => <Separator />}
      />

      <Footer>
        <Button isActive onPress={confirmCategorySelect}>
          <ButtonTitle>Confirmar</ButtonTitle>
        </Button>
        <Button isActive={false} onPress={goBack}>
          <ButtonTitle>Voltar</ButtonTitle>
        </Button>
      </Footer>
    </Container>
  );
};

export default CategorySelect;
