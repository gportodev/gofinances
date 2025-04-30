import { FC, SVGProps } from 'react';

import {
  ArrowDownCircleIcon,
  ArrowUpCircleIcon,
  DollarIcon,
} from '../../assets/icons/Loader';
import colors from '../../constants/colors';

type Icon = 'up' | 'down' | 'total';

const iconMap: Record<Icon, FC<SVGProps<SVGSVGElement>>> = {
  up: ArrowUpCircleIcon as FC<SVGProps<SVGSVGElement>>,
  down: ArrowDownCircleIcon as FC<SVGProps<SVGSVGElement>>,
  total: DollarIcon as FC<SVGProps<SVGSVGElement>>,
};

function getIconFromType(type: Icon): FC<SVGProps<SVGSVGElement>> {
  return iconMap[type];
}

const iconColor: Record<Icon, string> = {
  up: colors.success,
  down: colors.attention,
  total: colors.shape,
};

function getIconColor(type: Icon): string {
  return iconColor[type];
}

export { Icon, getIconFromType, getIconColor };
