import { FunctionComponent } from "react";

export type IntegrationFeaturesType = {
  className?: string;
  manageOrders?: string;
  allowCustomersToTrackReturn?: string;
};

const IntegrationFeatures: FunctionComponent<IntegrationFeaturesType> = ({
  className = "",
  manageOrders,
  allowCustomersToTrackReturn,
}) => {
  return (
    <div
      className={`w-[346px] flex flex-row items-start justify-start py-0 px-1 box-border max-w-full text-left text-sm text-mddark-blue-20 font-body-regular ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-start gap-3 max-w-full mq450:flex-wrap">
        <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
          <img
            className="w-4 h-4 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/iconcheck-21.svg"
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-1 min-w-[201px]">
          <div className="self-stretch relative tracking-[-0.01em] leading-[21px] font-medium z-[1]">
            {manageOrders}
          </div>
          <div className="relative text-xs tracking-[-0.01em] leading-[18px] text-mdshade-40">
            {allowCustomersToTrackReturn}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationFeatures;
