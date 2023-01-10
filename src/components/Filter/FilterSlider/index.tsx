import { View } from "react-native";
import { Slider } from "src/components/Slider";
import { HeadingSlider, LabelSlider } from "./styles";

interface FilterSliderProps {
  heading: string;
  text: string;
  textPosition: number;
  changeValue: (value: number) => void;
  minimumValue: number;
  maximumValue: number;
}

export function FilterSlider({
  heading,
  text,
  textPosition,
  changeValue,
  minimumValue,
  maximumValue,
}: FilterSliderProps) {
  return (
    <View>
      <HeadingSlider>{heading}:</HeadingSlider>
      <Slider
        accessibilityValue={{
          min: minimumValue,
          max: maximumValue,
        }}
        minimumValue={minimumValue}
        maximumValue={maximumValue}
        onValueChange={(value) => changeValue(value)}
      />
      <LabelSlider
        importantForAccessibility={"no-hide-descendants"}
        accessibilityElementsHidden={false}
        style={{ left: textPosition }}
      >
        {text}
      </LabelSlider>
    </View>
  );
}
