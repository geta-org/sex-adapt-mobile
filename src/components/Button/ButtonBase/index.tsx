import { TouchableOpacityProps } from 'react-native'
import { ButtonBaseContainer, ButtonBaseText } from './styled'

interface ButtonBaseProps extends TouchableOpacityProps {
  text: string
  active?: boolean
}

export function ButtonBase({ text, active = true, ...rest }: ButtonBaseProps) {
  return (
    <ButtonBaseContainer active={active} {...rest} style={{ elevation: 1 }}>
      <ButtonBaseText active={active}>{text}</ButtonBaseText>
    </ButtonBaseContainer>
  )
}
