import { Eye, EyeSlash } from 'phosphor-react-native'
import { useState } from 'react'
import { Text } from 'react-native'
import { TextInput, HelperText, TextInputProps } from 'react-native-paper'

import { theme } from '../../../styles/theme'
import styles from './styles'

interface InputBaseProps extends Omit<TextInputProps, 'theme'> {
  messageError?: string
  colorLabel?: string
}

export function InputBase({
  label,
  value,
  colorLabel,
  onChangeText,
  secureTextEntry,
  error,
  messageError,
  ...rest
}: InputBaseProps) {
  const [secureMode, setSecureMode] = useState(secureTextEntry)

  const Label = (
    <Text style={{ color: colorLabel || theme.colors.gray_600 }}>{label}</Text>
  )

  return (
    <>
      <TextInput
        label={Label}
        value={value}
        error={error}
        secureTextEntry={secureMode}
        onChangeText={onChangeText}
        style={styles.input}
        selectionColor="#ffff"
        textColor="#ffff"
        underlineColor="#ffff"
        activeUnderlineColor="#ffff"
        outlineColor="#ffff"
        right={
          secureTextEntry ? (
            <TextInput.Icon
              icon={() =>
                secureMode ? (
                  <EyeSlash color={theme.colors.gray_600} />
                ) : (
                  <Eye color={theme.colors.gray_600} />
                )
              }
              iconColor={theme.colors.gray_600}
              onPress={() => setSecureMode(!secureMode)}
            />
          ) : null
        }
        {...rest}
      />
      {error && (
        <HelperText type="error" visible={error}>
          {messageError}
        </HelperText>
      )}
    </>
  )
}
