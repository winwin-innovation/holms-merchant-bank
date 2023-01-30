import Billing from "../../components/Billing";
import LoadingMesage from "../../components/LoadingMessage";

export default function Dashboard() {
  return (
    <div>
      <LoadingMesage />
      <Billing />
    </div>
  );
}
