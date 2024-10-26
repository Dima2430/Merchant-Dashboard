import { FunctionComponent } from "react";

export type MDGripModuleType = {
  className?: string;

  /** Variant props */
  link?: boolean;
  toggle?: boolean;
};

const MDGripModule: FunctionComponent<MDGripModuleType> = ({
  className = "",
  link = true,
  toggle = true,
}) => {
  return (
    <div
      className={`w-[453px] rounded-lg flex flex-row items-start justify-start text-left text-xs text-shade-40 font-body-regular ${className}`}
      data-link={link}
      data-toggle={toggle}
    >
      <div className="w-[421px] flex flex-col items-start justify-start">
        <div className="w-[365px] flex flex-row items-center justify-start gap-[5px]">
          <img
            className="h-4 w-4 relative rounded-lg overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/iconlink2.svg"
          />
          <div className="w-[344px] relative tracking-[-0.01em] leading-[18px] inline-block shrink-0">
            Linked to the “Shipping and tracking” screen
          </div>
        </div>
      </div>
    </div>
  );
};

export default MDGripModule;
