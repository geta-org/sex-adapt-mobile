import ReactSlider, {
  SliderProps as ReactSliderProps,
} from '@react-native-community/slider'

import { theme } from 'src/styles/theme'

interface SliderProps extends ReactSliderProps {
  width?: number | string
  height?: number | string
}

export function Slider({ width = '100%', height = 19, ...rest }: SliderProps) {
  return (
    <ReactSlider
      step={1}
      minimumTrackTintColor={theme.colors.red_100}
      maximumTrackTintColor={theme.colors.gray_900}
      thumbTintColor={theme.colors.red_900}
      style={{ width, height }}
      {...rest}
    />
  )
}
