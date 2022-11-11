import { useState } from 'react';
import { CardMotel } from 'src/components/Card/CardMotel';
import { SkeletonCard } from 'src/components/Card/SkeletonCard';
import { HeaderMotel } from 'src/components/HeaderMotel';
import { formattedText } from 'src/helpers/formattedText';
import { HomeContainer, HomeWrapper, styles } from './styles';

export function Home() {
  const [data, setData] = useState([
    {
      id: 12,
      name: 'Motel Locomotiva'
    },
    {
      id: 22,
      name: 'Motel Sagitário'
    },
    {
      id: 33,
      name: 'Motel Olimpo'
    },
    {
      id: 44,
      name: 'Motel Territudo'
    },
    {
      id: 55,
      name: 'Motel Mirage'
    }
  ]);
  const [filteredMotel, setFilteredMotel] = useState(data);

  function handleSearchMotel(inputText: string) {
    if (inputText) {
      const filtered = data.filter((motel) => {
        return formattedText(motel.name).includes(formattedText(inputText));
      });

      setFilteredMotel(filtered);
    } else {
      setFilteredMotel(data);
    }
  }

  return (
    <HomeContainer>
      <HeaderMotel onChangeText={handleSearchMotel} />

      {!data && (
        <HomeWrapper
          data={[0, 1, 2]}
          keyExtractor={(index: number) => index}
          renderItem={() => <SkeletonCard />}
          showsVerticalScrollIndicator={false}
        />
      )}

      {data && (
        <HomeWrapper
          data={filteredMotel}
          keyExtractor={(item: any) => item.id}
          renderItem={({ item }: any) => <CardMotel data={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentList}
        />
      )}
    </HomeContainer>
  );
}

import React from 'react';
import { useState } from 'react';
import { Alert, Modal } from 'react-native';
import {
  ModalContainer,
  Box,
  ModalWrapper,
  Title,
  TextButton,
  Button
} from './styles';

export function Conf() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <ModalContainer>
      <Modal
        animationType="slide"
        transparent={true}
        visible={true}
        onRequestClose={() => {
          Alert.alert(' Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <ModalContainer>
          <Box>
            <Title>Você tem certeza que quer desconectar?</Title>
          </Box>
          <ModalWrapper>
            <Button onPress={() => setModalVisible(!modalVisible)}>
              <TextButton>Sim</TextButton>
            </Button>
            <Button onPress={() => setModalVisible(!modalVisible)}>
              <TextButton>Não</TextButton>
            </Button>
          </ModalWrapper>
        </ModalContainer>
      </Modal>
    </ModalContainer>
  );
}
