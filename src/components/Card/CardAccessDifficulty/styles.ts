import styled from 'styled-components/native'

interface CardAccessDifficultyProps {
  active: boolean
}

export const CardAccessDifficultyContainer = styled.TouchableOpacity<CardAccessDifficultyProps>`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  width: 120px;
  height: 140px;

  border: ${({ active }) => (!active ? '1px' : '2px')};
  border-color: ${({ active, theme }) =>
    !active ? theme.colors.gray_600 : theme.colors.red_500};
  border-radius: 24px;
  padding: 0 10px;
`

export const Label = styled.Text`
  text-align: center;
  font-family: ${({ theme }) => theme.font_family.bold};
  font-size: ${({ theme }) => theme.font_size.xs};
`
