import styled from 'styled-components/native'

interface PriceTextProps {
  isActive: boolean
}

export const PriceContent = styled.Text`
  font-family: ${({ theme }) => theme.font_family.bold};
  font-size: ${({ theme }) => theme.font_size.md};
`

export const PriceText = styled.Text<PriceTextProps>`
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.red_900 : theme.colors.gray_500};
`
