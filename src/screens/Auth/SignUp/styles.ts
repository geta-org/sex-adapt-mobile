import styled from "styled-components/native";

export const SingUpContainer = styled.View`
  display: flex;
  flex-direction: column;

  margin-top: 50px;
  padding: 0 62px;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.font_size.xl};
  font-family: ${({ theme }) => theme.font_family.bold};
`;

export const Subtitle = styled.Text`
  font-size: ${({ theme }) => theme.font_size.xs};
`;

export const FormWrapper = styled.View`
  display: flex;
  flex-direction: column;

  margin: 32px 0;
`;

export const InputContainer = styled.View`
  display: flex;
  flex-direction: column;

  margin-bottom: 10px;
`;

export const Label = styled.Text`
  font-size: ${({ theme }) => theme.font_size.md};
  font-family: ${({ theme }) => theme.font_family.bold};
`;

export const Button = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-radius: 23px;
  padding: 13px 18px;
  box-shadow: 0px 3px 6px #00000029;

  background-color: ${({ theme }) => theme.colors.red_900};
`;

export const TextButton = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font_family.bold};
`;
