import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import ChadSpacer from "./ChadSpacer";

export type Card2Type = {
  className?: string;
};

const Card2: FunctionComponent<Card2Type> = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 shadow-[0px_5px_20px_rgba(108,_117,_139,_0.2)] rounded-lg bg-shade-100 flex flex-col items-end justify-start py-[126px] px-[66px] box-border max-w-full z-[1] text-center text-xl text-mdshade-40 font-body-regular mq750:py-[82px] mq750:px-[33px] mq750:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-end py-0 px-[132px] mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="flex-1 flex flex-row items-start justify-end pt-0 px-0 pb-14 relative">
          <img
            className="h-full w-[calc(100%_-_2.5px)] absolute !m-[0] top-[0px] right-[2.5px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/display-picture@2x.png"
          />
          <div className="rounded-2xl-6 bg-success-10 flex flex-row items-start justify-start py-[4.7px] px-1 z-[1]">
            <img
              className="h-[14.5px] w-[14.5px] relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/iconcheck-2.svg"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end py-0 px-[13px]">
        <ChadSpacer
          color={false}
          size="32px"
          showChadSpacer
          chadSpacerHeight="32px"
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
      <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[95px] pr-24 text-mddark-blue-20 mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="flex-1 relative tracking-[-0.02em] leading-[100%] font-semibold mq450:text-base mq450:leading-[16px]">
          Store connected
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end py-0 px-[13px]">
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
      </div>
      <div className="relative text-sm tracking-[-0.02em] leading-[150%]">
        Chad is now able to manage customer support requests for [STORE-NAME].
      </div>
      <div className="self-stretch flex flex-row items-start justify-end py-0 px-[13px]">
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
      <div className="self-stretch flex flex-row items-start justify-end py-0 px-[18px]">
        <Button
          className="w-[310px]"
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "14",
            background: "#32abf2",
            borderRadius: "8px",
            "&:hover": { background: "#32abf2" },
            width: 310,
            height: 43,
          }}
        >
          Continue
        </Button>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end py-0 px-[13px]">
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
      </div>
      <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[75px] pr-[76px] text-xs mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="flex-1 relative tracking-[-0.01em] leading-[18px]">
          <span>{`Wrong store? `}</span>
          <span className="text-chad-blue-0">Connect another one</span>
        </div>
      </div>
    </div>
  );
};

export default Card2;
