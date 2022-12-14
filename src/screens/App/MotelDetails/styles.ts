import styled from 'styled-components/native'

export const MotelDetailsContainer = styled.View`
  flex: 1;
  /*  looks better totally white */
  background-color: ${({ theme }) => theme.colors.white};
  align-items: center;
`

export const MotelImage = styled.Image`
  height: 161px;
  width: 443px;
`

export const ButtonHeart = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 130px;
  right: 24px;

  height: 48px;
  width: 48px;

  box-shadow: 0px 0px 2px ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};

  border-radius: 50px;
`

export const MotelInfoWrapper = styled.View`
  margin-top: ${({ theme }) => theme.margins.sm};
  margin-bottom: ${({ theme }) => theme.margins.md};
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.font_family.bold};
  font-size: ${({ theme }) => theme.font_size.lg};
  color: ${({ theme }) => theme.colors.black};

  margin-bottom: ${({ theme }) => theme.margins.md};
  margin-top: ${({ theme }) => theme.margins.sm};
`

export const AddressText = styled.Text`
  font-size: ${({ theme }) => theme.font_size.md};
  font-family: ${({ theme }) => theme.font_family.regular};
  max-width: 350px;
`

export const TelephoneText = styled.Text`
  font-size: ${({ theme }) => theme.font_size.md};
  font-family: ${({ theme }) => theme.font_family.regular};
`

export const MotelInfo = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 216px;

  margin-top: ${({ theme }) => theme.margins.sm};

  font-size: ${({ theme }) => theme.font_size.md};
  font-family: ${({ theme }) => theme.font_family.regular};
`

export const ReviewContainer = styled.View`
  margin-top: ${({ theme }) => theme.margins.sm};
  width: 296px;
`

export const MotelText = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.font_family.regular};
  font-size: ${({ theme }) => theme.font_size.md};
`

export const ModelTextRed = styled.Text`
  color: ${({ theme }) => theme.colors.red_900};
  font-family: ${({ theme }) => theme.font_family.bold};
  font-size: ${({ theme }) => theme.font_size.md};
`

export const ReviewWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  margin-top: ${({ theme }) => theme.margins.sm};
`

export const ReviewContent = styled.View`
  justify-content: center;

  height: 40px;
  width: 56px;

  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.red_900};
`

export const ReviewText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font_size.lg};
  font-family: ${({ theme }) => theme.font_family.medium};

  align-self: center;
`

export const CommentText = styled.Text`
  font-size: ${({ theme }) => theme.font_size.md};
  font-family: ${({ theme }) => theme.font_family.regular};
  text-decoration-line: underline;

  margin-top: ${({ theme }) => theme.margins.sm};
`

export const ButtonNext = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 195px;
  height: 49px;

  align-self: flex-end;

  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.red_900};
`

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.white};

  font-size: ${({ theme }) => theme.font_size.lg};
  font-family: ${({ theme }) => theme.font_family.medium};
`
