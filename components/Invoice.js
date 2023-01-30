import { FaFilePdf } from "react-icons/fa";

export default function Invoice() {
  return (
    <div class="w-full max-w-full px-3 lg:w-1/3 lg:flex-none">
      <div class="relative flex flex-col h-full min-w-0 break-words bg-white border-0 border-transparent border-solid shadow-xl rounded-2xl bg-clip-border">
        <div class="p-4 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
          <div class="flex flex-wrap -mx-3">
            <div class="flex items-center flex-none w-1/2 max-w-full px-3">
              <h6 class="mb-0 text-gray-700">Invoices</h6>
            </div>
          </div>
        </div>
        <div class="flex-auto p-4 pb-0">
          <ul class="flex flex-col pl-0 mb-0 rounded-lg">
            <li class="relative flex justify-between px-4 py-2 pl-0 mb-2 border-0 rounded-t-inherit text-inherit rounded-xl">
              <div class="flex flex-col">
                <h6 class="mb-1 text-sm font-semibold leading-normal text-gray-700">
                  January, 17, 2023
                </h6>
                <span class="text-xs leading-tight dtext-gray-700 opacity-80">
                  #MS-415646
                </span>
              </div>
              <div class="flex items-center text-sm leading-normal text-gray-700/80">
                £180
                <button class="text-gray-700 inline-block px-0 py-2.5 mb-0 ml-6 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-in bg-150 text-sm active:opacity-85 hover:-translate-y-px tracking-tight-rem bg-x-25 ">
                  <FaFilePdf className="text-3xl" />
                </button>
              </div>
            </li>
            <li class="relative flex justify-between px-4 py-2 pl-0 mb-2 border-0 rounded-xl text-inherit">
              <div class="flex flex-col">
                <h6 class="mb-1 text-sm font-semibold leading-normal text-gray-700">
                  January, 03, 2023
                </h6>
                <span class="text-xs leading-tight text-gray-700 opacity-80">
                  #RV-126749
                </span>
              </div>
              <div class="flex items-center text-sm leading-normal text-gray-700/80">
                £250
                <button class="text-gray-700 inline-block px-0 py-2.5 mb-0 ml-6 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-in bg-150 text-sm active:opacity-85 hover:-translate-y-px tracking-tight-rem bg-x-25 ">
                  <FaFilePdf className="text-3xl" />
                </button>
              </div>
            </li>
            <li class="relative flex justify-between px-4 py-2 pl-0 mb-2 border-0 rounded-xl text-inherit">
              <div class="flex flex-col">
                <h6 class="mb-1 text-sm font-semibold leading-normal text-gray-700">
                  December, 03, 2022
                </h6>
                <span class="text-xs leading-tight text-gray-700 opacity-80">
                  #FB-212562
                </span>
              </div>
              <div class="flex items-center text-sm leading-normal text-gray-700/80">
                £560
                <button class="text-gray-700 inline-block px-0 py-2.5 mb-0 ml-6 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-in bg-150 text-sm active:opacity-85 hover:-translate-y-px tracking-tight-rem bg-x-25 ">
                  <FaFilePdf className="text-3xl" />
                </button>
              </div>
            </li>
            <li class="relative flex justify-between px-4 py-2 pl-0 mb-2 border-0 rounded-xl text-inherit">
              <div class="flex flex-col">
                <h6 class="mb-1 text-sm font-semibold leading-normal text-gray-700">
                  November, 17, 2022
                </h6>
                <span class="text-xs leading-tight dtext-gray-700 opacity-80">
                  #QW-103578
                </span>
              </div>
              <div class="flex items-center text-sm leading-normal text-gray-700/80">
                £120
                <button class="dtext-gray-700 inline-block px-0 py-2.5 mb-0 ml-6 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-in bg-150 text-sm active:opacity-85 hover:-translate-y-px tracking-tight-rem bg-x-25 text-gray-700">
                  <FaFilePdf className="text-3xl" />
                </button>
              </div>
            </li>
            <li class="relative flex justify-between px-4 py-2 pl-0 border-0 rounded-b-inherit rounded-xl text-inherit">
              <div class="flex flex-col">
                <h6 class="mb-1 text-sm font-semibold leading-normal text-gray-700">
                  October, 13, 2022
                </h6>
                <span class="text-xs leading-tight text-gray-700 opacity-80">
                  #AR-803481
                </span>
              </div>
              <div class="flex items-center text-sm leading-normal text-gray-700/80">
                £300
                <button class="dtext-gray-700 inline-block px-0 py-2.5 mb-0 ml-6 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-in bg-150 text-sm active:opacity-85 hover:-translate-y-px tracking-tight-rem bg-x-25 ">
                  <FaFilePdf className="text-3xl" />
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
