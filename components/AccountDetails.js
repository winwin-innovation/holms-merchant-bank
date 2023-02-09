import CreditCard from "../components/CreditCard";

export default function AccountDetails() {
  return (
    <>
      <div className="container mx-auto py-10 mb-4 flex justify-between  max-w-screen-xl px-4 sm:px-6 lg:px-8 ">
        <table className="table-auto w-full text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">Account Type</th>
              <th className="px-4 py-2">Account Name</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Currency</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="border px-4 py-2">Business</td>
              <td className="border px-4 py-2">Shawn G. Glaude</td>
              <td className="border px-4 py-2">Active</td>
              <td className="border px-4 py-2">LB £</td>
            </tr>
            <div className="text-xl font-bold pt-10">
              Account Balance: £8,500,00
            </div>
          </tbody>
        </table>
      </div>
      <div className="mt-4 text-xl font-medium mx-auto py-2 mb-4 flex justify-between  max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <CreditCard />
      </div>
    </>
  );
}
