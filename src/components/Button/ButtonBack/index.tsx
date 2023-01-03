import { useNavigation } from '@react-navigation/native'
import { CaretLeft } from 'phosphor-react-native'
import { BackContainer } from './styles'

export function ButtonBack() {
  const navigation = useNavigation()
  function handleGoBack() {
    navigation.goBack()
  }
  return (
    <BackContainer onPress={handleGoBack}>
      <CaretLeft size={32} weight="bold" />
    </BackContainer>
  )
}
