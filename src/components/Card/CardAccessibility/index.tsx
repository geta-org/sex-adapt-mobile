import {
  BarsOff,
  BarsWithSupport,
  BrailleOff,
  BrailleWithSupport,
  DoorWide,
  DoorWideOff,
  ElevatorWith,
  ElevatorWithout,
  PoundOff,
  PoundWithSupport,
  RampOff,
  RampWith,
  TactileFloorOff,
  TactileFloorWith
} from '@assets';

import { CardAccessibilityContainer } from './styles';

interface AccessibilityProps {
  uneeveness: boolean;
  elevator: boolean;
  tactileFloor: boolean;
  signLanguage: boolean;
  braille: boolean;
  bar: boolean;
  incompatibleDimensions?: boolean;
}

// TODO: CREATE COMPONENT

export function CardAccessibility({
  uneeveness,
  elevator,
  tactileFloor,
  signLanguage,
  braille,
  bar,
  incompatibleDimensions
}: AccessibilityProps) {
  return (
    <CardAccessibilityContainer>
      {uneeveness == true ? (
        <RampWith width={36} height={36} accessibilityRole={'image'} />
      ) : (
        <RampOff width={36} height={36} accessibilityRole={'image'} />
      )}

      {elevator == true ? (
        <ElevatorWith width={36} height={36} accessibilityRole={'image'} />
      ) : (
        <ElevatorWithout width={36} height={36} accessibilityRole={'image'} />
      )}

      {tactileFloor == true ? (
        <TactileFloorWith width={36} height={36} accessibilityRole={'image'} />
      ) : (
        <TactileFloorOff width={36} height={36} accessibilityRole={'image'} />
      )}

      {signLanguage == true ? (
        <PoundWithSupport width={36} height={36} accessibilityRole={'image'} />
      ) : (
        <PoundOff width={36} height={36} accessibilityRole={'image'} />
      )}

      {braille == true ? (
        <BrailleWithSupport
          width={36}
          height={36}
          accessibilityRole={'image'}
        />
      ) : (
        <BrailleOff width={36} height={36} accessibilityRole={'image'} />
      )}

      {bar == true ? (
        <BarsWithSupport width={36} height={36} accessibilityRole={'image'} />
      ) : (
        <BarsOff width={36} height={36} accessibilityRole={'image'} />
      )}

      {incompatibleDimensions == true ? (
        <DoorWide width={36} height={36} accessibilityRole={'image'} />
      ) : (
        <DoorWideOff width={36} height={36} accessibilityRole={'image'} />
      )}
    </CardAccessibilityContainer>
  );
}
