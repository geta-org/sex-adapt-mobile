import styled from 'styled-components/native'

export const SignInContainer = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;

  background-color: ${({ theme }) => theme.colors.black};
`

export const SignInBackground = styled.ImageBackground`
  flex: 1;
  height: 320px;
`

export const Header = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  width: 200px;
  text-align: center;
  font-size: ${({ theme }) => theme.font_size.xs};
`

export const SignInWrapper = styled.View`
  align-items: center;

  height: 60%;
  width: 100%;

  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  padding: 80px 50px 0;

  background-color: ${({ theme }) => theme.colors.red_900};
`

export const PasswordRecoverButton = styled.TouchableOpacity`
  align-self: flex-end;

  height: 4%;

  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.white};
  margin-top: ${({ theme }) => theme.margins.sm};
`

export const Label = styled.Text`
  font-size: ${({ theme }) => theme.font_size.xs};
  color: ${({ theme }) => theme.colors.white};
`

export const SignInButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 20px;
  padding: 12px 40px;
  margin-top: ${({ theme }) => theme.margins.lg};
  box-shadow: 0px 3px 6px #00000029;

  background-color: ${({ theme }) => theme.colors.white};
`

export const SignInTextButton = styled.Text`
  color: ${({ theme }) => theme.colors.red_900};
  font-family: ${({ theme }) => theme.font_family.bold};
`
export const SignUp = styled.Text`
  color: ${({ theme }) => theme.colors.white};

  position: absolute;
  bottom: 24px;
`

export const SignUpUnderline = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font_family.bold};
`
