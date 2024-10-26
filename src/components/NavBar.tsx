import { FunctionComponent } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import FrameComponent from "./FrameComponent";

export type NavBarType = {
  className?: string;
};

const NavBar: FunctionComponent<NavBarType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[271px] bg-darkslategray-200 flex flex-col items-start justify-start pt-[38px] px-0 pb-[22px] box-border gap-[29px] text-left text-base text-shade-100 font-body-regular mq450:pt-5 mq450:box-border mq1125:pt-[25px] mq1125:pb-5 mq1125:box-border ${className}`}
    >
      <div className="self-stretch h-[900px] relative bg-darkslategray-200 hidden" />
      <div className="flex flex-row items-start justify-start pt-0 px-[29px] pb-4 text-lg font-widget-headers-h1">
        <div className="flex flex-col items-start justify-start gap-2.5">
          <div className="w-[100px] h-[100px] relative">
            <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-shade-30 w-full h-full z-[1]" />
            <img
              className="absolute top-[16px] left-[16px] w-[68px] h-[68px] overflow-hidden z-[2]"
              loading="lazy"
              alt=""
              src="/iconuser.svg"
            />
          </div>
          <div className="flex flex-row items-start justify-start py-0 pl-0.5 pr-0">
            <div className="relative leading-[28px] font-medium z-[1]">
              Merchant name
            </div>
          </div>
        </div>
      </div>
      <FrameComponent
        iconhome="/iconhome.svg"
        home="Home"
        performanceStatistics="Performance statistics"
        tickets="Tickets"
      />
      <FrameComponent
        iconhome="/iconsettings.svg"
        home="Integrations"
        homeTextDecoration="unset"
        homeMinWidth="92px"
        performanceStatistics="Connect to Shopify"
        performanceStatisticsTextDecoration="unset"
        performanceStatisticsDisplay="unset"
        performanceStatisticsMinWidth="unset"
        tickets="Connect email"
        ticketsDisplay="inline-block"
        ticketsMinWidth="108px"
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-2">
        <div className="flex flex-row items-start justify-start py-0 px-[30px]">
          <div className="flex flex-row items-start justify-start gap-1">
            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
              <img
                className="w-4 h-4 relative overflow-hidden shrink-0 z-[3]"
                loading="lazy"
                alt=""
                src="/iconzap.svg"
              />
            </div>
            <div className="relative tracking-[-0.01em] leading-[24px] font-medium inline-block min-w-[97px] z-[3]">
              Automations
            </div>
          </div>
        </div>
        <TextField
          className="[border:none] bg-[transparent] self-stretch font-body-regular text-base text-shade-100 z-[5]"
          placeholder="Self-service portal"
          variant="outlined"
          sx={{
            "& fieldset": { border: "none" },
            "& .MuiInputBase-root": {
              height: "26px",
              backgroundColor: "rgba(255, 255, 255, 0.19)",
              borderRadius: "0px 0px 0px 0px",
            },
            "& .MuiInputBase-input": { color: "#fff" },
          }}
        />
      </div>
      <FrameComponent
        iconhome="/iconuser-1.svg"
        home="My account"
        homeTextDecoration="unset"
        homeMinWidth="90px"
        performanceStatistics="Profile"
        performanceStatisticsTextDecoration="none"
        performanceStatisticsDisplay="inline-block"
        performanceStatisticsMinWidth="49px"
        tickets={`Billing & usage`}
        ticketsDisplay="inline-block"
        ticketsMinWidth="109px"
      />
      <div className="flex flex-row items-start justify-start py-0 px-[29px] text-xs">
        <div className="flex flex-row items-start justify-start gap-1">
          <img
            className="h-[18px] w-[18px] relative z-[1]"
            loading="lazy"
            alt=""
            src="/chad-logo.svg"
          />
          <div className="relative tracking-[-0.01em] leading-[18px] font-medium inline-block min-w-[101px] z-[1]">
            Powered by Chad
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
