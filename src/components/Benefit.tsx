import { FunctionComponent } from "react";

export type BenefitType = {
  className?: string;
  contextualResponses?: string;
  customResponsesToAnySupport?: string;
};

const Benefit: FunctionComponent<BenefitType> = ({
  className = "",
  contextualResponses,
  customResponsesToAnySupport,
}) => {
  return (
    <div
      className={`self-stretch bg-shade-100 flex flex-row items-start justify-start py-0 px-1 gap-3 text-left text-sm text-mddark-blue-20 font-body-regular ${className}`}
    >
      <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
        <img
          className="w-4 h-4 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/iconcheck-21.svg"
        />
      </div>
      <div className="w-[310px] flex flex-col items-start justify-start gap-1">
        <div className="self-stretch relative tracking-[-0.01em] leading-[21px] font-medium">
          {contextualResponses}
        </div>
        <div className="relative text-xs tracking-[-0.01em] leading-[18px] text-mdshade-40">
          {customResponsesToAnySupport}
        </div>
      </div>
    </div>
  );
};

export default Benefit;
