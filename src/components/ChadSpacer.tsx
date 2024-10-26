import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type ChadSpacerType = {
  className?: string;
  showChadSpacer?: boolean;
  showSpacer?: boolean;

  /** Variant props */
  color?: boolean;
  size?: "24px" | "08px" | "32px" | "16px";

  /** Style props */
  chadSpacerHeight?: CSSProperties["height"];
  chadSpacerPosition?: CSSProperties["position"];
  chadSpacerTop?: CSSProperties["top"];
  chadSpacerLeft?: CSSProperties["left"];
  chadSpacerWidth?: CSSProperties["width"];
  chadSpacerFlexDirection?: CSSProperties["flexDirection"];
  chadSpacerAlignItems?: CSSProperties["alignItems"];
  chadSpacerJustifyContent?: CSSProperties["justifyContent"];
  chadSpacerAlignSelf?: CSSProperties["alignSelf"];
};

const ChadSpacer: FunctionComponent<ChadSpacerType> = ({
  className = "",
  color = false,
  size = "80px",
  showChadSpacer,
  chadSpacerHeight,
  chadSpacerPosition,
  chadSpacerTop,
  chadSpacerLeft,
  chadSpacerWidth,
  chadSpacerFlexDirection,
  chadSpacerAlignItems,
  chadSpacerJustifyContent,
  chadSpacerAlignSelf,
  showSpacer,
}) => {
  const chadSpacerStyle: CSSProperties = useMemo(() => {
    return {
      height: chadSpacerHeight,
      position: chadSpacerPosition,
      top: chadSpacerTop,
      left: chadSpacerLeft,
      width: chadSpacerWidth,
      flexDirection: chadSpacerFlexDirection,
      alignItems: chadSpacerAlignItems,
      justifyContent: chadSpacerJustifyContent,
      alignSelf: chadSpacerAlignSelf,
    };
  }, [
    chadSpacerHeight,
    chadSpacerPosition,
    chadSpacerTop,
    chadSpacerLeft,
    chadSpacerWidth,
    chadSpacerFlexDirection,
    chadSpacerAlignItems,
    chadSpacerJustifyContent,
    chadSpacerAlignSelf,
  ]);

  return (
    showChadSpacer && (
      <div
        className={`w-80 h-6 flex flex-row items-start justify-start [&_.spacer]:data-[color='false']:data-[size='08px']:h-2 [&_.spacer]:data-[color='false']:data-[size='32px']:h-8 [&_.spacer]:data-[color='false']:data-[size='16px']:w-[370px] [&_.spacer]:data-[color='false']:data-[size='16px']:h-4 ${className}`}
        data-color={color}
        data-size={size}
        style={chadSpacerStyle}
      >
        {showSpacer && <div className="spacer w-80 relative h-6" />}
      </div>
    )
  );
};

export default ChadSpacer;
