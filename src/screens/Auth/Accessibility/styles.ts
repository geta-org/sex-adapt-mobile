import styled from 'styled-components/native';
export const AccessibilityContainer = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 30px;
`;

export const AccessibilityWrapper = styled.View`
  width: 100%;
  padding: 0 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 22px;
  width: 300px;
`;

export const Subtitle = styled.Text`
  width: 300px;
 font-size: 12px;
 margin-bottom: 15px;
`;
export const Container = styled.View`
 flex-direction: column;
align-items: center;
justify-content: center;
padding-left: 50px;
`;
export const BackButton = styled.TouchableOpacity`
display: flex;
position: absolute;
left: 15px;

top: 15px;
`;
export const TextButtons = styled.Text`
  font-weight: bold;
  color: #fff;
`;

export const Box = styled.TouchableOpacity`
  width: 125px;
  height: 140px;
  border: 1px;
  border-color: #bebebe;
  border-radius: 30px;
  margin-bottom: 10px;
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
  box-shadow: 1px 1px 1px;
 margin-left: 15px;
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
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
