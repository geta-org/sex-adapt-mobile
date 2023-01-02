import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  View as TitleBox,
  FlatList,
  TouchableOpacityProps,
  StyleSheet
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

import { Rating } from 'react-native-ratings';

interface UserCommentData {
  id: string;
  name: string;
  Rating: number;
}

export default function Evaluation() {
  const [newUserComment, setNewUserComment] = useState(' ');
  const [myUserComment, setMyUserComment] = useState<UserCommentData[]>([]);
  const [star, setStar] = useState(0);

  const navigation = useNavigation();
  function handleGoBack() {
    navigation.goBack();
  }

  function handleAddNewComment() {
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

  useEffect(() => {}, [myUserComment]);
  return (
    <EvaluationContainer>
      <BackButton />
      <TitleBox style={[styles.card, styles.shadowProp]}>
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
      <CommentInput
        multiline={true}
        numberOfLines={5}
        placeholder="Digite o seu comentário..."
        onChangeText={setNewUserComment}
      />

      <Button title="ENVIAR" onPress={handleAddNewComment} />

      <FlatList
        style={{
          marginTop: 30,
          borderBottomColor: 'black',
          height: 62,
          width: 470,
          paddingHorizontal: 20,
          paddingVertical: 10
        }}
        data={myUserComment}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CommentCard
            style={[styles.underline, styles.underline1]}
            comment={item.name}
            rating={item.Rating}
          />
        )}
      />
    </EvaluationContainer>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 13
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 65,

    width: 420
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -5, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 3
  },

  underline: {
    height: 202,
    width: 520,
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    borderColor: '#bababa',
    paddingTop: 25,
    alignSelf: 'flex-start'
  },
  underline1: {
    paddingRight: 100,
    paddingLeft: 10
  }
});
