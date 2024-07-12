import Mastercard from "../icons/mastercard";
import Paypal from "../icons/paypal";
import Visa from "../icons/visa";

const Footer = () => {
  return (
    <footer>
      <div className="mx-auto hidden grid-cols-3 pb-16 pt-24 text-xl opacity-60 lg:grid">
        <Menu />
        <PrivacyMenu />
        <PaymentMenu />
      </div>
      <div className="grid grid-cols-2 py-16 text-xl opacity-60 [row-gap:2rem] lg:hidden">
        <Menu />
        <PaymentMenu />
        <PrivacyMenu />
      </div>
    </footer>
  );
};

export default Footer;

const Menu = () => {
  return (
    <div className="flex justify-center border-zinc-600 py-5 md:border-r">
      <ul className="space-y-4 uppercase [&>*]:cursor-pointer">
        <li>Events</li>
        <li>Blog</li>
        <li>About</li>
        <li>Rewards</li>
      </ul>
    </div>
  );
};

const PrivacyMenu = () => {
  return (
    <div className="col-span-2 mx-auto flex justify-center border-t border-zinc-600 py-5 text-center lg:col-span-1 lg:mx-0 lg:border-r lg:border-t-0 lg:text-left">
      <ul className="space-y-4 [&>*]:cursor-pointer">
        <li>Privacy & Policy</li>
        <li>Terms & Conditions</li>
        <li>Cookie Preferences</li>
      </ul>
    </div>
  );
};

const PaymentMenu = () => {
  return (
    <ul className="mx-auto my-auto lg:mt-auto">
      <li className="flex h-full flex-col items-center gap-3 lg:flex-row">
        <Paypal className="cursor-pointer opacity-50 hover:opacity-100" />
        <Visa className="cursor-pointer opacity-50 hover:opacity-100" />
        <Mastercard className="cursor-pointer opacity-50 hover:opacity-100" />
      </li>
    </ul>
  );
};
