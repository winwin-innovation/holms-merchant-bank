import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-gray-900 w-full h-full">
      <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12 lg:py-32">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-7xl font-bold leading-none tracking-tight md:text-8xl xl:text-8xl text-white sm:text-2xl">
            Easy, free
          </h1>
          <h1 className="max-w-2xl mb-4 text-7xl font-bold leading-none tracking-tight md:text-4xl xl:text-8xl text-white sm:text-xl">
            <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-indigo-600 relative inline-block ">
              <span className="relative text-white ">banking</span>
            </span>{" "}
          </h1>
          <h1 className="max-w-2xl mb-4 text-7xl font-bold leading-none tracking-tight md:text-4xl xl:text-8xl text-white sm:text-xl">
            for Everyone
          </h1>
          <p className="max-w-2xl mb-6 font-light  lg:mb-8 md:text-lg lg:text-xl text-gray-400">
            Bringing banking closer to you, sign up for mobile banking
          </p>
          <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <a
              href="contact"
              className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center  border  rounded-lg sm:w-auto  focus:ring-4 focus:ring-gray-100 text-white border-gray-700 hover:bg-indigo-600 "
            >
              Contact Us Now
            </a>
          </div>
        </div>
        <div className=" lg:mt-0 lg:col-span-5 lg:flex ">
          <Image
            src="/../public/img01.jpg"
            alt="hero image"
            width="1500"
            height="2500"
            className=" rounded-lg pt-10"
          />
        </div>
      </div>
    </section>
  );
}
