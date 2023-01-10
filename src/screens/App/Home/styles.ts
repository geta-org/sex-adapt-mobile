import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const HomeContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray_200};
  align-items: center;
  font-family: ${({ theme }) => theme.font_family.bold};
`;

export const HomeWrapper = styled.FlatList`
  padding-top: 70px;
  padding-bottom: 64px;
`;

export const styles = StyleSheet.create({
  contentList: {
    paddingTop: 32,
    paddingBottom: 64,
  },
});

export const ModalContainer = styled.View`
  margin-top: 200px;
  background-color: #fff;
  padding: 20px 20px 0px 20px;
  height: 55%;
  width: 85%;
  border-radius: 25px;
  border: 1px solid black;
  margin-left: 20px;
`;

export const ModalWrapper = styled.View``;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 22px;
  align-items: center;
`;

export const ExitButton = styled.TouchableOpacity`
  border: 1px solid #fff;
  background-color: #cc3333;
  border-radius: 100%;
  width: 50px;
  height: 50px;
  display: flex;
  position: absolute;
  left: 100%;
  bottom: 98%;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 90px;
`;
export const ExitButtonText = styled.Text`
  color: white;
  font-weight: bold;
`;

export const Subtitle = styled.Text`
  width: 350px;
  font-size: 13px;
  margin-bottom: 15px;
  margin-left: 50px;
`;

export const PicContainer = styled.View`
  flex-direction: row;
  margin-right: 20px;
`;

export const TextButton = styled.Text`
  font-weight: bold;
  color: #fff;
  font-size: 17px;
`;

export const Button = styled.TouchableOpacity`
  border: 1px solid #fff;
  background-color: #cc3333;
  border-radius: 90px;
  width: 150px;
  height: 70px;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 100%;
  left: 70%;
  z-index: 999;
`;

export const OpenButton = styled.TouchableOpacity`
  background-color: #fff;
`;
