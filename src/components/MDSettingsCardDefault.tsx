import { FunctionComponent } from "react";
import MDToggle from "./MDToggle";

export type MDSettingsCardDefaultType = {
  className?: string;
  title?: string;
  description?: string;
  state?: boolean;
  type?: "Active";
  mDToggleHeight?: string;
};

const MDSettingsCardDefault: FunctionComponent<MDSettingsCardDefaultType> = ({
  className = "",
  title,
  description,
  state,
  type,
  mDToggleHeight,
}) => {
  return (
    <div
      className={`self-stretch shadow-[0px_1px_5px_rgba(108,_117,_139,_0.4)] rounded-lg bg-shade-100 flex flex-col items-center justify-start py-[18px] px-[23px] text-left text-base text-shade-0 font-body-regular ${className}`}
    >
      <div className="w-[453px] rounded-lg flex flex-row items-start justify-start gap-2">
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/icongripmodule.svg"
        />
        <div className="w-[421px] flex flex-col items-start justify-start gap-1">
          <div className="w-[421px] flex flex-row items-center justify-start gap-6">
            <div className="w-[365px] relative tracking-[-0.01em] leading-[24px] font-medium flex items-center shrink-0">
              {title}
            </div>
            <MDToggle
              state={state}
              type={type}
              mDToggleHeight={mDToggleHeight}
            />
          </div>
          <div className="w-[365px] flex flex-row items-center justify-start gap-[5px] text-xs text-shade-40">
            <img
              className="h-4 w-4 relative rounded-lg overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/iconlink2.svg"
            />
            <div className="w-[344px] relative tracking-[-0.01em] leading-[18px] inline-block shrink-0">
              {description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MDSettingsCardDefault;
