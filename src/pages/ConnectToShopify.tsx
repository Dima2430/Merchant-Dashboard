import { FunctionComponent } from "react";
import OnboardingSteps from "../components/OnboardingSteps";
import OnboardingButtons from "../components/OnboardingButtons";
import OnboardingStats from "../components/OnboardingStats";
import Card from "../components/Card";

const ConnectToShopify: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-shade-100 overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal] [row-gap:20px] text-left text-base text-mddark-blue-60 font-body-regular mq1125:flex-wrap">
      <div className="[background:linear-gradient(-20.98deg,_#0d3251,_#1a476c)] flex flex-col items-start justify-start pt-[200px] pb-14 pl-[102px] pr-[99px] box-border gap-[172px] min-w-[568px] max-w-full mq750:gap-[86px] mq750:pt-[130px] mq750:pb-9 mq750:pl-[51px] mq750:pr-[49px] mq750:box-border mq750:min-w-full mq450:gap-[43px] mq450:pl-5 mq450:pr-5 mq450:box-border mq1125:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-12 mq450:gap-6">
          <OnboardingSteps
            currentStep="Shopify"
            lastCompStep="Welcome"
            state="Default"
          />
          <div className="self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap">
            <OnboardingButtons iconLR={false} states="Default" />
            <div className="rounded h-[33px] flex flex-row items-center justify-start py-1.5 px-3 box-border gap-2">
              <div className="relative tracking-[-0.01em] leading-[21px]">
                Next
              </div>
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/iconchevronright.svg"
              />
            </div>
          </div>
        </div>
        <OnboardingStats stat="5X" />
      </div>
      <section className="flex-1 flex flex-row items-start justify-start pt-[132px] px-[196px] pb-[151px] box-border relative min-w-[567px] max-w-full mq750:pt-[86px] mq750:pb-[98px] mq750:box-border mq750:min-w-full mq450:pl-5 mq450:pr-5 mq450:box-border mq1050:pl-[98px] mq1050:pr-[98px] mq1050:box-border">
        <img
          className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/tileable-doodle.svg"
        />
        <Card />
      </section>
    </div>
  );
};

export default ConnectToShopify;
