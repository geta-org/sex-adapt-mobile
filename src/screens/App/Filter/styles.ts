import styled from 'styled-components/native'

export const FilterContainer = styled.View`
  margin-top: 16px;
  padding: 0 32px;
  flex: 1;
`
export const Label = styled.Text`
  font-family: ${({ theme }) => theme.font_family.bold};
  font-size: ${({ theme }) => theme.font_size.md};
  color: ${({ theme }) => theme.colors.gray_1000};
`

export const ShowMeWrapper = styled.View`
  display: flex;
  flex-direction: row;

  margin-left: 25px;
  margin-top: 8px;
`

export const ButtonRight = styled.View`
  margin-left: 18px;
`
