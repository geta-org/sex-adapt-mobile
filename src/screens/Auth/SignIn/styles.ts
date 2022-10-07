import styled from 'styled-components/native';

export const LoginContainer = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
  background-color: #000;
`;
export const Background = styled.ImageBackground`
  flex: 1;
  height: 320px;
`;

export const LoginWrapper = styled.View`
  height: 60%;
  width: 100%;
  background-color: #cc3333;
  border-top-left-radius: 40%;
  border-top-right-radius: 40%;
  border-bottom: 2px #fff solid;
  align-items: center;
  padding: 80px 50px;
`;

export const TextSubmit = styled.Text`
  color: #fff;

  width: 200px;
  text-align: center;
  font-size: 12px;
`;
export const Header = styled.View`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
  padding-bottom: 38px;
`;
export const Title = styled.Text`
  color: #fff;
  text-align: center;
  display: flex;
  align-items: center;
  border-bottom: 100px;
  font-size: 20px;
`;

export const InputUser = styled.View`
  border-bottom-width: 1px;
  color: #fff;
  height: 8%;
  width: 100%;

  border-color: #fff;
`;

export const InputPassword = styled.View`
  border-bottom-width: 1px;
  border-color: #fff;
  margin-top: 40px;
  color: #fff;
  font-size: 20px;
  height: 8%;
  width: 100%;
  font-size: 16px;
`;
export const Button = styled.TouchableOpacity`
  background-color: #fff;
  border-radius: 90px;
  width: 50%;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20%;
  box-shadow: 1px 1px 1px;
`;
export const PasswordText = styled.Text`
  font-size: 13px;
  display: flex;
  justify-content: right;
  color: #fff;
  align-self: flex-end;
`;

export const PasswordButton = styled.TouchableOpacity`
  margin: 1px;
  border-bottom-width: 1px;
  border-color: #fff;
  align-self: flex-end;
  height: 6%;
`;

export const TextButton = styled.Text`
  color: #cc3333;
  font-weight: bold;
`;
export const TextSingUp = styled.Text`
  color: #fff;
  margin-top: 25px;
`;

export const ButtonSingUp = styled.TouchableOpacity`
  color: white;
  margin-top: 60px;
  //border-bottom-width: 1px;
`;

export const TextAnother = styled.Text`
  color: #fff;
  font-weight: bold;
  height: 86%;
`;

export const AnotherButton = styled.TouchableOpacity`
  border-color: #bababa;
  //height: 6%;
`;

export const Input = styled.View`
  margin-bottom: 0px;
  padding: 10px;
  color: #fff;
  font-size: 20px;
  //border-radius: 9px;
  width: 90%;
  border-bottom-width: 1px;
  border-color: rgb(186, 186, 186);
`;
