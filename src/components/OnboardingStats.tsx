import { FunctionComponent } from "react";

export type OnboardingStatsType = {
  className?: string;

  /** Variant props */
  stat?: "5X";
};

const OnboardingStats: FunctionComponent<OnboardingStatsType> = ({
  className = "",
  stat = "50%",
}) => {
  return (
    <div
      className={`h-[119px] flex flex-col items-center justify-start gap-4 text-left text-13xl text-chad-blue-30 font-widget-headers-h1 ${className}`}
      data-stat={stat}
    >
      <div className="w-[364px] rounded-lg bg-mddark-blue-20 flex flex-row items-center justify-start p-4 box-border gap-4">
        <b className="relative leading-[100%]">5X</b>
        <div className="flex-1 relative text-sm tracking-[-0.01em] leading-[21px] font-body-regular">
          Acquiring a new customer is 5x more costly than making an unhappy
          customer happy
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-3">
        <div className="w-2 relative rounded-[50%] bg-chad-blue-30 h-2" />
        <div className="w-2 relative rounded-[50%] bg-mddark-blue-20 h-2" />
        <div className="w-2 relative rounded-[50%] bg-mddark-blue-20 h-2" />
        <div className="w-2 relative rounded-[50%] bg-mddark-blue-20 h-2" />
        <div className="w-2 relative rounded-[50%] bg-mddark-blue-20 h-2" />
      </div>
    </div>
  );
};

export default OnboardingStats;
