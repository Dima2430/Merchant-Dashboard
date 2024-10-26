import { FunctionComponent } from "react";
import OnboardingStats from "../components/OnboardingStats";
import Card1 from "../components/Card1";

const WelcomeToChad: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-shade-100 overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal] [row-gap:20px] text-left text-base text-mddark-blue-60 font-body-regular mq1125:flex-wrap">
      <div className="[background:linear-gradient(-20.98deg,_#0d3251,_#1a476c)] flex flex-col items-start justify-start pt-[200px] px-[102px] pb-14 box-border gap-[253px] max-w-full mq750:gap-[126px] mq750:pt-[130px] mq750:px-[51px] mq750:pb-9 mq750:box-border mq750:min-w-full mq450:gap-[63px] mq450:pl-5 mq450:pr-5 mq450:box-border mq1125:flex-1">
        <div className="w-[328px] h-[272px] flex flex-col items-start justify-start relative gap-12">
          <div className="flex flex-row items-center justify-start gap-4 z-[0] text-shade-100">
            <div className="w-[34px] relative rounded-[50%] border-chad-blue-0 border-[2px] border-solid box-border h-[34px]" />
            <div className="relative tracking-[-0.01em] leading-[24px] font-medium">
              Welcome
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-4 z-[1]">
            <div className="w-[34px] relative rounded-[50%] border-mddark-blue-60 border-[2px] border-solid box-border h-[34px]" />
            <div className="relative tracking-[-0.01em] leading-[24px]">
              Connect your Shopify store
            </div>
          </div>
          <div className="flex flex-row items-center justify-start relative gap-4 z-[2]">
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
            src="/vector.svg"
          />
          <div className="flex flex-row items-center justify-start gap-4 z-[5]">
            <div className="w-[34px] relative rounded-[50%] border-mddark-blue-60 border-[2px] border-solid box-border h-[34px]" />
            <div className="relative tracking-[-0.01em] leading-[24px]">
              Done
            </div>
          </div>
        </div>
        <OnboardingStats stat="5X" />
      </div>
      <section className="flex-1 flex flex-row items-start justify-start pt-[132px] px-[196px] pb-[68px] box-border relative min-w-[567px] max-w-full mq750:pt-[86px] mq750:pb-11 mq750:box-border mq750:min-w-full mq450:pl-5 mq450:pr-5 mq450:box-border mq1050:pl-[98px] mq1050:pr-[98px] mq1050:box-border">
        <img
          className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/tileable-doodle.svg"
        />
        <Card1 />
      </section>
    </div>
  );
};

export default WelcomeToChad;
