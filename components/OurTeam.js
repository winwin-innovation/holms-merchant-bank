import Image from "next/image";
import img01 from "../public/bk02.jpg";
import img02 from "../public/bk03.jpg";
import img03 from "../public/bk04.png";
import img04 from "../public/bk06.png";

export default function OurTeam() {
  return (
    <>
      <div className="w-full 2xl:px-20 px-6 py-20 bg-gray-900">
        <h1 className="text-5xl font-bold leading-10 tracking-tighter text-white text-center">
          Meet our team
        </h1>
        <div className="flex flex-wrap items-stretch xl:justify-between justify-center mt-16 xl:gap-6 gap-4">
          <div className="lg:w-96 w-80">
            <Image
              src="https://images.unsplash.com/photo-1529586691389-2d3d4132856c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              className="h-72 w-full object-cover object-center rounded-t-md"
              alt="01"
              width={700}
              height={700}
            />
            <div className="bg-white shadow-md rounded-md py-4 text-center">
              <p className="text-base font-medium leading-6 text-gray-600">
                Kenneth Oark
              </p>
              <p className="text-base leading-6 mt-2 text-gray-800">
                Accountant{" "}
              </p>
            </div>
          </div>
          <div className="bg-gray-700 rounded-md lg:w-96 w-80 flex flex-col items-center justify-center md:py-0 py-12">
            <h3 className="text-2xl font-semibold leading-6 text-center text-white">
              About Team
            </h3>
            <p className="lg:w-80 lg:px-0 px-4 text-base leading-6 text-center text-white mt-6">
              Our team at the bank is dedicated to providing exceptional
              customer service and financial solutions. Comprised of experienced
              professionals with a passion for helping our clients achieve their
              financial goals, we strive to make banking simple, personal and
              accessible. Our team is knowledgeable in all aspects of personal
              and business banking, and we work closely with our clients to
              understand their unique needs and offer tailored solutions.
            </p>
          </div>
          <div className="lg:w-96 w-80">
            <Image
              src={img01}
              className="h-72 w-full object-cover object-center rounded-t-md"
              alt="woman in black dress"
              width={700}
              height={700}
            />
            <div className="bg-white shadow-md rounded-md py-4 text-center">
              <p className="text-base font-medium leading-6 text-gray-600">
                Martin Rhodes
              </p>
              <p className="text-base leading-6 mt-2 text-gray-800">
                Accountant
              </p>
            </div>
          </div>
          <div className="lg:w-96 w-80">
            <Image
              src={img02}
              className="h-72 w-full object-cover object-center rounded-t-md"
              alt="02"
              width={700}
              height={700}
            />
            <div className="bg-white shadow-md rounded-md py-4 text-center">
              <p className="text-base font-medium leading-6 text-gray-600">
                Janet Shawn
              </p>
              <p className="text-base leading-6 mt-2 text-gray-800">
                Consultant
              </p>
            </div>
          </div>
          <div className="lg:w-96 w-80">
            <Image
              src={img03}
              className="h-72 w-full object-cover object-center rounded-t-md"
              alt="woman smiling"
              width={700}
              height={700}
            />
            <div className="bg-white shadow-md rounded-md py-4 text-center">
              <p className="text-base font-medium leading-6 text-gray-600">
                Seraphine Klu
              </p>
              <p className="text-base leading-6 mt-2 text-gray-800">
                Developer
              </p>
            </div>
          </div>
          <div className="lg:w-96 w-80">
            <Image
              src={img04}
              className="h-72 w-full object-cover object-center rounded-t-md"
              alt="woman smiling"
              width={700}
              height={700}
            />
            <div className="bg-white shadow-md rounded-md py-4 text-center">
              <p className="text-base font-medium leading-6 text-gray-600">
                Annie Jackie
              </p>
              <p className="text-base leading-6 mt-2 text-gray-800">
                Consultant
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
