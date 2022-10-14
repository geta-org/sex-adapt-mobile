import { PriceContent, PriceText } from './styles';

interface PriceProps {
  cost: number;
}

export function PriceRating({ cost }: PriceProps) {
  return (
    <PriceContent>
      <PriceText isActive={cost > 0}>$</PriceText>
      <PriceText isActive={cost > 1}>$</PriceText>
      <PriceText isActive={cost > 2}>$</PriceText>
    </PriceContent>
  );
}
