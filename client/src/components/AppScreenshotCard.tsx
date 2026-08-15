import { cn } from "@/lib/utils";

type AppScreenshotCardProps = {
  alt: string;
  src: string;
  statusBarColor?: string;
  className?: string;
  cropTop?: number;
  topInset?: number;
};

const AppScreenshotCard = ({
  alt,
  src,
  statusBarColor,
  className,
  cropTop = 0,
  topInset = 0,
}: AppScreenshotCardProps) => {
  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-[15rem] overflow-hidden rounded-xl shadow-lg [container-type:inline-size]",
        className,
      )}
      style={{ "--crop-top": cropTop, "--top-inset": topInset } as React.CSSProperties}
    >
      <div className="relative overflow-hidden rounded-xl">
        {statusBarColor ? (
          <>
            <img
              src={src}
              alt={alt}
              className="block w-full h-auto"
              style={{
                marginTop: "calc(var(--crop-top) * -100cqw / 240)",
                paddingTop: "calc(var(--top-inset) * 100cqw / 240)",
              }}
            />
          <div
            className="absolute inset-x-0 top-0 h-[calc(clamp(1.9rem,15cqw,2.8rem)+var(--top-inset)*100cqw/240)] lg:h-[calc(clamp(1.45rem,11.5cqw,2rem)+var(--top-inset)*100cqw/240)]"
            style={{ backgroundColor: statusBarColor }}
          />
          <div
            className="absolute inset-x-0 top-[calc(clamp(1.9rem,15cqw,2.8rem)+var(--top-inset)*100cqw/240)] h-[clamp(0.55rem,5.2cqw,1rem)] lg:top-[calc(clamp(1.45rem,11.5cqw,2rem)+var(--top-inset)*100cqw/240)] lg:h-[clamp(0.3rem,3.2cqw,0.6rem)]"
            style={{ background: `linear-gradient(to bottom, ${statusBarColor}, rgba(255,255,255,0))` }}
          />
          <div className="absolute left-[clamp(0.7rem,5.4cqw,0.9rem)] top-[calc(clamp(0.42rem,3.2cqw,0.62rem)+var(--top-inset)*50cqw/240)] text-[clamp(0.6rem,4.2cqw,0.76rem)] font-semibold tracking-[-0.02em] text-white lg:top-[calc(clamp(0.32rem,2.6cqw,0.52rem)+var(--top-inset)*50cqw/240)]">
            9:41
          </div>
          <div className="absolute left-1/2 top-[calc(clamp(0.3rem,2.4cqw,0.5rem)+var(--top-inset)*50cqw/240)] h-[clamp(1.2rem,8.2cqw,1.7rem)] w-[clamp(3.5rem,24cqw,5.2rem)] -translate-x-1/2 rounded-full bg-black shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] lg:top-[calc(clamp(0.22rem,1.9cqw,0.4rem)+var(--top-inset)*50cqw/240)] lg:h-[clamp(1rem,7cqw,1.45rem)] lg:w-[clamp(3rem,21cqw,4.4rem)]" />
          <div
            className="absolute right-[clamp(0.7rem,5.4cqw,0.9rem)] top-[calc(clamp(0.48rem,3.5cqw,0.74rem)+var(--top-inset)*50cqw/240)] flex items-center gap-[clamp(0.14rem,1.2cqw,0.3rem)] text-white lg:top-[calc(clamp(0.36rem,2.8cqw,0.62rem)+var(--top-inset)*50cqw/240)]"
            aria-hidden="true"
          >
            <svg viewBox="0 0 18 12" className="h-[clamp(0.42rem,3.1cqw,0.68rem)] w-[clamp(0.58rem,4.1cqw,0.9rem)] fill-current lg:h-[clamp(0.34rem,2.5cqw,0.56rem)] lg:w-[clamp(0.48rem,3.4cqw,0.74rem)]">
              <rect x="0" y="7" width="2" height="5" rx="1" />
              <rect x="4" y="5" width="2" height="7" rx="1" />
              <rect x="8" y="3" width="2" height="9" rx="1" />
              <rect x="12" y="1" width="2" height="11" rx="1" />
            </svg>
            <div className="flex items-center">
              <div className="h-[clamp(0.36rem,2.7cqw,0.56rem)] w-[clamp(0.76rem,5.4cqw,1.12rem)] rounded-[0.18rem] border border-white/95 p-[1px] lg:h-[clamp(0.34rem,2.3cqw,0.52rem)] lg:w-[clamp(0.72rem,5cqw,1.02rem)]">
                <div className="h-full w-full rounded-[0.18rem] bg-white" />
              </div>
              <div className="ml-px h-[clamp(0.1rem,0.7cqw,0.16rem)] w-[clamp(1px,0.6cqw,2px)] rounded-r-full bg-white lg:h-[clamp(0.1rem,0.6cqw,0.14rem)]" />
            </div>
          </div>
          </>
        ) : (
          <img src={src} alt={alt} className="block w-full h-auto" />
        )}
      </div>
    </div>
  );
};

export default AppScreenshotCard;
