import styled from 'styled-components/native'

export const SingUpContainer = styled.SafeAreaView`
  margin-top: 50px;
  padding: 0 62px;
`

export const Header = styled.View`
  display: flex;
  flex-direction: column;
`

export const Title = styled.Text`
  font-weight: bold;
  font-size: 30px;
`

export const FormWrapper = styled.View`
  display: flex;
  flex-direction: column;

  margin-top: 32px;
`

export const InputContainer = styled.View`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`

export const Label = styled.Text`
  font-weight: bold;
  font-size: 16px;
`

export const Button = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.red_900};
  border-radius: 90px;
  width: 60%;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  box-shadow: 1px 1px 1px;
  margin: 20px 0 0 45px;
  flex-direction: row;
  justify-content: space-between;
`
export const TextButton = styled.Text`
  flex-direction: row;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  width: 70%;
`
