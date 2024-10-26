import { FunctionComponent } from "react";

export type OnboardingButtonsType = {
  className?: string;

  /** Variant props */
  iconLR?: boolean;
  states?: "Default";
};

const OnboardingButtons: FunctionComponent<OnboardingButtonsType> = ({
  className = "",
  iconLR = true,
  states = "Default",
}) => {
  return (
    <button
      className={`cursor-pointer [border:none] py-1.5 px-3 bg-mddark-blue-20 rounded flex flex-row items-center justify-start gap-2 ${className}`}
      data-iconLR={iconLR}
      data-states={states}
    >
      <img
        className="w-4 relative h-4 overflow-hidden shrink-0"
        alt=""
        src="/iconchevronleft.svg"
      />
      <div className="relative text-base tracking-[-0.01em] leading-[21px] font-body-regular text-mddark-blue-80 text-left">
        Back
      </div>
    </button>
  );
};

export default OnboardingButtons;
