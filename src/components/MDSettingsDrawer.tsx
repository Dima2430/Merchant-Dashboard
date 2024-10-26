import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type MDSettingsDrawerType = {
  className?: string;
  label?: string;
  iconchevronRight?: string;

  /** Variant props */
  collapsed?: boolean;
  state?: "Default";

  /** Style props */
  mDSettingsDrawerHeight?: CSSProperties["height"];
};

const MDSettingsDrawer: FunctionComponent<MDSettingsDrawerType> = ({
  className = "",
  collapsed = true,
  state = "Default",
  mDSettingsDrawerHeight,
  label,
  iconchevronRight,
}) => {
  const mDSettingsDrawerStyle: CSSProperties = useMemo(() => {
    return {
      height: mDSettingsDrawerHeight,
    };
  }, [mDSettingsDrawerHeight]);

  return (
    <div
      className={`rounded-lg bg-mdshade-50 overflow-hidden flex flex-row items-start justify-start p-4 gap-16 text-left text-base text-shade-100 font-body-regular data-[collapsed='false']:data-[state='Default']:shrink-0 data-[collapsed='false']:data-[state='Default']:box-border [&_.iconchevron-right4]:data-[collapsed='false']:data-[state='Default']:m-0 ${className}`}
      data-collapsed={collapsed}
      data-state={state}
      style={mDSettingsDrawerStyle}
    >
      <div className="w-[420px] relative tracking-[-0.01em] leading-[24px] font-medium flex items-center shrink-0">
        {label}
      </div>
      <img
        className="iconchevron-right4 w-6 relative rounded-lg h-6 overflow-hidden shrink-0"
        alt=""
        src={iconchevronRight}
      />
    </div>
  );
};

export default MDSettingsDrawer;
