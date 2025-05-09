import { FeatherIconName } from '../components/Forms/TransactionTypeButton';

type Categories = {
  key: string;
  name: string;
  icon: FeatherIconName;
  color: string;
};

const categories: Categories[] = [
  { key: 'purchases', name: 'Compras', icon: 'shopping-bag', color: '#5636D3' },
  { key: 'food', name: 'Alimentação', icon: 'coffee', color: '#FF872C' },
  { key: 'salary', name: 'Salário', icon: 'dollar-sign', color: '#12A454' },
  { key: 'car', name: 'Carro', icon: 'crosshair', color: '#E83F5B' },
  { key: 'leisure', name: 'Lazer', icon: 'heart', color: '#26195C' },
  { key: 'studies', name: 'Estudos', icon: 'book', color: '#9C001A' },
  { key: 'energy', name: 'Energia', icon: 'zap', color: '#F2CE0E' },
  { key: 'water', name: 'Água', icon: 'droplet', color: '#2079FF' },
];

export default categories;
