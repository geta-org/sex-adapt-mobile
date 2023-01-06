import { TouchableOpacityProps } from "react-native";
import { ButtonContainer } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  icon?: object;
}

export function ButtonRound({
  accessibilityLabel,
  accessibilityHint,
  icon,
  ...rest
}: ButtonProps) {
  return (
    <ButtonContainer
      accessible={true}
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      accessibilityRole={"button"}
      style={{ shadowOpacity: 0.29, elevation: 3 }}
      {...rest}
    >
      {icon === null ? null : icon}
    </ButtonContainer>
  );
}
