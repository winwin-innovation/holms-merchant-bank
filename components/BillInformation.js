export default function BillInformation() {
  return (
    <div class="w-full max-w-full px-3 mt-6 md:w-7/12 md:flex-none">
      <div class="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
        <div class="p-6 px-4 pb-0 mb-0 border-b-0 rounded-t-2xl">
          <h6 class="mb-0 text-gray-700">Billing Information</h6>
        </div>
        <div class="flex-auto p-4 pt-6">
          <ul class="flex flex-col pl-0 mb-0 rounded-lg">
            <li class="relative flex p-6 mb-2 border-0 rounded-t-inherit rounded-xl bg-red-400 dark:bg-slate-850">
              <div class="flex flex-col">
                <h6 class="mb-4 text-sm leading-normal text-gray-700">
                  Oliver Liam
                </h6>
                <span class="mb-2 text-xs leading-tight text-gray-700/80">
                  Company Name:{" "}
                  <span class="font-semibold  text-gray-700 sm:ml-2">
                    Viking Burrito
                  </span>
                </span>
                <span class="mb-2 text-xs leading-tight text-gray-700/80">
                  Email Address:{" "}
                  <span class="font-semibold text-gray-700 sm:ml-2">
                    oliver@burrito.com
                  </span>
                </span>
                <span class="text-xs leading-tight text-gray-700/80">
                  VAT Number:{" "}
                  <span class="font-semibold  text-gray-700 sm:ml-2">
                    FRB1235476
                  </span>
                </span>
              </div>
            </li>
            <li class="relative flex p-6 mt-4 mb-2 border-0 rounded-xl bg-gray-200 ">
              <div class="flex flex-col">
                <h6 class="mb-4 text-sm leading-normal text-gray-700">
                  Lucas Harper
                </h6>
                <span class="mb-2 text-xs leading-tight text-gray-700/80">
                  Company Name:{" "}
                  <span class="font-semibold text-gray-700 sm:ml-2">
                    Stone Tech Zone
                  </span>
                </span>
                <span class="mb-2 text-xs leading-tight ">
                  Email Address:{" "}
                  <span class="font-semibold text-gray-700 sm:ml-2">
                    lucas@stone-tech.com
                  </span>
                </span>
                <span class="text-xs leading-tight text-gray-700/80">
                  VAT Number:{" "}
                  <span class="font-semibold text-slate-700  sm:ml-2">
                    FRB1235476
                  </span>
                </span>
              </div>
            </li>
            <li class="relative flex p-6 mt-4 mb-2 border-0 rounded-b-inherit rounded-xl bg-red-400 dark:bg-slate-850">
              <div class="flex flex-col">
                <h6 class="mb-4 text-sm leading-normal text-gray-700">
                  Ethan James
                </h6>
                <span class="mb-2 text-xs leading-tight text-gray-700/80">
                  Company Name:{" "}
                  <span class="font-semibold text-gray-700 sm:ml-2">
                    Fiber Notion
                  </span>
                </span>
                <span class="mb-2 text-xs leading-tight text-gray-700/80">
                  Email Address:{" "}
                  <span class="font-semibold text-gray-700 sm:ml-2">
                    ethan@fiber.com
                  </span>
                </span>
                <span class="text-xs leading-tight text-gray-700/80">
                  VAT Number:{" "}
                  <span class="font-semibold text-gray-700  sm:ml-2">
                    FRB1235476
                  </span>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
