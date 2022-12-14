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
export const Underline = styled.View`
  width: 400px;
  border-bottom-width: 0.25px;
  box-shadow: 10px 1px 1px;
`;
export const TitleBox = styled.View`
  /* width: 400px;
  border-bottom-width: 0.25px ;
  box-shadow: 1px 1px 1px; */
`;
export const Subtitle = styled.Text`
  align-self: start;
  margin-right: 200px;
  margin-top: 20px;
  font-size: 15px;
  font-weight: bold;
  width: 150px;
`;

export const CommentInput = styled.TextInput`
  /* border-bottom-width: 1px; */
  /* border-color: #bababa; */
  border: 0.5px solid #bababa;
  border-radius: 20px;
  height: 150px;
  width: 350px;
  margin-bottom: 15px;
  font-size: 16px;
  padding-left: 15px;
`;
export const Placeholder = styled.Text`
  color: #bababa;
  font-size: 18px;
`;

/* border-radius: 20px;
border: 1px solid #1F1e25;
padding: 15px;
color: #1F1e25; */

export const ButtonComment = styled.TouchableOpacity`
  background-color: #cc3333;
  border-radius: 90px;
  /* width: 60%; */
  width: 150px;
  height: 50px;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 1px;
  margin-left: 45px;
  margin-top: 20px;
  flex-direction: row;

  position: absolute;
  top: 42%;
  left: 70%;
  z-index: 999;
`;
export const TextButton = styled.Text`
  color: black;
  font-size: 18px;
  align-self: center;
  font-weight: bold;
`;
export const ViewEvaluation = styled.View`
  background-color: #fff;
  border-radius: 25px;
  border-color: #1f1e25;
`;
export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const CommentCard = styled.View`
  margin-top: 15px;
  border-bottom-width: 1px solid black;
  border-top-width: 1px solid black;
  width: 40%;
  height: 20%;
`;
