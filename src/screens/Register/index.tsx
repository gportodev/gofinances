import React, { useState } from 'react';
import Input from '../../components/Forms/Input';
import Button from '../../components/Forms/Button';
import TransactionTypeButton from '../../components/Forms/TransactionTypeButton';
import CategorySelect from '../../components/Forms/CategorySelect';

import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionTypes,
} from './styles';

const Register: React.FC = () => {
  const [transactionType, setTransactionType] = useState('');

  const handleTransactionsTypeSelect = (type: 'up' | 'down') => {
    setTransactionType(type);
  };

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input placeholder="Nome" />

          <Input placeholder="Preço" />

          <TransactionTypes>
            <TransactionTypeButton
              type="up"
              title="Income"
              onPress={() => handleTransactionsTypeSelect('up')}
              isActive={transactionType === 'up'}
            />
            <TransactionTypeButton
              type="down"
              title="Outcome"
              onPress={() => handleTransactionsTypeSelect('down')}
              isActive={transactionType === 'down'}
            />
          </TransactionTypes>

          <CategorySelect title="Categoria" />
        </Fields>

        <Button title="Enviar" />
      </Form>
    </Container>
  );
};

export default Register;
