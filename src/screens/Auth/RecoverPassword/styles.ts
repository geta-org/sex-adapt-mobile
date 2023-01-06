import styled from 'styled-components/native'

export const RecoverPasswordWrapper = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 50px;
  padding: 0 62px;
`

export const Header = styled.View`
  display: flex;
  flex-direction: column;
  align-self: flex-start;

  margin-bottom: 50px;
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.font_size.xl};
  font-family: ${({ theme }) => theme.font_family.bold};
`

export const Subtitle = styled.Text`
  font-size: ${({ theme }) => theme.font_size.xs};
`

export const FormWrapper = styled.View`
  width: 300px;
  margin-bottom: 23px;
`

export const Button = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 23px;
  padding: 12px 20px;
  box-shadow: 0px 3px 6px #00000029;

  background-color: ${({ theme }) => theme.colors.red_900};
`

export const TextButton = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font_family.bold};
`
