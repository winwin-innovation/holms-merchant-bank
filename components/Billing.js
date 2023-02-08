import { FaPaypal } from "react-icons/fa";
import { AiFillCreditCard } from "react-icons/ai";
import MiniActivity from "../components/MiniActivity";
import CreditCard from "../components/CreditCard";
import DashboardNavbar from "../components/DashboardNavbar";
import AccountDetails from "../components/AccountDetails";
import DashboardFooter from "../components/DashboardFooter";

export default function Billing() {
  return (
    <>
      <div class="m-0 font-sans text-base antialiased font-normal bg-white leading-default  text-slate-500">
        <div class="relative h-full max-h-screen transition-all duration-200 ease-in-out xl:ml-68 rounded-xl">
          <DashboardNavbar />
          <AccountDetails />
          <CreditCard />
          <MiniActivity />
          <DashboardFooter />
        </div>
      </div>
    </>
  );
}
