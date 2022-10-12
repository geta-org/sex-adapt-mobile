import { useState } from 'react';
import { CardMotel } from 'src/components/Card/CardMotel';
import { SkeletonCard } from 'src/components/Card/SkeletonCard';
import { HeaderMotel } from 'src/components/HeaderMotel';
import { HomeContainer, HomeWrapper } from './styles';

export function Home() {
  const [data, setData] = useState('asa');

  return (
    <HomeContainer>
      <HeaderMotel />

      {!data && (
        <HomeWrapper
          data={[0, 1, 2]}
          keyExtractor={(index: number) => index}
          renderItem={() => <SkeletonCard />}
          showsVerticalScrollIndicator={false}
        />
      )}

      {data && (
        <HomeWrapper
          data={[0, 1, 2]}
          keyExtractor={(index: number) => index}
          renderItem={() => <CardMotel />}
          showsVerticalScrollIndicator={false}
        />
      )}
    </HomeContainer>
  );
}
