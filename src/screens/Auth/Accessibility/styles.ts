import styled from 'styled-components/native';
//import { TextButton } from '../SignIn/styles';

export const AccessibilityContainer = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 30px;
  //text-align: center;
`;

export const AccessibilityWrapper = styled.View`
  width: 100%;
  padding: 0 80px;
  // ajustar a distancias dos itens  
  //height: 65%;
  //background-color: red;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 25px;
  width: 300px;
 // height: 85px;
 // margin-left: 80px;
`;

export const Subtitle = styled.Text`
  width: 350px;
 margin-left: 80px;
`;
export const Container = styled.View`
 
`;

export const PicContainer = styled.View``;
export const Image = styled.TouchableOpacity``;

export const BackButton = styled.TouchableOpacity`
flex-direction: row;
display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const TextButtons = styled.Text`
  font-weight: bold;
  color: #fff;
`;

export const Box = styled.TouchableOpacity`
  width: 115px;
  height: 140px;
  border: 1px;
  border-color: #bebebe;
  border-radius: 30px;
  margin-bottom: 10px;
 // margin-left: 70px;
  align-items: center;
  justify-content: space-evenly;
`;

export const Button = styled.TouchableOpacity`
  background-color: #cc3333;
  border-radius: 90px;
  width: 150px;
  height: 50px;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
 // margin-bottom: 10px;
  box-shadow: 1px 1px 1px;
 // margin-left: 40px;
`;
export const ButtonText = styled.Text`
  font-weight: bold;
  color: #fff;
`;

export const BoxContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;
export const BoxText = styled.Text`
  font-weight: bold;
  //margin-left: 25px;
  //margin-top: 80%;
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
