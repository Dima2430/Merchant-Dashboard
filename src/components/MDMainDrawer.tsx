import { FunctionComponent } from "react";

export type MDMainDrawerType = {
  className?: string;

  /** Variant props */
  collapsed?: boolean;
  header?: boolean;
  state?: "Default";
};

const MDMainDrawer: FunctionComponent<MDMainDrawerType> = ({
  className = "",
  collapsed = true,
  header = false,
  state = "Default",
}) => {
  return (
    <div
      className={`shadow-[0px_1px_5px_rgba(108,_117,_139,_0.4)] rounded-lg bg-shade-100 flex flex-row items-center justify-start p-6 gap-[72px] text-left text-base text-mdshade-10 font-body-regular ${className}`}
      data-collapsed={collapsed}
      data-header={header}
      data-state={state}
    >
      <div className="flex flex-row items-start justify-start gap-3">
        <img
          className="h-6 w-6 relative rounded-lg"
          loading="lazy"
          alt=""
          src="/iconsmile.svg"
        />
        <div className="flex flex-col items-start justify-start">
          <div className="relative tracking-[-0.01em] leading-[24px] font-medium">
            Themes and branding
          </div>
          <div className="w-[436px] relative text-sm tracking-[-0.01em] leading-[21px] text-mdshade-60 inline-block">
            Home screen
          </div>
        </div>
      </div>
      <input
        className="m-0 h-6 w-6 relative rounded-lg overflow-hidden shrink-0"
        type="checkbox"
      />
    </div>
  );
};

export default MDMainDrawer;
