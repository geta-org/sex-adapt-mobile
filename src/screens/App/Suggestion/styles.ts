import styled from 'styled-components/native';

export const SuggestionContainer = styled.View`
  margin-top: 60px;
`;

export const Header = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-left: 50px;
  margin-bottom: 20px;
`;

export const SuggestionWrapper = styled.View`
  /* align-items: initial; */
  margin-left: 12%;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.font_family.bold};
  font-size: 42px;

  width: 300px;
`;

export const Subtitle = styled.Text`
  font-size: 18px;

  width: 300px;

  margin-bottom: 15px;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.font_family.bold};
  font-size: 17px;

  margin-right: 10px;
`;

export const Input = styled.TextInput`
  height: 50px;
  width: 320px;

  font-size: ${({ theme }) => theme.font_size.md};
`;

export const InputContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.gray_200};

  border-radius: 30px;
  margin: 15px 0 15px 0;
`;

export const Button = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.red_900};
  box-shadow: 1px 1px 1px;

  width: 300px;
  height: 50px;

  border-radius: 90px;
  padding: 15px 20px;
  margin-left: 5px;
`;

export const TextButton = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font_family.bold};
`;
