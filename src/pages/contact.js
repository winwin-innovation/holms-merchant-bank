import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import Navbar from "../../components/Navbar";

export default function Contact() {
  return (
    <section class="bg-gray-900 w-full h-full">
      <Navbar />
      <div>
        <h1 className="text-center font-bold text-5xl text-white tracking-tighter py-10">
          Contact Form
        </h1>
        <h2 className="text-center text-2xl font-normal text-white">
          Drop us message for any query
        </h2>
      </div>
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div class="lg:col-span-2 lg:py-12">
            <p class="max-w-xl text-lg text-white">
              At the same time, the fact that we are wholly owned and totally
              independent from manufacturer and other group control gives you
              confidence that we will only recommend what is right for you.
            </p>

            <div class="mt-8 ">
              <p className="text-white uppercase">call us</p>
              <a href="" class="text-2xl font-bold text-pink-600 flex py-5">
                <FiPhoneCall className="mr-4 " />
                +44 020 8133 6340
              </a>

              <p className="text-white py-5">
                Monday to Friday: 10am - 5pm <br />
                Weekend: 10am - 3pm
              </p>

              <p class="mt-2  text-white flex text-xl py-5">
                <AiOutlineMail className="mr-4 text-2xl" />
                support@holmsmerchantbank.co.uk
              </p>
            </div>
          </div>

          <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form
              action="https://formsubmit.co/winwininnovation@gmail.com"
              method="POST"
              class="space-y-4"
            >
              <div>
                <label class="sr-only" for="name">
                  Name
                </label>
                <input
                  class="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Name"
                  type="text"
                  id="name"
                />
              </div>

              <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label class="sr-only" for="email">
                    Email
                  </label>
                  <input
                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Email address"
                    type="email"
                    id="email"
                  />
                </div>

                <div>
                  <label class="sr-only" for="phone">
                    Phone
                  </label>
                  <input
                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Phone Number"
                    type="tel"
                    id="phone"
                  />
                </div>
              </div>

              <div>
                <label class="sr-only" for="message">
                  Message
                </label>
                <textarea
                  class="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Message"
                  rows="8"
                  id="message"
                ></textarea>
              </div>

              <div class="mt-4">
                <a href={`mailto:winwininnovation@gmail.com`}>
                  <button
                    type="submit"
                    class="inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-3 text-white sm:w-auto"
                  >
                    <span class="font-medium"> Send Enquiry </span>

                    <BsArrowRight className="h-5 w-5 ml-2" />
                  </button>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
