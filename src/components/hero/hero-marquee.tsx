const HeroMarquee = () => {
  return (
    <div className="flex overflow-hidden">
      <MarqueeItems />
      <MarqueeItems />
    </div>
  );
};

export default HeroMarquee;

const MarqueeItems = () => {
  const items = [
    {
      title: "Dubai",
      time: "December 1st 07:00pm UTC",
    },
    {
      title: "New-York",
      time: "December 24 07:00pm UTC",
    },
    {
      title: "Abu-Dhabi",
      time: "December 1st 07:00pm UTC",
    },
    {
      title: "Kuala Lampur",
      time: "December 1st 07:00pm UTC",
    },
    {
      title: "Monaco",
      time: "December 1st 07:00pm UTC",
    },
    {
      title: "Geneva",
      time: "December 1st 07:00pm UTC",
    },
  ];
  return (
    <>
      <ul className="hidden h-40 animate-marquee flex-nowrap text-center transition-transform duration-1000 md:flex">
        {items.map(({ title }, i) => (
          <li
            key={i}
            className="flex h-full w-[33vw] flex-shrink-0 flex-col justify-center border-r border-white/25"
          >
            <h3 className="text-2xl font-bold">{title}</h3>
          </li>
        ))}
      </ul>
      <ul className="flex h-32 animate-marquee flex-nowrap text-center transition-transform duration-1000 md:hidden">
        {items.map(({ title }, i) => (
          <li key={i} className="flex w-[100vw] flex-shrink-0 justify-center">
            <div className="relative box-border flex h-full w-[50vw] flex-col justify-center rounded-2xl border border-transparent bg-[#111] bg-clip-padding before:absolute before:inset-0 before:-z-10 before:-m-[1px] before:rounded-2xl before:[background:linear-gradient(to_top_right,#373737,#E1F29670,#373737)]">
              <h3 className="text-2xl font-bold">{title}</h3>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};