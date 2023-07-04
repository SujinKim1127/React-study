import { Inter } from "next/font/google";
import { atom, useAtomValue, useSetAtom } from "jotai";
import { priceAtom } from "./price";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const setPrice = useSetAtom(priceAtom);
  const price = useAtomValue(priceAtom);

  const handleClick = () => {
    setPrice((prev) => (prev += 1000));
  };

  return (
    <div>
      <h1>Jotai</h1>
      <button onClick={handleClick}>+</button>
      <br />
      {price}
    </div>
  );
}
