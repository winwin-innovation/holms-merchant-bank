import Image from "next/Image";

export default function Profile() {
  return (
    <div>
      <Image
        class="w-10 h-10 rounded-full cursor-pointer"
        src="/../public/img04-profile.png"
        alt="User dropdown"
        width={100}
        height={100}
      />
    </div>
  );
}
