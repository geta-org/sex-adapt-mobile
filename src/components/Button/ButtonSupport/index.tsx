import { ReactNode } from 'react';

import { TouchableOpacityProps, TouchableWithoutFeedback } from 'react-native';
import { CardSupport, CardText } from './styles';

interface ButtonsProps extends TouchableOpacityProps {
  icon: ReactNode;
  title: string;
}

export function ButtonSupport({ icon, title, ...rest }: ButtonsProps) {
  return (
    <TouchableWithoutFeedback
      accessibilityRole={'button'}
      style={{ shadowOpacity: 0.29, elevation: 3 }}
      {...rest}>
      <CardSupport>
        {icon}
        <CardText>{title}</CardText>
      </CardSupport>
    </TouchableWithoutFeedback>
  );
}
