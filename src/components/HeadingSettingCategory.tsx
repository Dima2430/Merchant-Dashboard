import { FunctionComponent } from "react";

export type HeadingSettingCategoryType = {
  className?: string;
  icontruck?: string;
  shippingAndTrackingScreen?: string;
  helpYourCustomersLocateTheir?: string;
  iconchevronRight?: string;
};

const HeadingSettingCategory: FunctionComponent<HeadingSettingCategoryType> = ({
  className = "",
  icontruck,
  shippingAndTrackingScreen,
  helpYourCustomersLocateTheir,
  iconchevronRight,
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start max-w-full text-left text-base text-shade-0 font-body-regular ${className}`}
    >
      <div className="self-stretch shadow-[0px_1px_5px_rgba(108,_117,_139,_0.25)] rounded-lg bg-shade-100 flex flex-row items-center justify-start flex-wrap content-center p-6 box-border gap-[72px] max-w-full mq450:gap-[18px] mq800:gap-9">
        <div className="flex-1 flex flex-row items-start justify-start gap-3 min-w-[307px] max-w-full mq800:flex-wrap">
          <img className="h-6 w-6 relative rounded-lg" alt="" src={icontruck} />
          <div className="flex-1 flex flex-col items-start justify-start min-w-[283px] max-w-full">
            <div className="relative tracking-[-0.01em] leading-[24px] font-semibold">
              {shippingAndTrackingScreen}
            </div>
            <div className="self-stretch relative text-sm tracking-[-0.01em] leading-[21px] text-shade-50">
              {helpYourCustomersLocateTheir}
            </div>
          </div>
        </div>
        <img
          className="h-6 w-6 relative rounded-lg overflow-hidden shrink-0"
          alt=""
          src={iconchevronRight}
        />
      </div>
    </div>
  );
};

export default HeadingSettingCategory;
