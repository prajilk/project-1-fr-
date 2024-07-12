import Image from "next/image";

const BrandMarquee = () => {
  return (
    <div className="flex items-center overflow-hidden">
      <BrandList />
      <BrandList />
    </div>
  );
};

export default BrandMarquee;

const BrandList = () => {
  const brands = [
    {
      image: "bloomberg.png",
      title: "Bloomberg",
    },
    {
      image: "emaar.png",
      title: "Emaar Hospitality",
    },
    {
      image: "forbes.png",
      title: "Forbes",
    },
    {
      image: "four-seasons.png",
      title: "Four Seasons",
    },
    {
      image: "lvmh.png",
      title: "LVMH",
    },
  ];
  return (
    <>
      <ul className="hidden w-screen flex-shrink-0 animate-marquee items-center justify-around lg:flex">
        {brands.map(({ image, title }, i) => (
          <li key={i}>
            <Image
              src={`/images/brands/${image}`}
              className="grayscale-0"
              alt={title}
              width={130}
              height={130}
            />
          </li>
        ))}
      </ul>
      <ul className="flex flex-shrink-0 animate-marquee-fast items-center lg:hidden">
        {brands.map(({ image, title }, i) => (
          <li key={i} className="ms-20 flex-shrink-0">
            <Image
              src={`/images/brands/${image}`}
              className="w-full grayscale-0"
              alt={title}
              width={130}
              height={130}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
