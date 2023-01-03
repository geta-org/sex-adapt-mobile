import styled from 'styled-components/native'

export const RecoverPasswordWrapper = styled.SafeAreaView`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 32px;
`

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  width: 220px;
  align-items: center;
`

export const Subtitle = styled.Text`
  font-size: 13px;
  margin-bottom: 50px;
`

export const FormWrapper = styled.View`
  width: 300px;
  margin-bottom: 15px;
`

export const Button = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.red_900};
  border-radius: 90px;
  width: 50%;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 1px;
`

export const TextButton = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
`
