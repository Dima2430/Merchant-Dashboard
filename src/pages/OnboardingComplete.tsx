import { FunctionComponent, useCallback } from "react";
import {
  Button,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";
import ChadSpacer from "../components/ChadSpacer";
import NavBar from "../components/NavBar";
import MDGripModule from "../components/MDGripModule";
import MDSettingsCardDefault from "../components/MDSettingsCardDefault";
import MDSettingsCardDefault1 from "../components/MDSettingsCardDefault1";
import MDSettingsDrawer from "../components/MDSettingsDrawer";
import MDMainDrawer from "../components/MDMainDrawer";
import MDToggle from "../components/MDToggle";
import MDToastNotification from "../components/MDToastNotification";
import HomePageHeader from "../components/HomePageHeader";
import ButtonIcon from "../components/ButtonIcon";
import PoweredByChad from "../components/PoweredByChad";
import FrameComponent1 from "../components/FrameComponent1";

const OnboardingComplete: FunctionComponent = () => {
  const onAccordionHeaderClick = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      const element = event.target as HTMLElement;

      const accItem: HTMLElement =
        element.closest("[data-acc-item]") || element;
      const accContent = accItem.querySelector(
        "[data-acc-content]"
      ) as HTMLElement;
      const isOpen = accItem.hasAttribute("data-acc-open");
      const nextOuterSibling =
        accItem?.nextElementSibling ||
        (accItem?.parentElement?.nextElementSibling as HTMLElement);
      const prevOuterSibling =
        accItem?.previousElementSibling ||
        (accItem?.parentElement?.previousElementSibling as HTMLElement);
      const siblingContainerAccItem = accItem?.hasAttribute("data-acc-original")
        ? accItem?.nextElementSibling ||
          nextOuterSibling?.querySelector("[data-acc-item]") ||
          nextOuterSibling
        : accItem?.previousElementSibling ||
          prevOuterSibling?.querySelector("[data-acc-item]") ||
          prevOuterSibling;
      const siblingAccItem =
        (siblingContainerAccItem?.querySelector(
          "[data-acc-item]"
        ) as HTMLElement) || siblingContainerAccItem;

      if (!siblingAccItem) return;
      const originalDisplay = "flex";
      const siblingDisplay = "flex";

      const openClasses = ["grid-rows-[1fr]"];
      const closeClasses = ["pt-0", "pb-0", "mb-0", "mt-0", "grid-rows-[0fr]"];

      if (isOpen) {
        accContent?.classList.remove(...openClasses);
        accContent?.classList.add(...closeClasses);

        setTimeout(() => {
          if (accItem) {
            accItem.style.display = "none";
            siblingAccItem.style.display = siblingDisplay;
          }
        }, 100);
      } else {
        if (accItem) {
          accItem.style.display = "none";
          siblingAccItem.style.display = originalDisplay;
        }
        const siblingAccContent = siblingAccItem?.querySelector(
          "[data-acc-content]"
        ) as HTMLElement;
        setTimeout(() => {
          siblingAccContent?.classList.remove(...closeClasses);
          siblingAccContent?.classList.add(...openClasses);
        }, 1);
      }
    },
    []
  );

  return (
    <div className="w-full h-[900px] relative bg-shade-99 overflow-hidden flex flex-col items-start justify-start py-0 pl-0 pr-4 box-border gap-[523px] leading-[normal] tracking-[normal] text-left text-[48px] text-lavender font-body-regular mq450:gap-[131px] mq800:gap-[261px] mq1350:h-auto">
      <div className="relative leading-[100%] font-light hidden max-w-full z-[0] mq450:text-[29px] mq450:leading-[29px] mq800:text-[38px] mq800:leading-[38px]">
        Status: In Progress
      </div>
      <ChadSpacer
        color={false}
        size="08px"
        showChadSpacer={false}
        chadSpacerHeight="8px"
        chadSpacerPosition="relative"
        chadSpacerTop="unset"
        chadSpacerLeft="unset"
        chadSpacerWidth="320px"
        chadSpacerFlexDirection="unset"
        chadSpacerAlignItems="unset"
        chadSpacerJustifyContent="unset"
        chadSpacerAlignSelf="unset"
        showSpacer={false}
      />
      <ChadSpacer
        color={false}
        size="08px"
        showChadSpacer={false}
        chadSpacerHeight="8px"
        chadSpacerPosition="relative"
        chadSpacerTop="unset"
        chadSpacerLeft="unset"
        chadSpacerWidth="320px"
        chadSpacerFlexDirection="unset"
        chadSpacerAlignItems="unset"
        chadSpacerJustifyContent="unset"
        chadSpacerAlignSelf="unset"
        showSpacer={false}
      />
      <ChadSpacer
        color={false}
        size="08px"
        showChadSpacer={false}
        chadSpacerHeight="8px"
        chadSpacerPosition="relative"
        chadSpacerTop="unset"
        chadSpacerLeft="unset"
        chadSpacerWidth="320px"
        chadSpacerFlexDirection="unset"
        chadSpacerAlignItems="unset"
        chadSpacerJustifyContent="unset"
        chadSpacerAlignSelf="unset"
        showSpacer={false}
      />
      <ChadSpacer
        color={false}
        size="08px"
        showChadSpacer={false}
        chadSpacerHeight="8px"
        chadSpacerPosition="relative"
        chadSpacerTop="unset"
        chadSpacerLeft="unset"
        chadSpacerWidth="320px"
        chadSpacerFlexDirection="unset"
        chadSpacerAlignItems="unset"
        chadSpacerJustifyContent="unset"
        chadSpacerAlignSelf="unset"
        showSpacer={false}
      />
      <main className="flex flex-row items-start justify-start gap-[75px] shrink-0 max-w-full text-left text-[40px] text-shade-0 font-widget-headers-h1 mq450:gap-[19px] mq800:gap-[37px] mq1350:flex-wrap">
        <NavBar />
        <div className="h-[900px] flex flex-col items-start justify-start pt-[70px] px-0 pb-0 box-border max-w-full mq450:h-auto mq800:pt-[29px] mq800:box-border mq1125:pt-[45px] mq1125:box-border">
          <div className="self-stretch flex flex-col items-start justify-start gap-[70px] max-w-full shrink-0 mq450:gap-[17px] mq800:gap-[35px]">
            <div className="flex flex-row items-start justify-start py-0 pl-0.5 pr-px box-border max-w-full">
              <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[28px] font-bold font-[inherit] mq450:text-5xl mq450:leading-[17px] mq800:text-13xl mq800:leading-[22px]">
                Automation Settings
              </h1>
            </div>
            <div className="self-stretch flex flex-col items-start justify-end pt-[306px] pb-0 pl-0 pr-0.5 box-border relative max-w-full text-lg text-mdshade-50 font-body-regular mq450:pt-[129px] mq450:box-border mq800:pt-[199px] mq800:box-border">
              <div className="self-stretch shadow-[0px_5px_20px_rgba(108,_117,_139,_0.2)] rounded-t-none rounded-b-lg bg-shade-100 flex flex-col items-start justify-start pt-20 px-[38px] pb-6 box-border max-w-full z-[1] mq800:pt-[52px] mq800:pb-5 mq800:box-border">
                <div className="self-stretch rounded-t-none rounded-b-lg bg-shade-90 flex flex-col items-start justify-start py-4 px-[19px] gap-4">
                  <div className="self-stretch h-[82px] shadow-[0px_1px_5px_rgba(108,_117,_139,_0.4)] rounded-lg bg-shade-100 flex flex-col items-center justify-start py-[18px] px-[23px] box-border">
                    <MDGripModule link toggle />
                  </div>
                  <ChadSpacer
                    color={false}
                    size="16px"
                    showChadSpacer={false}
                    chadSpacerHeight="16px"
                    chadSpacerPosition="relative"
                    chadSpacerTop="unset"
                    chadSpacerLeft="unset"
                    chadSpacerWidth="unset"
                    chadSpacerFlexDirection="unset"
                    chadSpacerAlignItems="unset"
                    chadSpacerJustifyContent="unset"
                    chadSpacerAlignSelf="stretch"
                    showSpacer={false}
                  />
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <MDSettingsCardDefault
                        title={`Refunds & Exchanges`}
                        description="Linked to the “Shipping and tracking” screen"
                        state
                        type="Active"
                      />
                      <ChadSpacer
                        color={false}
                        size="16px"
                        showChadSpacer
                        chadSpacerHeight="16px"
                        chadSpacerPosition="unset"
                        chadSpacerTop="unset"
                        chadSpacerLeft="unset"
                        chadSpacerWidth="501px"
                        chadSpacerFlexDirection="row"
                        chadSpacerAlignItems="flex-start"
                        chadSpacerJustifyContent="flex-start"
                        chadSpacerAlignSelf="unset"
                        showSpacer
                      />
                      <MDSettingsCardDefault1
                        title="Payment / Coupon code issues"
                        state
                        type="Active"
                        mDToggleHeight="unset"
                      />
                    </div>
                    <ChadSpacer
                      color={false}
                      size="16px"
                      showChadSpacer
                      chadSpacerHeight="16px"
                      chadSpacerPosition="unset"
                      chadSpacerTop="unset"
                      chadSpacerLeft="unset"
                      chadSpacerWidth="501px"
                      chadSpacerFlexDirection="row"
                      chadSpacerAlignItems="flex-start"
                      chadSpacerJustifyContent="flex-start"
                      chadSpacerAlignSelf="unset"
                      showSpacer
                    />
                    <MDSettingsCardDefault1
                      title="Something else"
                      state
                      type="Active"
                      mDToggleHeight="unset"
                    />
                  </div>
                  <ChadSpacer
                    color={false}
                    size="16px"
                    showChadSpacer={false}
                    chadSpacerHeight="16px"
                    chadSpacerPosition="relative"
                    chadSpacerTop="unset"
                    chadSpacerLeft="unset"
                    chadSpacerWidth="unset"
                    chadSpacerFlexDirection="unset"
                    chadSpacerAlignItems="unset"
                    chadSpacerJustifyContent="unset"
                    chadSpacerAlignSelf="stretch"
                    showSpacer={false}
                  />
                  <MDSettingsCardDefault
                    title="Need more help?"
                    description="Linked to the “Contact us” screen"
                    state
                    type="Active"
                    mDToggleHeight="unset"
                  />
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-px box-border max-w-full">
                  <ChadSpacer
                    color={false}
                    size="08px"
                    showChadSpacer
                    chadSpacerHeight="8px"
                    chadSpacerPosition="unset"
                    chadSpacerTop="unset"
                    chadSpacerLeft="unset"
                    chadSpacerWidth="537px"
                    chadSpacerFlexDirection="row"
                    chadSpacerAlignItems="flex-start"
                    chadSpacerJustifyContent="flex-start"
                    chadSpacerAlignSelf="unset"
                    showSpacer
                  />
                </div>
                <MDSettingsDrawer
                  collapsed
                  state="Default"
                  label="After order is shipped"
                  iconchevronRight="/iconchevronright1.svg"
                />
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-px box-border max-w-full">
                  <ChadSpacer
                    color={false}
                    size="08px"
                    showChadSpacer
                    chadSpacerHeight="8px"
                    chadSpacerPosition="unset"
                    chadSpacerTop="unset"
                    chadSpacerLeft="unset"
                    chadSpacerWidth="537px"
                    chadSpacerFlexDirection="row"
                    chadSpacerAlignItems="flex-start"
                    chadSpacerJustifyContent="flex-start"
                    chadSpacerAlignSelf="unset"
                    showSpacer
                  />
                </div>
                <MDSettingsDrawer
                  collapsed
                  state="Default"
                  mDSettingsDrawerHeight="unset"
                  label="After order has been delivered"
                  iconchevronRight="/iconchevronright1.svg"
                />
              </div>
              <div className="!m-[0] absolute top-[120px] left-[38px] flex flex-row items-start justify-start max-w-full">
                <div className="!m-[0] absolute top-[-120px] right-[-40px] flex flex-col items-start justify-start gap-4 z-[0]">
                  <div className="relative leading-[28px] font-medium">
                    Appearance
                  </div>
                  <MDMainDrawer collapsed header={false} state="Default" />
                </div>
                <div className="!m-[0] absolute top-[49px] left-[calc(50%_-_308px)] flex flex-col items-start justify-start gap-4 text-shade-40">
                  <div className="relative leading-[28px] font-medium inline-block min-w-[71px]">
                    Content
                  </div>
                  <div className="rounded-t-lg rounded-b-none bg-mdshade-10 flex flex-row items-center justify-start p-6 gap-[72px]">
                    <div className="flex flex-row items-start justify-start">
                      <img
                        className="h-6 w-6 relative rounded-lg"
                        loading="lazy"
                        alt=""
                        src="/iconhome-1.svg"
                      />
                    </div>
                    <input
                      className="m-0 h-6 w-6 relative rounded-lg overflow-hidden shrink-0"
                      type="checkbox"
                    />
                  </div>
                </div>
                <div className="w-[434px] !m-[0] absolute top-[-98px] right-[-16px] shadow-[3px_12px_26px_rgba(108,_117,_139,_0.3)] rounded-lg bg-shade-100 flex flex-col items-start justify-start pt-6 pb-[401px] pl-[39px] pr-[38px] box-border min-h-[467px] max-w-full z-[7] text-5xl text-mddark-blue-20 font-widget-headers-h1">
                  <div className="self-stretch flex flex-row items-start justify-end">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/iconx.svg"
                    />
                  </div>
                  <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.01em] leading-[18px] font-bold font-[inherit] mq450:text-lgi mq450:leading-[14px]">
                    You’re ready to go! 🚀
                  </h3>
                  <ChadSpacer
                    color={false}
                    size="32px"
                    showChadSpacer={false}
                    chadSpacerHeight="32px"
                    chadSpacerPosition="relative"
                    chadSpacerTop="unset"
                    chadSpacerLeft="unset"
                    chadSpacerWidth="347px"
                    chadSpacerFlexDirection="unset"
                    chadSpacerAlignItems="unset"
                    chadSpacerJustifyContent="unset"
                    chadSpacerAlignSelf="unset"
                    showSpacer={false}
                  />
                  <ChadSpacer
                    color={false}
                    size="16px"
                    showChadSpacer={false}
                    chadSpacerHeight="16px"
                    chadSpacerPosition="relative"
                    chadSpacerTop="unset"
                    chadSpacerLeft="unset"
                    chadSpacerWidth="unset"
                    chadSpacerFlexDirection="unset"
                    chadSpacerAlignItems="unset"
                    chadSpacerJustifyContent="unset"
                    chadSpacerAlignSelf="stretch"
                    showSpacer={false}
                  />
                </div>
                <div className="flex flex-col items-start justify-start pt-[117px] px-0 pb-0 box-border relative gap-12 max-w-full text-base text-shade-100">
                  <div className="w-[480px] flex flex-row items-start justify-start py-0 px-[22px] box-border max-w-full">
                    <div className="flex-1 flex flex-col items-start justify-start relative max-w-full">
                      <div className="relative tracking-[-0.01em] leading-[24px] font-medium">
                        Home screen
                      </div>
                      <div className="self-stretch relative text-sm tracking-[-0.01em] leading-[21px]">
                        What users see when they first arrive at the helpdesk
                      </div>
                      <div className="w-[356px] absolute !m-[0] top-[-117px] right-[-59px] tracking-[-0.01em] leading-[24px] text-mdshade-40 inline-block">
                        <p className="m-0">{`A fully loaded self-service portal is now ready to deploy on your Shopify store. `}</p>
                        <p className="m-0">&nbsp;</p>
                        <p className="m-0">{`We’ve programmed it to follow industry best practices for shipping, return & exchange, and payment policy.`}</p>
                        <p className="m-0">&nbsp;</p>
                        <p className="m-0">
                          You can customize these settings to fit your store
                          policy anytime.
                        </p>
                        <p className="m-0">&nbsp;</p>
                        <p className="m-0">
                          <span>{`Lastly, `}</span>
                          <span className="font-semibold font-body-regular">
                            nothing is live until you hit “Go Live”!
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-[421px] !m-[0] absolute right-[43.5px] bottom-[0px] flex flex-row items-start justify-start gap-6 max-w-full text-shade-0 mq450:flex-wrap">
                    <div className="flex-1 relative tracking-[-0.01em] leading-[24px] font-medium inline-block min-w-[149px] max-w-full">
                      Track / Manage my order
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                      <MDToggle state type="Active" mDToggleHeight="18px" />
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-start gap-3.5 max-w-full">
                    <MDSettingsDrawer
                      collapsed={false}
                      state="Default"
                      mDSettingsDrawerHeight="56px"
                      label="All users"
                    />
                    <div className="w-[519.5px] flex flex-row items-start justify-end py-0 px-[23px] box-border max-w-full">
                      <div className="flex-1 flex flex-row items-end justify-between max-w-full gap-5">
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0"
                          loading="lazy"
                          alt=""
                          src="/icongripmodule.svg"
                        />
                        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-px box-border max-w-[calc(100%_-_44px)]">
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
                              width: 356,
                              height: 43,
                            }}
                          >
                            Start customizing
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[388px] flex flex-col items-start justify-start pt-8 px-0 pb-0 box-border max-w-full text-xs text-success-10 font-body-regular">
          <div className="self-stretch flex flex-col items-end justify-start gap-[31px] mq450:gap-[15px]">
            <div
              className="flex flex-col items-start justify-start gap-px"
              data-acc-group
            >
              <div className="w-[308px] h-[67px] relative">
                <MDToastNotification state="Success" />
                <div className="absolute top-[0px] left-[0px] w-full h-[60px]">
                  <img
                    className="absolute top-[19px] left-[274px] w-4 h-4 overflow-hidden"
                    alt=""
                    src="/iconx-1.svg"
                  />
                  <div
                    className="absolute top-[0px] left-[0px] shadow-[0px_1px_5px_rgba(108,_117,_139,_0.4)] rounded bg-success-20 overflow-hidden flex flex-row items-start justify-start py-3 pl-6 pr-[18px] gap-2.5 [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] cursor-pointer"
                    data-acc-item
                    data-acc-header
                    data-acc-original
                    onClick={onAccordionHeaderClick}
                  >
                    <div className="w-60 relative tracking-[-0.01em] leading-[18px] inline-block shrink-0 z-[0]">
                      <p className="m-0">Shopify account connected</p>
                      <p className="m-0 font-semibold">Smiling Raccoon</p>
                    </div>
                    <div className="w-1.5 absolute !m-[0] top-[0px] left-[0px] bg-success-10 h-[88px] z-[1]" />
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0 z-[2]"
                      loading="lazy"
                      alt=""
                      src="/iconx-1.svg"
                    />
                  </div>
                  <div className="hidden flex-col" data-acc-item data-acc-open>
                    <div
                      className="absolute top-[0px] left-[0px] shadow-[0px_1px_5px_rgba(108,_117,_139,_0.4)] rounded bg-success-20 overflow-hidden flex flex-row items-start justify-start py-3 pl-6 pr-[18px] gap-2.5 cursor-pointer"
                      data-acc-header
                      onClick={onAccordionHeaderClick}
                    >
                      <div className="w-60 relative tracking-[-0.01em] leading-[18px] inline-block shrink-0 z-[0]">
                        <p className="m-0">Shopify account connected</p>
                        <p className="m-0 font-semibold">Smiling Raccoon</p>
                      </div>
                      <div className="w-1.5 absolute !m-[0] top-[0px] left-[0px] bg-success-10 h-[88px] z-[1]" />
                      <img
                        className="h-4 w-4 relative overflow-hidden shrink-0 z-[2]"
                        loading="lazy"
                        alt=""
                        src="/iconx-1.svg"
                      />
                      <div className="relative text-[transparent] hidden z-[3]" />
                    </div>
                    <div
                      className="absolute top-[0px] left-[0px] shadow-[0px_1px_5px_rgba(108,_117,_139,_0.4)] rounded bg-success-20 overflow-hidden grid flex-row items-start justify-start py-3 pl-6 pr-[18px] gap-2.5 cursor-default grid-rows-[0fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
                      data-acc-content
                    >
                      <div className="[transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="shadow-[0px_1px_5px_rgba(108,_117,_139,_0.4)] rounded bg-success-20 h-[60px] overflow-hidden shrink-0 flex flex-row items-start justify-start py-3 pl-6 pr-[18px] box-border relative gap-2.5 [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] cursor-pointer"
                data-acc-item
                data-acc-header
                data-acc-original
                onClick={onAccordionHeaderClick}
              >
                <div className="w-60 relative tracking-[-0.01em] leading-[18px] inline-block shrink-0 z-[0]">
                  <p className="m-0">Customer support email connected</p>
                  <p className="m-0 font-semibold">hello@smilingraccoon.com</p>
                </div>
                <div className="w-1.5 absolute !m-[0] top-[0px] left-[0px] bg-success-10 h-[88px] z-[1]" />
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0 z-[2]"
                  loading="lazy"
                  alt=""
                  src="/iconx-1.svg"
                />
              </div>
              <div className="hidden flex-col" data-acc-item data-acc-open>
                <div
                  className="shadow-[0px_1px_5px_rgba(108,_117,_139,_0.4)] rounded bg-success-20 overflow-hidden flex flex-row items-start justify-start py-3 pl-6 pr-[18px] relative gap-2.5 cursor-pointer"
                  data-acc-header
                  onClick={onAccordionHeaderClick}
                >
                  <div className="w-60 relative tracking-[-0.01em] leading-[18px] inline-block shrink-0 z-[0]">
                    <p className="m-0">Shopify account connected</p>
                    <p className="m-0 font-semibold">Smiling Raccoon</p>
                  </div>
                  <div className="w-1.5 absolute !m-[0] top-[0px] left-[0px] bg-success-10 h-[88px] z-[1]" />
                  <img
                    className="h-4 w-4 relative overflow-hidden shrink-0 z-[2]"
                    loading="lazy"
                    alt=""
                    src="/iconx-1.svg"
                  />
                  <div className="relative text-[transparent] hidden z-[3]" />
                </div>
                <div
                  className="shadow-[0px_1px_5px_rgba(108,_117,_139,_0.4)] rounded bg-success-20 overflow-hidden grid flex-row items-start justify-start py-3 pl-6 pr-[18px] relative gap-2.5 cursor-default grid-rows-[0fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
                  data-acc-content
                >
                  <div className="[transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start text-sm text-shade-0">
              <div className="rounded-lg bg-shade-100 overflow-hidden flex flex-col items-start justify-start gap-[127px] mq450:gap-[63px]">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <HomePageHeader height="Short" type="Hi Su Fen" />
                  <TextField
                    className="[border:none] bg-[transparent] self-stretch font-body-regular font-medium text-xs text-shade-0"
                    placeholder="Quick Links"
                    variant="outlined"
                    sx={{
                      "& fieldset": { border: "none" },
                      "& .MuiInputBase-root": {
                        height: "85px",
                        backgroundColor: "#f6f6f7",
                        borderRadius: "0px 0px 0px 0px",
                        fontSize: "12px",
                      },
                      "& .MuiInputBase-input": { color: "#17191c" },
                    }}
                  />
                  <div className="self-stretch flex flex-col items-start justify-start py-5 pl-[26px] pr-6 relative">
                    <ButtonIcon
                      background={false}
                      state="Default"
                      textLineCount="One"
                    />
                    <ButtonIcon
                      background={false}
                      state="Default"
                      textLineCount="One"
                      buttonIconTop="61px"
                      buttonIconBottom="unset"
                    />
                    <ButtonIcon
                      background={false}
                      state="Default"
                      textLineCount="One"
                      buttonIconTop="unset"
                      buttonIconBottom="61px"
                    />
                    <ButtonIcon
                      background={false}
                      state="Default"
                      textLineCount="One"
                      buttonIconTop="unset"
                      buttonIconBottom="0px"
                    />
                    <div className="self-stretch flex flex-col items-start justify-start gap-10 mq450:gap-5">
                      <div className="self-stretch flex flex-row items-start justify-start">
                        <div className="flex-1 relative tracking-[-0.01em] leading-[21px] overflow-hidden text-ellipsis whitespace-nowrap shrink-0">
                          Track / Manage my order
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 ml-[-4px]">
                          <img
                            className="w-4 h-4 relative overflow-hidden shrink-0"
                            loading="lazy"
                            alt=""
                            src="/iconarrowright.svg"
                          />
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start">
                        <div className="flex-1 relative tracking-[-0.01em] leading-[21px] overflow-hidden text-ellipsis whitespace-nowrap shrink-0">{`Refunds & Exchanges`}</div>
                        <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 ml-[-4px]">
                          <img
                            className="w-4 h-4 relative overflow-hidden shrink-0"
                            loading="lazy"
                            alt=""
                            src="/iconarrowright.svg"
                          />
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start">
                        <div className="flex-1 relative tracking-[-0.01em] leading-[21px] overflow-hidden text-ellipsis whitespace-nowrap shrink-0">
                          Payment / Coupon code issues
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 ml-[-4px]">
                          <img
                            className="w-4 h-4 relative overflow-hidden shrink-0"
                            loading="lazy"
                            alt=""
                            src="/iconarrowright.svg"
                          />
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start">
                        <div className="flex-1 relative tracking-[-0.01em] leading-[21px] overflow-hidden text-ellipsis whitespace-nowrap shrink-0">
                          Something else
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 ml-[-4px]">
                          <img
                            className="w-4 h-4 relative overflow-hidden shrink-0"
                            loading="lazy"
                            alt=""
                            src="/iconarrowright.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <PoweredByChad />
              </div>
            </div>
          </div>
        </div>
      </main>
      <img
        className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[6]"
        alt=""
        src="/overlay.svg"
      />
      <FrameComponent1 />
    </div>
  );
};

export default OnboardingComplete;
