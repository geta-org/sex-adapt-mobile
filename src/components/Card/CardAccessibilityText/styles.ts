import styled from 'styled-components/native';

interface AccessibilityProps {
  isActive: boolean;
}

export const CardAccessibilityTextConteiner = styled.View`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;

  width: 286px;
  height: 80px;

  margin-top: 10px;
`;

export const AccessibilityContent = styled.View<AccessibilityProps>`
  align-items: center;
  justify-content: center;

  height: 36px;

  border-radius: 20px;
  padding-left: 9px;
  padding-right: 9px;
  margin-bottom: 8px;

  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.red_900 : theme.colors.gray_500};
`;

export const TextAccessibility = styled.Text`
  font-family: ${({ theme }) => theme.font_family.bold};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
`;
