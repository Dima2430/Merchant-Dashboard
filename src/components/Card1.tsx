import { FunctionComponent } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import ChadSpacer from "./ChadSpacer";
import MDInputField from "./MDInputField";

export type Card1Type = {
  className?: string;
};

const Card1: FunctionComponent<Card1Type> = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 shadow-[0px_5px_20px_rgba(108,_117,_139,_0.2)] rounded-lg bg-shade-100 flex flex-col items-start justify-start pt-16 pb-[75px] pl-10 pr-[39px] box-border max-w-full z-[1] text-left text-5xl text-darkslategray-100 font-body-regular mq750:pt-[42px] mq750:pb-[49px] mq750:box-border ${className}`}
    >
      <div className="flex flex-row items-start justify-start gap-0.5 font-widget-headers-h1">
        <img
          className="h-8 w-8 relative"
          loading="lazy"
          alt=""
          src="/chad-logo1.svg"
        />
        <h3 className="m-0 relative text-inherit tracking-[-0.01em] leading-[32px] font-bold font-[inherit] inline-block min-w-[64px] mq450:text-lgi mq450:leading-[26px]">
          Chad
        </h3>
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
      <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[100%] font-semibold font-[inherit] text-mddark-blue-20 mq450:text-lgi mq450:leading-[19px]">
        Welcome to Chad
      </h3>
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
      <div className="relative text-sm tracking-[-0.01em] leading-[21px] text-mdshade-40">
        Go live in 10 minutes! Our self-service widget empowers your customers
        to manage orders and track shipments 24/7 without driving you crazy.
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
      <form className="m-0 self-stretch bg-shade-100 flex flex-col items-start justify-start">
        <MDInputField
          fieldType="Generic"
          label
          showPassword={false}
          state="Default"
          textDescription={false}
          label1="Email"
          messageBoxPlaceholder="megachad@trychad.com"
        />
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
        <MDInputField
          fieldType="Generic"
          label
          showPassword={false}
          state="Default"
          textDescription={false}
          label1="Your name"
          messageBoxPlaceholder="Mega Chad"
        />
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
        <div className="w-[400px] flex flex-col items-start justify-start gap-2">
          <div className="relative text-xs tracking-[-0.01em] leading-[18px] font-medium font-body-regular text-mdshade-40 text-left">
            Password
          </div>
          <TextField
            className="[border:none] bg-[transparent] self-stretch h-[45px] font-body-regular text-base text-silver"
            placeholder="Enter password"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <img width="16px" height="16px" src="/iconeyeoff.svg" />
              ),
            }}
            sx={{
              "& fieldset": { border: "none" },
              "& .MuiInputBase-root": {
                height: "45px",
                backgroundColor: "#f8f9fc",
                paddingRight: "10px",
              },
              "& .MuiInputBase-input": { color: "#c3cad5" },
            }}
          />
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
          Create account
        </Button>
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
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-[111px] mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="flex-1 relative text-xs tracking-[-0.01em] leading-[18px] font-body-regular text-center">
            <span className="text-mdshade-40">{`Already have an account? `}</span>
            <span className="text-chad-blue-0">Login</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Card1;
