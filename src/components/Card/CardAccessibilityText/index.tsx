import {
  AccessibilityContent,
  CardAccessibilityTextConteiner,
  TextAccessibility
} from './styles';

interface AccessibilityProps {
  groundfloor: boolean;
  uneeveness?: boolean;
  ramp?: boolean;
  elevator?: boolean;
  signLanguage?: boolean;
  braille?: boolean;
}

export function CardAccessibilityText({
  groundfloor,
  uneeveness,
  elevator,
  ramp,
  signLanguage,
  braille
}: AccessibilityProps) {
  return (
    <CardAccessibilityTextConteiner>
      <AccessibilityContent isActive={groundfloor}>
        <TextAccessibility>Quarto térreo</TextAccessibility>
      </AccessibilityContent>

      <AccessibilityContent isActive={uneeveness}>
        <TextAccessibility>Desnível</TextAccessibility>
      </AccessibilityContent>

      <AccessibilityContent isActive={ramp}>
        <TextAccessibility>Rampa</TextAccessibility>
      </AccessibilityContent>

      <AccessibilityContent isActive={elevator}>
        <TextAccessibility>Elevador</TextAccessibility>
      </AccessibilityContent>

      <AccessibilityContent isActive={signLanguage}>
        <TextAccessibility>Libras</TextAccessibility>
      </AccessibilityContent>

      <AccessibilityContent isActive={braille}>
        <TextAccessibility>Braile</TextAccessibility>
      </AccessibilityContent>
    </CardAccessibilityTextConteiner>
  );
}
