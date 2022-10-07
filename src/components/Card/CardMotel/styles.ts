import styled from 'styled-components/native';

export const CardMotelContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;

  padding: 16px;

  width: 380px;
  height: 200px;

  background-color: ${({ theme }) => theme.colors.white};

  border-radius: 16px;
  margin-bottom: 16px;
`;

export const MotelWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;

  width: 300px;
  min-height: 90px;
`;

export const MotelLogo = styled.Image`
  height: 71px;
  width: 71px;
  border-radius: 16px;
`;

export const MotelTextField = styled.View`
  display: flex;
  width: 228px;
  height: 100px;
  justify-content: space-between;

  margin-left: 15px;
`;

export const MotelTitle = styled.Text`
  color: ${({ theme }) => theme.colors.red_900};
  font-size: ${({ theme }) => theme.font_size.LG};
  font-family: ${({ theme }) => theme.font_family.bold};
`;

export const MotelText = styled.Text`
  color: ${({ theme }) => theme.colors.gray_700};
  font-size: ${({ theme }) => theme.font_size.MD};
`;

export const ModelTextRed = styled.Text`
  color: ${({ theme }) => theme.colors.red_900};
  font-size: ${({ theme }) => theme.font_size.MD};
`;

export const MotelInfo = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 200px;
`;

export const MotelAccessibility = styled.View`
  height: 36px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: center;
`;
