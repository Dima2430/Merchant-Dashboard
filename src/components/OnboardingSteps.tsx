import { FunctionComponent } from "react";

export type OnboardingStepsType = {
  className?: string;

  /** Variant props */
  currentStep?: "Shopify";
  lastCompStep?: "Welcome";
  state?: "Default";
};

const OnboardingSteps: FunctionComponent<OnboardingStepsType> = ({
  className = "",
  currentStep = "Shopify",
  lastCompStep = "Welcome",
  state = "Default",
}) => {
  return (
    <div
      className={`w-[328px] h-[272px] flex flex-col items-start justify-start relative gap-12 text-left text-base text-shade-100 font-body-regular ${className}`}
      data-currentStep={currentStep}
      data-lastCompStep={lastCompStep}
      data-state={state}
    >
      <div className="flex flex-row items-center justify-start gap-4 z-[0]">
        <div className="rounded-3xl bg-chad-blue-0 flex flex-row items-start justify-start p-2">
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/iconcheck.svg"
          />
        </div>
        <div className="relative tracking-[-0.01em] leading-[24px]">
          Welcome
        </div>
      </div>
      <div className="flex flex-row items-center justify-start gap-4 z-[1]">
        <div className="w-[34px] relative rounded-[50%] border-chad-blue-0 border-[2px] border-solid box-border h-[34px]" />
        <div className="relative tracking-[-0.01em] leading-[24px] font-medium">
          Connect your Shopify store
        </div>
      </div>
      <div className="flex flex-row items-center justify-start relative gap-4 z-[2] text-mddark-blue-60">
        <div className="w-[34px] relative rounded-[50%] border-mddark-blue-60 border-[2px] border-solid box-border h-[34px] z-[0]" />
        <div className="h-6 relative tracking-[-0.01em] leading-[24px] flex items-center z-[1]">
          Connect your customer support email
        </div>
        <img
          className="h-12 w-0.5 absolute !m-[0] top-[-48px] left-[16px] max-w-full overflow-hidden z-[2]"
          loading="lazy"
          alt=""
          src="/vector.svg"
        />
      </div>
      <img
        className="w-0.5 h-12 absolute !m-[0] top-[192px] left-[16px] max-w-full overflow-hidden shrink-0 z-[3]"
        loading="lazy"
        alt=""
        src="/vector.svg"
      />
      <img
        className="w-0.5 h-12 absolute !m-[0] top-[32px] left-[16px] max-w-full overflow-hidden shrink-0 z-[4]"
        loading="lazy"
        alt=""
        src="/vector-2.svg"
      />
      <div className="flex flex-row items-center justify-start gap-4 z-[5] text-mddark-blue-60">
        <div className="w-[34px] relative rounded-[50%] border-mddark-blue-60 border-[2px] border-solid box-border h-[34px]" />
        <div className="relative tracking-[-0.01em] leading-[24px]">Done</div>
      </div>
    </div>
  );
};

export default OnboardingSteps;
