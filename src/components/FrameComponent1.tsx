import { FunctionComponent } from "react";
import HeadingSettingCategory from "./HeadingSettingCategory";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[1306px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full shrink-0 text-left text-base text-shade-0 font-body-regular ${className}`}
    >
      <div className="w-[616px] flex flex-col items-start justify-start gap-4 shrink-0 max-w-full">
        <HeadingSettingCategory
          icontruck="/icontruck.svg"
          shippingAndTrackingScreen="Shipping and tracking screen"
          helpYourCustomersLocateTheir="Help your customers locate their orders"
          iconchevronRight="/iconchevronright-5.svg"
        />
        <HeadingSettingCategory
          icontruck="/iconmessagesquare.svg"
          shippingAndTrackingScreen="Contact us screen"
          helpYourCustomersLocateTheir="A means for customers to reach you directly"
          iconchevronRight="/iconchevronright-6.svg"
        />
        <HeadingSettingCategory
          icontruck="/iconearth.svg"
          shippingAndTrackingScreen="General store policies"
          helpYourCustomersLocateTheir="[lipsum]"
          iconchevronRight="/iconchevronright-6.svg"
        />
      </div>
    </div>
  );
};

export default FrameComponent1;
