import styled from "styled-components/native";

export const ButtonContainer = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.white};

  padding-left: 16px;
  padding-right: 16px;

  border-color: ${({ theme }) => theme.colors.gray_800};
  border-radius: 26px;

  height: 39px;
  width: 55px;

  border-radius: 26px;

  box-shadow: 0px 0px 2px ${({ theme }) => theme.colors.black};
`;
