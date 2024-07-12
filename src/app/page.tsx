import Explore from "@/components/explore/explore";
import Footer from "@/components/footer/footer";
import Hero from "@/components/hero/hero";
import Navbar from "@/components/navbar/navbar";
import Pricing from "@/components/pricing/pricing";
import Questions from "@/components/questions/questions";
import UnlockTheFuture from "@/components/unlock-the-future/unlock-the-future";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <UnlockTheFuture />
      <Explore />
      <Pricing />
      <Questions />
      <hr className="border-zinc-700" />
      <Footer />
    </>
  );
}
