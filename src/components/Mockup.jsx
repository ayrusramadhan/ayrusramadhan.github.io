const SHADOW = 'shadow-[0_24px_48px_rgba(18,17,43,.28)] transition-transform duration-300';
const ROW = 'h-[11%] rounded-lg bg-[#ECEBF5]';

// UI mockups drawn with utilities. Replace with <img> when you have real screenshots.
export default function Mockup({ type, accent }) {
  if (type === 'calendar') {
    return (
      <div className={`${SHADOW} -mb-[8%] grid aspect-[4/3] w-[86%] grid-cols-7 content-start gap-1.5 rounded-t-[18px] bg-white p-[5%] md:w-[58%] group-hover:-translate-y-4`}>
        <b className="col-span-full mb-1 h-2.5 w-[35%] rounded-full bg-ink" />
        {Array.from({ length: 14 }, (_, i) => (
          <i key={i} className="aspect-square rounded-md" style={{ background: i === 7 || i === 8 ? accent : '#ECEBF5' }} />
        ))}
      </div>
    );
  }
  if (type === 'dashboard') {
    return (
      <div className={`${SHADOW} -mb-[8%] flex aspect-[4/3] w-[86%] items-end gap-[3%] rounded-t-[18px] bg-white px-[6%] pt-[6%] md:w-[58%] group-hover:-translate-y-4`}>
        {[40, 70, 55, 90, 60].map((h, i) => (
          <i key={i} className="flex-1 rounded-t-lg" style={{ height: `${h}%`, background: i === 3 ? accent : '#ECEBF5' }} />
        ))}
      </div>
    );
  }
  return (
    <div className={`${SHADOW} -mb-[12%] flex aspect-[9/17] w-[54%] flex-col gap-2 rounded-[26px] bg-white p-3.5 md:w-[30%] group-hover:-translate-y-4 group-hover:-rotate-2`}>
      <b className="h-2.5 w-[45%] rounded-full bg-ink" />
      {type === 'onboarding' ? (
        <i className="mx-[8%] mt-[10%] aspect-square rounded-full" style={{ background: accent }} />
      ) : (
        <>
          <i className={ROW} />
          <i className={ROW} style={{ background: accent }} />
          <i className={ROW} />
        </>
      )}
      <i className="mt-auto h-[9%] rounded-full bg-ink" />
    </div>
  );
}
