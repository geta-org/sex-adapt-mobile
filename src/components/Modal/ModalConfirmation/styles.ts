import styled from "styled-components/native";

export const ModalContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 30%;
  width: 85%;

  background-color: ${({ theme }) => theme.colors.red_900};
  box-shadow: 1px 1px 1px;

  margin-top: 250px;
  padding: 20px 20px 0px 20px;
  border-radius: 25px;
  margin-left: 20px;
`;

export const ModalWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  margin-top: 18px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.font_family.bold};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.white};

  text-align: center;
`;

export const TextButton = styled.Text`
  font-family: ${({ theme }) => theme.font_family.bold};
  color: ${({ theme }) => theme.colors.white};
`;

export const Button = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100px;
  height: 50px;

  border: 1px solid ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.red_900};

  border-radius: 90px;
  padding: 15px 20px;
  margin-left: 15px;
`;

export const OpenButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.white};
`;
