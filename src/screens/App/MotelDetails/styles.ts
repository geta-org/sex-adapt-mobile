import styled from 'styled-components/native';

export const MotelDetailsContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray_500};
  align-items: center;
`;

export const MotelImage = styled.Image`
  height: 161px;
  width: 443px;
`;

export const ButtonHeart = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 130px;
  right: 24px;

  box-shadow: 0px 0px 2px ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  height: 48px;
  width: 48px;

  border-radius: 50px;
`;

export const MotelInfoWrapper = styled.View`
  margin-top: 8px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.font_family.bold};
  font-size: ${({ theme }) => theme.font_size.LG};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 16px;
`;

export const AddressText = styled.Text`
  font-family: ${({ theme }) => theme.font_family.medium};
  max-width: 350px;
`;

export const TelephoneText = styled.Text`
  font-family: ${({ theme }) => theme.font_family.medium};
`;

export const MotelInfo = styled.Text`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 216px;
  margin-top: 10px;
`;

export const ReviewContainer = styled.View`
  margin-top: 16px;
  width: 296px;
`;

export const MotelText = styled.Text`
  color: ${({ theme }) => theme.colors.gray_700};
  font-size: ${({ theme }) => theme.font_size.MD};

  margin-left: 20px;
`;

export const ReviewWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  margin-top: 10px;
`;

export const ReviewContent = styled.View`
  justify-content: center;

  height: 40px;
  width: 56px;

  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.red_900};
`;

export const ReviewText = styled.Text`
  color: white;
  font-size: 21px;
  font-family: ${({ theme }) => theme.font_family.medium};
  align-self: center;
`;

export const CommentText = styled.Text`
  text-decoration-line: underline;
  margin-top: 12px;
`;

export const ButtonNext = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 195px;
  height: 49px;

  align-self: flex-end;

  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.red_900};
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.white};

  font-size: 21px;
  font-family: ${({ theme }) => theme.font_family.medium};
`;
