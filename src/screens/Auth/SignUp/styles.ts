import styled from 'styled-components/native'

export const SingUpContainer = styled.SafeAreaView`
  margin-top: 60px;
`

export const Container = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 50px;
`

export const Title = styled.Text`
  font-weight: bold;
  font-size: 30px;
  margin-right: 50%;
`

export const Header = styled.View`
  align-items: initial;
  margin: 0 0 100px 70px;
`

export const TitleInput = styled.Text`
  font-weight: bold;
  font-size: 15px;
  margin: 10px 10px 0 0;
`

export const Input = styled.TextInput`
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray_600};
  height: 50px;
  width: 300px;
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
