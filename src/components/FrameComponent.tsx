import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponentType = {
  className?: string;
  iconhome?: string;
  home?: string;
  performanceStatistics?: string;
  tickets?: string;

  /** Style props */
  homeTextDecoration?: CSSProperties["textDecoration"];
  homeMinWidth?: CSSProperties["minWidth"];
  performanceStatisticsTextDecoration?: CSSProperties["textDecoration"];
  performanceStatisticsDisplay?: CSSProperties["display"];
  performanceStatisticsMinWidth?: CSSProperties["minWidth"];
  ticketsDisplay?: CSSProperties["display"];
  ticketsMinWidth?: CSSProperties["minWidth"];
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  iconhome,
  home,
  homeTextDecoration,
  homeMinWidth,
  performanceStatistics,
  performanceStatisticsTextDecoration,
  performanceStatisticsDisplay,
  performanceStatisticsMinWidth,
  tickets,
  ticketsDisplay,
  ticketsMinWidth,
}) => {
  const homeStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: homeTextDecoration,
      minWidth: homeMinWidth,
    };
  }, [homeTextDecoration, homeMinWidth]);

  const performanceStatisticsStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: performanceStatisticsTextDecoration,
      display: performanceStatisticsDisplay,
      minWidth: performanceStatisticsMinWidth,
    };
  }, [
    performanceStatisticsTextDecoration,
    performanceStatisticsDisplay,
    performanceStatisticsMinWidth,
  ]);

  const ticketsStyle: CSSProperties = useMemo(() => {
    return {
      display: ticketsDisplay,
      minWidth: ticketsMinWidth,
    };
  }, [ticketsDisplay, ticketsMinWidth]);

  return (
    <div
      className={`flex flex-row items-start justify-start py-0 px-[30px] text-left text-base text-shade-100 font-body-regular ${className}`}
    >
      <div className="flex flex-col items-start justify-start gap-2">
        <div className="flex flex-row items-start justify-start gap-1">
          <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
            <img
              className="w-4 h-4 relative overflow-hidden shrink-0 z-[3]"
              loading="lazy"
              alt=""
              src={iconhome}
            />
          </div>
          <a
            className="[text-decoration:none] relative tracking-[-0.01em] leading-[24px] font-medium text-[inherit] inline-block min-w-[46px] z-[3]"
            style={homeStyle}
          >
            {home}
          </a>
        </div>
        <div className="flex flex-col items-start justify-start gap-0.5 text-shade-70">
          <div
            className="relative tracking-[-0.01em] leading-[24px] z-[3]"
            style={performanceStatisticsStyle}
          >
            {performanceStatistics}
          </div>
          <div
            className="relative tracking-[-0.01em] leading-[24px] z-[3]"
            style={ticketsStyle}
          >
            {tickets}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
