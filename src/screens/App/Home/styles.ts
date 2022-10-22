import styled from 'styled-components/native'

export const HomeContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray_200};
  align-items: center;
  font-family: ${({ theme }) => theme.font_family.bold};
`

export const HomeWrapper = styled.FlatList`
  padding-top: 70px;
  padding-bottom: 64px;
`
