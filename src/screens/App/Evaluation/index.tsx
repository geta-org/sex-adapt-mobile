import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  FlatList,
  TouchableOpacityProps,
  View as TitleBox
} from 'react-native';

import {
  ButtonComment,
  CommentText,
  CommentInput,
  Title,
  EvaluationContainer,
  ViewEvaluation,
  Subtitle,
  ButtonText
} from './styles';

import { BackButton } from 'src/components/BackButton';

// import { PriceRating } from '../components/PriceRating';
import { Rating } from 'react-native-ratings';
interface UserCommentData {
  id: string;
  name: string;
  Rating: number;
}

export default function Testar() {
  const [newUserComment, setNewUserComment] = useState(' ');
  const [myUserComment, setMyUserComment] = useState<UserCommentData[]>([]);
  const [star, setStar] = useState(0);

  const navigation = useNavigation();
  function handleGoBack() {
    navigation.goBack();
  }

  function handleAddNewComment() {
    // colocar a data
    const data = {
      id: String(new Date().getTime()),
      name: newUserComment,
      Rating: star
    };

    setMyUserComment((oldState) => [...oldState, data]);
  }
  interface ButtonProps extends TouchableOpacityProps {
    title: string;
  }

  function Button({ title, ...rest }: ButtonProps) {
    return (
      <ButtonComment activeOpacity={0.3} {...rest}>
        <ButtonText>{title}</ButtonText>
      </ButtonComment>
    );
  }

  interface CommentCardProps extends TouchableOpacityProps {
    comment: string;
    rating: number;
  }
  function CommentCard({ comment, rating, ...rest }: CommentCardProps) {
    return (
      <ViewEvaluation {...rest}>
        <Rating
          showRating={false}
          readonly
          type="custom"
          imageSize={20}
          startingValue={rating}
          ratingColor="#cc3333"
          ratingBackgroundColor="#c8c7c8"
          style={{ alignSelf: 'center', paddingVertical: 1.8 }}
          onStartRating={(value: number) => setStar(value)}
        />
        <CommentText>{comment}</CommentText>
      </ViewEvaluation>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  useEffect(() => {}, [myUserComment]);
  return (
    <EvaluationContainer>
      <BackButton />
      <TitleBox>
        <Title>Avaliações</Title>
      </TitleBox>

      <Rating
        showRating={false}
        type="custom"
        imageSize={30}
        startingValue={3.0}
        ratingColor="#cc3333"
        ratingBackgroundColor="#c8c7c8"
        style={{ alignSelf: 'center', paddingVertical: 1.8, marginTop: 15 }}
        onStartRating={(value: number) => setStar(value)}
      />

      <Subtitle>Comente</Subtitle>
      <CommentInput onChangeText={setNewUserComment} />

      <Button title="ENVIAR" onPress={handleAddNewComment} />

      <FlatList
        data={myUserComment}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CommentCard comment={item.name} rating={item.Rating} />
        )}
      />
    </EvaluationContainer>
  );
}
