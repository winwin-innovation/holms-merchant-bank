import Navbar from "../../components/Navbar";
import Power from "../../public/power.jpg";
import Image from "next/image";

export default function PowerofAttorney() {
  return (
    <div>
      <Navbar />
      <div class="items-center text-center justify-center flex">
        <Image
          src={Power}
          width="1000"
          height="1000"
          class="items-center text-center justify-center flex"
        />
      </div>
    </div>
  );
}
