import Image from "next/image";

export default function Profile() {
  return (
    <div>
      <Image
        class="w-10 h-10 rounded-full cursor-pointer"
        src="https://images.unsplash.com/photo-1555888997-03e986fc157b?ixlib=rb-4ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8b2xkJTIwbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt="profile"
        width={500}
        height={500}
      />
    </div>
  );
}
