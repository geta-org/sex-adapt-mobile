import { Text } from 'react-native';

import { theme } from '../../styles/theme';

interface PriceProps {
  cost: number;
}

export function PriceRating({ cost }: PriceProps) {
  return (
    <Text accessible={true} style={{ fontWeight: 'bold' }}>
      <Text
        style={{
          color: cost > 0 ? theme.colors.red_900 : theme.colors.gray_500
        }}>
        $
      </Text>
      <Text
        style={{
          color: cost > 1 ? theme.colors.red_900 : theme.colors.gray_500
        }}>
        $
      </Text>
      <Text
        style={{
          color: cost > 2 ? theme.colors.red_900 : theme.colors.gray_500
        }}>
        $
      </Text>
    </Text>
  );
}
