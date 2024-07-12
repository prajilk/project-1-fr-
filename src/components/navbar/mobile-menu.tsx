import Close from "../icons/close";

const MobileMenu = ({
  show,
  setShowNav,
}: {
  show: boolean;
  setShowNav: (arg0: boolean) => void;
}) => {
  return (
    <div
      className={`${show ? "translate-y-0" : "-translate-y-full"} fixed inset-0 z-50 flex min-h-[100dvh] w-full flex-col items-center bg-[#111111] p-8 text-white transition-transform duration-500 md:hidden`}
    >
      <button className="ms-auto text-white" onClick={() => setShowNav(false)}>
        <Close />
      </button>
      <div className="flex flex-1 items-center">
        <ul className="space-y-10 text-center text-4xl font-medium uppercase">
          <li className="hover:text-primary">Home</li>
          <li className="hover:text-primary">Events</li>
          <li className="hover:text-primary">Partners</li>
          <li className="hover:text-primary">Pricing</li>
          <li className="hover:text-primary">Faq</li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
