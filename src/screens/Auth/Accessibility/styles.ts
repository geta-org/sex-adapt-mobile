import styled from 'styled-components/native'

export const AccessibilityContainer = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 30px;
`

export const Container = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 50px;
`

export const Title = styled.Text`
  font-weight: bold;
  font-size: 22px;
  width: 300px;
`

export const Subtitle = styled.Text`
  width: 300px;
  font-size: 12px;
  margin-bottom: 15px;
`

export const AccessibilityWrapper = styled.View`
  width: 100%;
  padding: 0 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const BoxContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`

export const TextBox = styled.Text`
  font-weight: bold;
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const AccessibilityBox = styled.TouchableOpacity`
  width: 125px;
  height: 140px;
  border: 1px;
  border-color: ${({ theme }) => theme.colors.gray_600};
  border-radius: 30px;
  margin-bottom: 10px;
  align-items: center;
  justify-content: space-evenly;
`

export const TextButtons = styled.Text`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
`

export const Button = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.red_900};
  border-radius: 90px;
  width: 150px;
  height: 50px;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 1px;
  margin-left: 15px;
`

export const ButtonText = styled.Text`
  font-weight: bold;
  color: #fff;
`

export const BoxText = styled.Text`
  font-weight: bold;
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`
