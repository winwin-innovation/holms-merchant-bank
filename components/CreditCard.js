export default function CreditCard() {
  return (
    <div class="bg-white text-gray-600 mx-auto">
      <div class="mx-auto container  py-8 pl-16 items-center justify-center flex text-center">
        <div class="flex flex-col space-y-8  px-16 max-w-xl">
          <div class="bg-gradient-to-tl from-gray-900 to-gray-800 text-white h-56 w-96 p-6 rounded-xl shadow-md">
            <div class="h-full flex flex-col justify-between">
              <div class="flex items-start justify-between space-x-4">
                <div class=" text-xl font-semibold tracking-tigh">
                  HOLMS MERCHANT BANK
                </div>

                <div class="inline-flex flex-col items-center justify-center">
                  <div class="font-semibold text-white">wallet</div>
                </div>
              </div>

              <div class="inline-block w-12 h-8 bg-gradient-to-tl from-yellow-200 to-yellow-100 rounded-md shadow-inner overflow-hidden">
                <div class="relative w-full h-full grid grid-cols-2 gap-1">
                  <div class="absolute border border-gray-900 rounded w-4 h-6 left-4 top-1"></div>
                  <div class="border-b border-r border-gray-900 rounded-br"></div>
                  <div class="border-b border-l border-gray-900 rounded-bl"></div>
                  <div class=""></div>
                  <div class=""></div>
                  <div class="border-t border-r border-gray-900 rounded-tr"></div>
                  <div class="border-t border-l border-gray-900 rounded-tl"></div>
                </div>
              </div>

              <div class="">
                <div class="text-xs font-semibold tracking-tight">Balance</div>

                <div class="text-2xl font-semibold">£8.5 Million</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
