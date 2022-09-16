import { StatusBar } from 'expo-status-bar';

import { HomeContainer, Title } from './styles';

export function Home() {
  return (
    <HomeContainer>
      <Title>Home!</Title>
      <StatusBar style="auto" />
    </HomeContainer>
  );
}
