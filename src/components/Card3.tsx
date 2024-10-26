import { FunctionComponent } from "react";
import ChadSpacer from "./ChadSpacer";
import Benefit from "./Benefit";

export type Card3Type = {
  className?: string;
};

const Card3: FunctionComponent<Card3Type> = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 shadow-[0px_5px_20px_rgba(108,_117,_139,_0.2)] rounded-lg bg-shade-100 flex flex-col items-start justify-start py-16 pl-10 pr-[39px] box-border max-w-full z-[1] text-left text-sm text-mddark-blue-20 font-body-regular mq750:pt-[42px] mq750:pb-[42px] mq750:box-border ${className}`}
    >
      <div className="flex flex-row items-start justify-start gap-0.5 text-5xl text-darkslategray-100 font-widget-headers-h1">
        <img
          className="h-8 w-8 relative"
          loading="lazy"
          alt=""
          src="/chad-logo1.svg"
        />
        <h2 className="m-0 relative text-inherit tracking-[-0.01em] leading-[32px] font-bold font-[inherit] inline-block min-w-[64px] mq450:text-lgi mq450:leading-[26px]">
          Chad
        </h2>
      </div>
      <ChadSpacer
        color={false}
        size="24px"
        showChadSpacer
        chadSpacerHeight="24px"
        chadSpacerPosition="unset"
        chadSpacerTop="unset"
        chadSpacerLeft="unset"
        chadSpacerWidth="400px"
        chadSpacerFlexDirection="row"
        chadSpacerAlignItems="flex-start"
        chadSpacerJustifyContent="flex-start"
        chadSpacerAlignSelf="unset"
        showSpacer
      />
      <h2 className="m-0 relative text-5xl tracking-[-0.02em] leading-[120%] font-semibold font-[inherit] mq450:text-lgi mq450:leading-[23px]">
        Connect your customer support email
      </h2>
      <ChadSpacer
        color={false}
        size="08px"
        showChadSpacer
        chadSpacerHeight="8px"
        chadSpacerPosition="unset"
        chadSpacerTop="unset"
        chadSpacerLeft="unset"
        chadSpacerWidth="320px"
        chadSpacerFlexDirection="row"
        chadSpacerAlignItems="flex-start"
        chadSpacerJustifyContent="flex-start"
        chadSpacerAlignSelf="unset"
        showSpacer
      />
      <div className="relative tracking-[-0.01em] leading-[21px] text-mdshade-40">
        Allows Chad to send automated responses on your behalf from your usual
        support mailbox
      </div>
      <ChadSpacer
        color={false}
        size="32px"
        showChadSpacer
        chadSpacerHeight="32px"
        chadSpacerPosition="unset"
        chadSpacerTop="unset"
        chadSpacerLeft="unset"
        chadSpacerWidth="400px"
        chadSpacerFlexDirection="row"
        chadSpacerAlignItems="flex-start"
        chadSpacerJustifyContent="flex-start"
        chadSpacerAlignSelf="unset"
        showSpacer
      />
      <Benefit
        contextualResponses="Contextual responses"
        customResponsesToAnySupport="Custom responses to any support situation from “where’s my stuff?” to “I want a refund”"
      />
      <ChadSpacer
        color={false}
        size="16px"
        showChadSpacer
        chadSpacerHeight="16px"
        chadSpacerPosition="unset"
        chadSpacerTop="unset"
        chadSpacerLeft="unset"
        chadSpacerWidth="400px"
        chadSpacerFlexDirection="row"
        chadSpacerAlignItems="flex-start"
        chadSpacerJustifyContent="flex-start"
        chadSpacerAlignSelf="unset"
        showSpacer
      />
      <Benefit
        contextualResponses="Reply from anywhere"
        customResponsesToAnySupport="Respond to your customers via email or Chad chat—it’s all saved in the same thread"
      />
      <ChadSpacer
        color={false}
        size="16px"
        showChadSpacer
        chadSpacerHeight="16px"
        chadSpacerPosition="unset"
        chadSpacerTop="unset"
        chadSpacerLeft="unset"
        chadSpacerWidth="400px"
        chadSpacerFlexDirection="row"
        chadSpacerAlignItems="flex-start"
        chadSpacerJustifyContent="flex-start"
        chadSpacerAlignSelf="unset"
        showSpacer
      />
      <Benefit
        contextualResponses="Categorical inbox tags"
        customResponsesToAnySupport="Tags your emails by category so you know what to expect before even opening an email"
      />
      <ChadSpacer
        color={false}
        size="32px"
        showChadSpacer
        chadSpacerHeight="32px"
        chadSpacerPosition="unset"
        chadSpacerTop="unset"
        chadSpacerLeft="unset"
        chadSpacerWidth="400px"
        chadSpacerFlexDirection="row"
        chadSpacerAlignItems="flex-start"
        chadSpacerJustifyContent="flex-start"
        chadSpacerAlignSelf="unset"
        showSpacer
      />
      <div className="self-stretch rounded-sm bg-dodgerblue flex flex-row items-start justify-start p-px gap-24 z-[3] text-shade-100 mq450:gap-12 mq450:flex-wrap">
        <div className="w-12 rounded-12xs bg-shade-100 flex flex-row items-start justify-start py-[15px] px-3.5 box-border">
          <img
            className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/social-icon.svg"
          />
        </div>
        <div className="flex flex-col items-start justify-start pt-[13.5px] px-0 pb-0">
          <div className="relative tracking-[-0.01em] leading-[21px] font-medium">
            Connect Gmail account
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[37px] pr-[42px] mq450:pr-5 mq450:box-border">
        <ChadSpacer
          color={false}
          size="16px"
          showChadSpacer
          chadSpacerHeight="16px"
          chadSpacerPosition="unset"
          chadSpacerTop="unset"
          chadSpacerLeft="unset"
          chadSpacerWidth="320px"
          chadSpacerFlexDirection="row"
          chadSpacerAlignItems="flex-start"
          chadSpacerJustifyContent="flex-start"
          chadSpacerAlignSelf="unset"
          showSpacer
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[151px] pr-[156px] text-center text-xs text-mdshade-40 mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="flex-1 relative tracking-[-0.01em] leading-[18px] z-[5]">
          I don’t use Gmail
        </div>
      </div>
    </div>
  );
};

export default Card3;
