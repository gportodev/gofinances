import React from 'react';
import HighlightCard from '../../components/HighlightCard';
import TransactionCard from '../../components/TransactionCard';

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  Text,
  Icon,
  HighlightCards,
  Transactions,
  Title,
} from './styles';

const Dashboard: React.FC = () => (
  <Container>
    <Header>
      <UserWrapper>
        <UserInfo>
          <Photo
            source={{
              uri: 'https://avatars.githubusercontent.com/u/34238796?v=4',
            }}
          />

          <User>
            <Text>Olá,</Text>
            <Text>Gabriel</Text>
          </User>
        </UserInfo>

        <Icon name="power" />
      </UserWrapper>
    </Header>

    <HighlightCards>
      <HighlightCard
        type="up"
        title="Entradas"
        amount="R$ 17.400,00"
        lastTransatcion="Última entrada dia 13 de abril"
      />

      <HighlightCard
        type="down"
        title="Saídas"
        amount="R$ 1.259,00"
        lastTransatcion="Última saída dia 03 de abril"
      />

      <HighlightCard
        type="total"
        title="Total"
        amount="R$ 16.141,00"
        lastTransatcion="01 à 16 de abril"
      />
    </HighlightCards>

    <Transactions>
      <Title>Listagem</Title>

      <TransactionCard />
    </Transactions>
  </Container>
);

export default Dashboard;
