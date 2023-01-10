import styled from 'styled-components/native';

export const HeadingSlider = styled.Text`
  font-family: ${({ theme }) => theme.font_family.bold};
  font-size: ${({ theme }) => theme.font_size.md};
  color: ${({ theme }) => theme.colors.gray_1000};
`;

export const LabelSlider = styled.Text`
  position: relative;
  font-size: ${({ theme }) => theme.font_size.xs};
  color: ${({ theme }) => theme.colors.gray_900};
`;
