import styled from 'styled-components/native'

export const FilterContainer = styled.View`
  padding: 16px 56px 0 32px;
  flex: 1;

  background-color: ${({ theme }) => theme.colors.white};
`
export const Label = styled.Text`
  font-family: ${({ theme }) => theme.font_family.bold};
  font-size: ${({ theme }) => theme.font_size.md};
  color: ${({ theme }) => theme.colors.gray_1000};
`

export const ShowMeWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  margin-top: ${({ theme }) => theme.margins.sm};
`

export const FilterWrapper = styled.View`
  justify-content: space-between;

  height: 156px;

  margin-top: 24px;
`
export const GoBackWrapper = styled.View`
  align-self: flex-end;
  margin-top: 55px;
`
