import styled from "styled-components/native";

export const ModalContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 250px;
  background-color: #cc3333;
  padding: 20px 20px 0px 20px;
  height: 30%;
  width: 85%;
  border-radius: 25px;
  box-shadow: 1px 1px 1px;
  margin-left: 20px;
`;
export const Box = styled.View``;
export const ModalWrapper = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 18px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: white;
  text-align: center;
`;

export const TextButton = styled.Text`
  font-weight: bold;
  color: #fff;
`;

export const Button = styled.TouchableOpacity`
  border: 1px solid #fff;

  background-color: #cc3333;
  border-radius: 90px;
  width: 100px;
  height: 50px;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: 15px;
`;

export const OpenButton = styled.TouchableOpacity`
  background-color: #fff;
`;
