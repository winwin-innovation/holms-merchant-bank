import MasterCard from "../components/MasterCard";

export default function PaymentMethod() {
  return (
    <div class="max-w-full px-3 mb-6 lg:mb-0 lg:w-full lg:flex-none">
      <div class="relative flex flex-col min-w-0 mt-6 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border items-center text-center justify-center">
        <div class="p-4 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
          <div class="flex flex-wrap -mx-3">
            <div class="flex items-center flex-none w-full max-w-full px-3">
              <h6 class="mb-0 text-gray-700">Payment Method</h6>
            </div>
          </div>
        </div>
        <MasterCard />
      </div>
    </div>
  );
}
