import styled from 'styled-components/native'

export const SupportContainer = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray_200};
`

export const ProfileContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.red_900};

  width: 100%;
  height: 215px;

  padding-top: ${({ theme }) => theme.margins.lg};
  padding-right: ${({ theme }) => theme.margins.lg};
  padding-left: ${({ theme }) => theme.margins.lg};

  border-bottom-left-radius: ${({ theme }) => theme.margins.lg};
  border-bottom-right-radius: ${({ theme }) => theme.margins.lg};
`

export const UserContent = styled.View`
  width: 200px;
  border-bottom-width: 1px;
  border-bottom-color: 'rgba(255, 255, 255, 0.6)';
`

export const UserText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font_family.bold};
  font-size: ${({ theme }) => theme.font_size.md};
  text-transform: capitalize;

  padding-bottom: ${({ theme }) => theme.margins.sm};
`

export const UserStatistic = styled.View`
  margin-top: ${({ theme }) => theme.margins.sm};
`

export const UserStatisticText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font_family.regular};
  font-size: ${({ theme }) => theme.font_size.sm};
`

export const DisconnectButton = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-top: ${({ theme }) => theme.margins.md};
`

export const DisconnectText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font_family.bold};

  margin-right: 6px;
`

export const CardContent = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  width: 300px;

  margin-top: 46px;
`

export const CardSupport = styled.View`
  display: flex;
  justify-content: space-around;
  align-items: center;

  height: 136px;
  width: 145px;

  background-color: ${({ theme }) => theme.colors.white};

  padding: 26px;
  margin-bottom: ${({ theme }) => theme.margins.sm};
  /* margin-left: ; */
  border-radius: 16px;
`

export const CardText = styled.Text`
  color: ${({ theme }) => theme.colors.red_900};
  font-family: ${({ theme }) => theme.font_family.bold};
  font-size: ${({ theme }) => theme.font_size.sm};
`
