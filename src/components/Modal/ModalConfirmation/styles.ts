import styled from "styled-components/native";

export const ModalContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 30%;
  width: 85%;

  background-color: #cc3333;
  box-shadow: 1px 1px 1px;

  margin-top: 250px;
  padding: 20px 20px 0px 20px;
  border-radius: 25px;
  margin-left: 20px;
`;

export const Box = styled.View``;

export const ModalWrapper = styled.View`
  display: flex;
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
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100px;
  height: 50px;

  border: 1px solid #fff;
  background-color: #cc3333;

  border-radius: 90px;
  padding: 15px 20px;
  margin-left: 15px;
`;

export const OpenButton = styled.TouchableOpacity`
  background-color: #fff;
`;
