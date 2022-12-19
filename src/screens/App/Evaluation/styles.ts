import styled from 'styled-components/native';

export const EvaluationContainer = styled.View`
  flex: 1;
  justify-content: center;
  display: flex;
  align-items: center;
  padding: 30px 70px 0 70px;
`;

export const Title = styled.Text`
  font-size: 35px;
  font-weight: bold;
  width: 220px;
  align-items: center;
  margin-bottom: 30px;
`;

export const Subtitle = styled.Text`
  align-self: flex-start;
  margin: 20px 400px 0 0;
  font-size: 18px;
  font-weight: bold;
  width: 150px;
`;

export const CommentInput = styled.TextInput`
  border: 0.5px solid #bababa;
  border-radius: 20px;
  height: 150px;
  width: 350px;
  margin-bottom: 15px;
  font-size: 16px;
  padding-left: 15px;
  align-items: flex-start;
  padding-bottom: 100px;
`;

export const ButtonComment = styled.TouchableOpacity`
  background-color: #cc3333;
  border-radius: 90px;
  padding: 15px 20px;
  width: 120px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 1px;
  margin: 20px 0 0 80px;
  flex-direction: row;
  position: absolute;
  top: 42%;
  left: 70%;
  z-index: 999;
`;
export const CommentText = styled.Text`
  color: black;
  font-size: 18px;
  align-self: center;
`;
export const ViewEvaluation = styled.View`
  background-color: white;
  border-radius: 25px;
  border-color: black;
`;
export const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
`;
