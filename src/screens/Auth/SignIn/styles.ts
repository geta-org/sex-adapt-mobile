import styled from 'styled-components/native'

export const LoginContainer = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.colors.black};
`
export const Background = styled.ImageBackground`
  flex: 1;
  height: 320px;
`

export const Header = styled.View`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
  padding-bottom: 38px;
`

export const LoginWrapper = styled.View`
  height: 60%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.red_900};
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  border-bottom: 2px ${({ theme }) => theme.colors.white} solid;
  align-items: center;
  padding: 80px 50px;
`

export const TextSubmit = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  width: 200px;
  text-align: center;
  font-size: 12px;
`

export const UserInput = styled.View`
  border-bottom-width: 1px;
  color: ${({ theme }) => theme.colors.white};
  height: 8%;
  width: 100%;
  border-color: ${({ theme }) => theme.colors.black};
`

export const InputPassword = styled.View`
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.white};
  margin-top: 40px;
  color: ${({ theme }) => theme.colors.black};
  font-size: 20px;
  height: 8%;
  width: 100%;
  font-size: 16px;
`

export const PasswordText = styled.Text`
  font-size: 13px;
  display: flex;
  color: ${({ theme }) => theme.colors.white};
  align-self: flex-end;
`

export const PasswordButton = styled.TouchableOpacity`
  margin: 1px;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.white};
  align-self: flex-end;
  height: 6%;
`

export const LoginButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 90px;
  width: 50%;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20%;
  box-shadow: 1px 1px 1px;
`

export const TextButton = styled.Text`
  color: ${({ theme }) => theme.colors.red_900};
  font-weight: bold;
`
export const SingUpText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  margin-top: 25px;
`

export const SingUpButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  height: 86%;
  padding: 200px;
`

export const SingUpButton = styled.TouchableOpacity`
  border-color: ${({ theme }) => theme.colors.gray_600};
`
