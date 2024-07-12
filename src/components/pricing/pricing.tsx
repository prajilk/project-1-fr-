import Button from "../ui/button";

const Pricing = () => {
  return (
    <div className="my-48 space-y-20">
      <h2 className="mx-auto max-w-sm text-center text-2xl font-bold md:max-w-full md:text-4xl">
        <span className="text-primary">Take Your</span> Tickets Don&apos;t Miss
        The Event
      </h2>
      <div className="mx-auto grid w-fit gap-10 lg:grid-cols-2">
        <div className="mx-auto flex max-w-sm flex-col rounded-xl border border-zinc-700 px-10 py-10 md:mx-0 md:max-w-full md:px-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-medium opacity-50 md:text-3xl">
              Standard Access
            </h3>
            <span className="inline-block rounded-full border border-zinc-400 px-3 py-1 text-sm opacity-50">
              For Professionals
            </span>
            <h2 className="text-4xl font-medium opacity-50 md:text-5xl">
              $149
            </h2>
          </div>
          <hr className="my-10 border-secondary" />
          <div className="flex flex-1 flex-col gap-4">
            <ul className="ms-6 max-w-[17rem] list-disc space-y-1 text-lg opacity-60">
              <li>Full Access to Keynote Sessions</li>
              <li>Participation in Panel Discussions</li>
              <li>Entry to Networking Events</li>
              <li>Digital Event Materials</li>
              <li>Complimentary Refreshments</li>
            </ul>
            <Button
              size="lg"
              className="mt-auto w-full border-zinc-600 bg-dark text-white transition-[background-color] duration-300 hover:bg-secondary hover:text-dark"
            >
              Purchase
            </Button>
          </div>
        </div>
        <div className="mx-auto max-w-sm rounded-xl border border-primary/60 px-10 py-10 text-primary md:mx-0 md:max-w-full md:px-12">
          <div className="space-y-4">
            <h3 className="text-shadow text-2xl font-medium md:text-3xl">
              Premium Access
            </h3>
            <span className="inline-block rounded-full border border-primary px-3 py-1 text-sm">
              Recommended
            </span>
            <h2 className="text-shadow text-4xl font-medium md:text-5xl">
              $299
            </h2>
          </div>
          <hr className="my-10 border-primary" />
          <div className="flex flex-1 flex-col gap-10">
            <ul className="ms-6 max-w-[17rem] list-disc space-y-1 text-lg opacity-60">
              <li>All Standard Access Features</li>
              <li>VIP Seating at Keynote Sessions</li>
              <li>Exclusive Q&A Sessions with Speakers</li>
              <li>Access to VIP Lounge</li>
              <li>Premium Networking Dinner</li>
              <li>Early Access to Digital Event Materials</li>
            </ul>
            <Button
              size="lg"
              className="mt-auto w-full border-zinc-600 transition-[background-color] duration-300 hover:bg-secondary hover:text-dark"
            >
              Purchase
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
