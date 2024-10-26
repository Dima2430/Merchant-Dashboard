import { FunctionComponent } from "react";

export type HomePageHeaderType = {
  className?: string;

  /** Variant props */
  height?: "Short";
  type?: "Hi Su Fen";
};

const HomePageHeader: FunctionComponent<HomePageHeaderType> = ({
  className = "",
  height = "Short",
  type = "Hi There",
}) => {
  return (
    <div
      className={`w-80 bg-shade-0 h-[156px] flex flex-col items-start justify-start pt-[68px] px-[22px] pb-6 box-border gap-1.5 z-[2] text-left text-13xl text-shade-100 font-widget-headers-h1 ${className}`}
      data-height={height}
      data-type={type}
    >
      <h1 className="m-0 h-10 relative text-inherit tracking-[-0.01em] font-bold font-[inherit] flex items-center">
        Hi Su Fen,
      </h1>
      <div className="relative text-xs tracking-[-0.01em] leading-[18px] font-body-regular text-shade-80">
        How can we help you today?
      </div>
    </div>
  );
};

export default HomePageHeader;
