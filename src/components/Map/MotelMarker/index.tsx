/* eslint-disable jsx-a11y/alt-text */
import { Image } from 'react-native'
import { Callout, Marker } from 'react-native-maps'
import { useNavigation } from '@react-navigation/native'

import { CalloutView } from '../CalloutView'

import { PinMotel } from '@assets'
import { ButtonOpenMotelDetails, ButtonText, MotelName, styles } from './styles'

// eslint-disable-next-line no-undef
interface MotelMarkerProps extends establishment {
  userLatitude: number
  userLongitude: number
}

export function MotelMarker(props: MotelMarkerProps) {
  const navigation = useNavigation()

  function handleOpenMotel() {
    navigation.navigate('MotelDetails')
  }

  return (
    <Marker
      coordinate={{ latitude: props.latitude, longitude: props.longitude }}
      style={styles.marker}
    >
      <MotelName>{props.name}</MotelName>
      <Image source={PinMotel} />

      <Callout
        accessibilityLabel={'Ver estabelecimento'}
        accessibilityHint={'Ir para perfil de ' + props.name}
        accessibilityRole={'button'}
        tooltip={true}
        style={styles.markerCallout}
        onPress={handleOpenMotel}
      >
        <CalloutView
          userLatitude={props.userLatitude}
          userLongitude={props.userLongitude}
          name={props.name}
          price={props.price}
          latitude={props.latitude}
          longitude={props.longitude}
          average_grade={props.average_grade}
        />
        <ButtonOpenMotelDetails
          accessibilityLabel={'Ver mais'}
          accessibilityHint={'Navega para página de perfil de ' + props.name}
          accessibilityRole={'button'}
        >
          <ButtonText>Ver Mais</ButtonText>
        </ButtonOpenMotelDetails>
      </Callout>
    </Marker>
  )
}
