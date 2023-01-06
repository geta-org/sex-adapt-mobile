import styled from 'styled-components/native';

export const CardSupport = styled.View`
  display: flex;
  justify-content: space-around;
  align-items: center;

  height: 136px;
  width: 145px;

  background-color: ${({ theme }) => theme.colors.white};

  padding: 26px;
  margin-bottom: ${({ theme }) => theme.margins.sm};

  border-radius: 16px;
`;

export const CardText = styled.Text`
  color: ${({ theme }) => theme.colors.red_900};
  font-family: ${({ theme }) => theme.font_family.bold};
  /* font-size: ${({ theme }) => theme.font_size.sm}; */
  font-size: 18px;
`;
