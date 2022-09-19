import styled from 'styled-components/native';

export const LoginContainer = styled.View`
 flex: 1;
  flex-direction: column;
  justify-content: flex-end; 
  background-color: #000;
`
//border: none
//border- bottom: 2px solid red
export const LoginWrapper = styled.View`
 height: 60%;
 width: 100%;
  background-color: #de3c3c;
  border-top-left-radius: 40%;
  border-top-right-radius: 40%;
  border-bottom: 2px #fff solid;
  align-items: center;
  

`

export const TextSubmit = styled.Text`
color : #fff;
margin-top: 60px;
width: 260px;
text-align: center;
`
export const Header = styled.View`
display : flex;
flex: 1;
justify-content: center;
flex-direction: column;
align-items: center;
gap:120px;
`
export const Title = styled.Text`
color:#fff;
text-align: center;
display: flex;
align-items: center;
border-bottom: 100px;
font-size: 20px;

`

export const Input = styled.View`
  border-bottom: 2px solid blue;
margin-bottom: 12px;
margin-top: 30px;
color: #fff;
font-size:20px;
height: 40px;
width:100%; 
font-size: 16px;

`
export const  Button = styled.TouchableOpacity`
background-color:#fff ;
border-radius: 90px;
width:50%; 
padding: 15px 20px;
display: flex;
align-items: center;
justify-content: center;



`
export const PasswordText = styled.Text`
border-radius: 50px;
font-size: 15px;
display: flex;
justify-content: right;
color: #fff;
align-self: flex-end;

`

export const PasswordButton = styled.TouchableOpacity`

border-bottom: 1%;
width: 125px;
margin: 16px;
borderBottomColor: #fff;
borderBottomWidth: 1;
marginBottom: 30px;
align-self: flex-end;
`

export const TextButton = styled.Text`
color: red;
`
export const TextSingUp =styled.Text`color: #fff;
`

export const ButtonSingUp=styled.TouchableOpacity`
color: white;


border-bottom: 1%;


`

export const TextAnother = styled.Text`
color: #fff;
borderBottomColor: #fff;
borderBottomWidth: 1;

font-weight:bold;

`