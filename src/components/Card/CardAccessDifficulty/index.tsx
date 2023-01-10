import { useMemo, useState } from "react";

import {
  BarsWithSupport,
  BrailleWithSupport,
  DoorWide,
  ElevatorWith,
  FloorUneven,
  PoundWithSupport,
  TactileFloorWith,
} from "@assets";
import { CardAccessDifficultyContainer, Label } from "./styles";

interface CardAccessDifficultyProps {
  accessibility:
    | "Elevator"
    | "TactileFloor"
    | "FloorUneven"
    | "SupportBars"
    | "BrailleSignage"
    | "DifferentDimensions"
    | "ServicePounds"
    | string;
  onSelectDifficulty: (Accessibility: string) => void;
  toggleAccessDifficulty: boolean;
}

export function CardAccessDifficulty({
  accessibility,
  onSelectDifficulty,
  toggleAccessDifficulty,
}: CardAccessDifficultyProps) {
  const [accessibilityRender, setAccessibilityRender] = useState({
    name: "Elevador",
    icon: <ElevatorWith width={75} height={75} />,
  });

  function handleDifficulty(difficulty: string) {
    onSelectDifficulty(difficulty);
  }

  const iconSize = 90;

  useMemo(() => {
    function renderAccessibility() {
      switch (accessibility) {
        case "Elevator":
          setAccessibilityRender({
            name: "Elevador",
            icon: <ElevatorWith width={iconSize} height={iconSize} />,
          });
          break;
        case "TactileFloor":
          setAccessibilityRender({
            name: "Piso tátil",
            icon: <TactileFloorWith width={iconSize} height={iconSize} />,
          });
          break;
        case "FloorUneven":
          setAccessibilityRender({
            name: "Sem desníveis",
            icon: <FloorUneven width={iconSize} height={iconSize} />,
          });
          break;
        case "SupportBars":
          setAccessibilityRender({
            name: "Barras de suporte",
            icon: <BarsWithSupport width={iconSize} height={iconSize} />,
          });
          break;
        case "BrailleSignage":
          setAccessibilityRender({
            name: "Sinalização em braile",
            icon: <BrailleWithSupport width={iconSize} height={iconSize} />,
          });
          break;
        case "DifferentDimensions":
          setAccessibilityRender({
            name: "Dimensões diversas",
            icon: <DoorWide width={iconSize} height={iconSize} />,
          });
          break;
        case "ServicePounds":
          setAccessibilityRender({
            name: "Atendimento em Libras",
            icon: <PoundWithSupport width={iconSize} height={iconSize} />,
          });
          break;
        default:
          break;
      }
    }

    renderAccessibility();
  }, [accessibility]);

  return (
    <CardAccessDifficultyContainer
      onPress={() => handleDifficulty(accessibility)}
      active={toggleAccessDifficulty}
    >
      {accessibilityRender.icon}
      <Label>{accessibilityRender.name}</Label>
    </CardAccessDifficultyContainer>
  );
}
