import styled from 'styled-components/native';

export const SupportContainer = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray_200};
`;

// export const SupportWrapper = styled.View``;

export const ProfileContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.red_900};

  width: 100%;
  height: 215px;

  padding-top: 24px;
  padding-right: 24px;
  padding-left: 24px;

  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
`;

export const UserContent = styled.View`
  width: 200px;
  border-bottom-width: 1px;
  border-bottom-color: 'rgba(255, 255, 255, 0.6)';
`;

export const UserText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font_family.bold};
  font-weight: bold;
  font-size: ${({ theme }) => theme.font_size.MD};
  text-transform: capitalize;
`;

export const UserStatistic = styled.View`
  margin-top: 11px;
`;

export const UserStatisticText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
`;

export const DisconnectButton = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-top: 20px;
`;

export const DisconnectText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font_family.bold};
  margin-right: 6px;
`;

export const CardContent = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  width: 296px;

  margin-top: 46px;
`;

export const CardSupport = styled.View`
  display: flex;
  justify-content: space-around;
  align-items: center;

  height: 136px;
  width: 145px;

  background-color: ${({ theme }) => theme.colors.white};

  padding: 26px;
  margin-bottom: 6px;
  border-radius: 16px;
`;

export const CardText = styled.Text`
  color: ${({ theme }) => theme.colors.red_900};
  font-family: ${({ theme }) => theme.font_family.bold};
  font-weight: bold;
  font-size: ${({ theme }) => theme.font_size.MD};
`;
