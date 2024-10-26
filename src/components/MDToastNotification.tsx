import { FunctionComponent } from "react";

export type MDToastNotificationType = {
  className?: string;

  /** Variant props */
  state?: "Success";
};

const MDToastNotification: FunctionComponent<MDToastNotificationType> = ({
  className = "",
  state = "Error",
}) => {
  return (
    <div
      className={`absolute top-[7px] left-[0px] shadow-[0px_1px_5px_rgba(108,_117,_139,_0.4)] rounded bg-success-20 overflow-hidden flex flex-row items-start justify-start py-3 pl-6 pr-[18px] gap-2.5 text-left text-xs text-success-10 font-body-regular ${className}`}
      data-state={state}
    >
      <div className="w-60 relative tracking-[-0.01em] leading-[18px] inline-block shrink-0 z-[0]">
        <p className="m-0">Shopify account connected</p>
        <p className="m-0 font-semibold">Smiling Raccoon</p>
      </div>
      <div className="w-1.5 absolute !m-[0] top-[0px] left-[0px] bg-success-10 h-[88px] z-[1]" />
    </div>
  );
};

export default MDToastNotification;
