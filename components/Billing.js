import MiniActivity from "../components/MiniActivity";
import CreditCard from "../components/CreditCard";
import DashboardNavbar from "../components/DashboardNavbar";
import AccountDetails from "../components/AccountDetails";
import DashboardFooter from "../components/DashboardFooter";

export default function Billing() {
  return (
    <>
      <div class="text-base antialiased font-normal bg-white leading-default  text-slate-500">
        <div class="">
          <DashboardNavbar />
          <AccountDetails />
          <MiniActivity />
          <DashboardFooter />
        </div>
      </div>
    </>
  );
}
