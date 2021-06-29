import React from 'react';

import {
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTransaction,
} from './styles';

interface Props {
  type: 'up' | 'down' | 'total';
  title: string;
  amount: string;
  lastTransatcion: string;
}

const icon = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
  total: 'dollar-sign',
};

const HighlightCard: React.FC<Props> = ({
  type,
  title,
  amount,
  lastTransatcion,
}: Props) => {
  return (
    <Container type={type}>
      <Header>
        <Title type={type}>{title}</Title>

        <Icon name={icon[type]} type={type} />
      </Header>

      <Footer>
        <Amount type={type}>{amount}</Amount>

        <LastTransaction type={type}>{lastTransatcion}</LastTransaction>
      </Footer>
    </Container>
  );
};

export default HighlightCard;
