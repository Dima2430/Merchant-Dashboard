import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type MDToggleType = {
  className?: string;

  /** Variant props */
  state?: boolean;
  type?: "Active";

  /** Style props */
  mDToggleHeight?: CSSProperties["height"];
};

const MDToggle: FunctionComponent<MDToggleType> = ({
  className = "",
  state = true,
  type = "Active",
  mDToggleHeight,
}) => {
  const mDToggleStyle: CSSProperties = useMemo(() => {
    return {
      height: mDToggleHeight,
    };
  }, [mDToggleHeight]);

  return (
    <div
      className={`w-8 rounded-3xs bg-success-10 flex flex-row items-start justify-end p-0.5 box-border ${className}`}
      data-state={state}
      data-type={type}
      style={mDToggleStyle}
    >
      <div className="w-3.5 relative rounded-lg bg-shade-100 h-3.5" />
    </div>
  );
};

export default MDToggle;
