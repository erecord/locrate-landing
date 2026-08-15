import { cn } from "@/lib/utils";

type AppScreenshotCardProps = {
  alt: string;
  src: string;
  statusBarColor?: string;
  className?: string;
  cropTop?: number;
};

const AppScreenshotCard = ({ alt, src, statusBarColor, className, cropTop = 0 }: AppScreenshotCardProps) => {
  return (
    <div
      className={cn(
        "relative mx-auto w-3/4 max-w-xs overflow-hidden rounded-xl shadow-lg sm:w-full",
        className,
      )}
    >
      {statusBarColor ? (
        <div className="relative overflow-hidden rounded-xl">
          <img src={src} alt={alt} className="block w-full" style={{ marginTop: `-${cropTop}px` }} />
          <div className="absolute inset-x-0 top-0 h-11" style={{ backgroundColor: statusBarColor }} />
          <div
            className="absolute inset-x-0 top-11 h-5"
            style={{ background: `linear-gradient(to bottom, ${statusBarColor}, rgba(255,255,255,0))` }}
          />
          <div className="absolute left-4 top-2.5 text-[0.76rem] font-semibold tracking-[-0.02em] text-white">
            9:41
          </div>
          <div className="absolute left-1/2 top-2 h-6 w-20 -translate-x-1/2 rounded-full bg-black shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]" />
          <div className="absolute right-4 top-[0.78rem] flex items-center gap-1.5 text-white" aria-hidden="true">
            <svg viewBox="0 0 18 12" className="h-3 w-4 fill-current">
              <rect x="0" y="7" width="2" height="5" rx="1" />
              <rect x="4" y="5" width="2" height="7" rx="1" />
              <rect x="8" y="3" width="2" height="9" rx="1" />
              <rect x="12" y="1" width="2" height="11" rx="1" />
            </svg>
            <div className="flex items-center">
              <div className="h-2.5 w-5 rounded-[0.22rem] border border-white/95 p-[1px]">
                <div className="h-full w-full rounded-[0.18rem] bg-white" />
              </div>
              <div className="ml-[1px] h-[3px] w-[2px] rounded-r-full bg-white" />
            </div>
          </div>
        </div>
      ) : null}
      {!statusBarColor ? <img src={src} alt={alt} className="block w-full" /> : null}
    </div>
  );
};

export default AppScreenshotCard;
