import Image from "next/image";
import profile from "../public/img04-profile.png";

export default function Profile() {
  return (
    <div>
      <Image
        class="w-10 h-10 rounded-full cursor-pointer"
        src={profile}
        alt="profile"
        width={100}
        height={100}
      />
    </div>
  );
}
