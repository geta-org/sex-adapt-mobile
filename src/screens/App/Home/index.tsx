import SkeletonContent from 'react-native-skeleton-content';
import { CardMotel } from 'src/components/Card/CardMotel';
import { HeaderMotel } from 'src/components/HeaderMotel';
import { HomeContainer, HomeWrapper } from './styles';

export function Home() {
  return (
    <HomeContainer>
      <HeaderMotel />
      <SkeletonContent
        containerStyle={{ flex: 1, width: 300 }}
        boneColor="#121212"
        highlightColor="#333333"
        // animationType="pulse"
        isLoading={true}>
        <HomeWrapper
          data={[0, 1, 2, 3, 4, 5]}
          keyExtractor={(index: number) => index}
          renderItem={() => <CardMotel />}
          showsVerticalScrollIndicator={false}
        />
      </SkeletonContent>
    </HomeContainer>
  );
}
