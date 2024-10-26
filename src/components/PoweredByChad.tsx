import { FunctionComponent } from "react";

export type PoweredByChadType = {
  className?: string;
};

const PoweredByChad: FunctionComponent<PoweredByChadType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-80 h-12 flex flex-col items-start justify-start pt-0 px-0 pb-3.5 box-border relative gap-[14.9px] text-left text-xs text-shade-700 font-body-regular ${className}`}
    >
      <div className="w-full h-[46.9px] absolute !m-[0] right-[0px] bottom-[0px] left-[0px] bg-shade-95 z-[0]" />
      <div className="w-80 relative bg-shade-80 h-[1.1px] z-[1]" />
      <div className="w-[221px] h-[18px] flex flex-row items-start justify-start py-0 pl-[99px] pr-0 box-border z-[2]">
        <div className="h-[18px] w-[122px] flex flex-row items-start justify-start gap-1">
          <img
            className="h-[18px] w-[18px] relative"
            loading="lazy"
            alt=""
            src="/chad-logo.svg"
          />
          <div className="h-[18px] w-[101px] relative tracking-[-0.01em] leading-[18px] font-medium inline-block shrink-0">
            Powered by Chad
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoweredByChad;
