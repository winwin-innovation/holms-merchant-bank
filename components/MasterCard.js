import Image from "next/image";
import mastercardlogo from "../public/assets/Mastercard_2019_logo.svg";

export default function MasterCard() {
  return (
    <div class="flex-auto p-4">
      <div class="flex flex-wrap -mx-3">
        <div class="max-w-full px-3 mb-6 md:mb-0 md:w-1/2 md:flex-none">
          <div class="relative flex flex-row items-center flex-auto min-w-0 p-6 break-words bg-transparent border border-solid shadow-none md-max:overflow-auto rounded-xl border-slate-700 bg-clip-border">
            <Image
              class="mb-0 mr-4 w-1/10"
              priority
              src={mastercardlogo}
              alt="mastercard"
              width="50"
              height="50"
            />
            <h6 class="mb-0 text-gray-700 font-bold text-lg">
              **** **** **** 7852
            </h6>
          </div>
        </div>
        <div class="max-w-full px-3 md:w-1/2 md:flex-none">
          <div class="relative flex flex-row items-center flex-auto min-w-0 p-6 break-words bg-transparent border border-solid shadow-none md-max:overflow-auto rounded-xl border-slate-700 bg-clip-border text-gray-700 text-lg">
            <Image
              class="mb-0 mr-4 w-1/10"
              priority
              src={mastercardlogo}
              alt="mastercard"
              width="50"
              height="50"
            />
            <h6 class="mb-0 font-bold">**** **** **** 1807</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
