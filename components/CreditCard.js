import Image from "next/image";
import Credit from "../public/credit-card.jpg";

export default function CreditCard() {
  return (
    <div>
      <Image src={Credit} width="500" height="500" alt="credit-card" />
    </div>
  );
}
