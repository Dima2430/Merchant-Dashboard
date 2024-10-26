import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type ButtonIconType = {
  className?: string;

  /** Variant props */
  background?: boolean;
  state?: "Default";
  textLineCount?: "One";

  /** Style props */
  buttonIconTop?: CSSProperties["top"];
  buttonIconBottom?: CSSProperties["bottom"];
};

const ButtonIcon: FunctionComponent<ButtonIconType> = ({
  className = "",
  background = false,
  state = "Default",
  textLineCount = "One",
  buttonIconTop,
  buttonIconBottom,
}) => {
  const buttonIconStyle: CSSProperties = useMemo(() => {
    return {
      top: buttonIconTop,
      bottom: buttonIconBottom,
    };
  }, [buttonIconTop, buttonIconBottom]);

  return (
    <div
      className={`w-full h-[61px] !m-[0] absolute top-[0px] right-[0px] left-[0px] bg-shade-100 overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[60px] pb-0 pl-[26px] pr-[22px] box-border z-[0] ${className}`}
      data-background={background}
      data-state={state}
      data-textLineCount={textLineCount}
      style={buttonIconStyle}
    >
      <div className="w-[272px] relative bg-shade-80 h-px" />
    </div>
  );
};

export default ButtonIcon;
