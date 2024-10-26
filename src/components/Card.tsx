import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import ChadSpacer from "./ChadSpacer";
import IntegrationFeatures from "./IntegrationFeatures";

export type CardType = {
  className?: string;
};

const Card: FunctionComponent<CardType> = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 shadow-[0px_5px_20px_rgba(108,_117,_139,_0.2)] rounded-lg bg-shade-100 flex flex-col items-start justify-start py-16 px-10 box-border max-w-full z-[1] text-left text-sm text-mddark-blue-20 font-body-regular mq750:pt-[42px] mq750:pb-[42px] mq750:box-border ${className}`}
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
      <ChadSpacer color={false} size="24px" showChadSpacer showSpacer />
      <div className="self-stretch h-8 relative text-5xl">
        <h2 className="m-0 absolute top-[0px] left-[0px] text-inherit tracking-[-0.02em] leading-[100%] font-semibold font-[inherit] flex items-center w-[401px] h-6 mq450:text-lgi mq450:leading-[19px]">
          Connect your Shopify store
        </h2>
        <ChadSpacer
          color={false}
          size="08px"
          showChadSpacer
          chadSpacerHeight="8px"
          chadSpacerPosition="absolute"
          chadSpacerTop="24px"
          chadSpacerLeft="0px"
          chadSpacerWidth="320px"
          chadSpacerFlexDirection="row"
          chadSpacerAlignItems="flex-start"
          chadSpacerJustifyContent="flex-start"
          chadSpacerAlignSelf="unset"
          showSpacer
        />
      </div>
      <div className="relative tracking-[-0.01em] leading-[21px] text-mdshade-40">
        Installs the Chad widget in your Shopify store and sets it up to display
        your customers’ order information and self-serve options.
      </div>
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
      <div className="w-[346px] flex flex-row items-start justify-start py-0 px-1 box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-start gap-3 max-w-full mq450:flex-wrap">
          <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
            <img
              className="w-4 h-4 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/iconcheck-21.svg"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-1 min-w-[201px]">
            <div className="self-stretch relative tracking-[-0.01em] leading-[21px] font-medium">
              Track orders and shipping
            </div>
            <div className="self-stretch relative text-xs tracking-[-0.01em] leading-[18px] text-mdshade-40">
              Global coverage with 600+ couriers supported
            </div>
          </div>
        </div>
      </div>
      <ChadSpacer
        color={false}
        size="16px"
        showChadSpacer
        chadSpacerHeight="16px"
        chadSpacerPosition="unset"
        chadSpacerTop="unset"
        chadSpacerLeft="unset"
        chadSpacerWidth="370px"
        chadSpacerFlexDirection="row"
        chadSpacerAlignItems="flex-start"
        chadSpacerJustifyContent="flex-start"
        chadSpacerAlignSelf="unset"
        showSpacer
      />
      <IntegrationFeatures
        manageOrders="Manage orders"
        allowCustomersToTrackReturn="Allow customers to track, return, exchange, or report problems with their orders"
      />
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
      <IntegrationFeatures
        manageOrders="Process returns and exchanges"
        allowCustomersToTrackReturn="Automatically checks your store policy and existing inventory before resolving or escalating each request"
      />
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
      <div className="self-stretch bg-shade-100 flex flex-col items-start justify-start z-[2] text-center text-xs text-mdshade-40">
        <Button
          className="self-stretch"
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "14",
            background: "#32abf2",
            borderRadius: "8px",
            "&:hover": { background: "#32abf2" },
          }}
        >
          Connect store
        </Button>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-10">
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
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-[148px] mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="flex-1 relative tracking-[-0.01em] leading-[18px]">
            I don’t use Shopify
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
