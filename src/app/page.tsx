import Image from "next/image";

import { Swap } from "./components/swap";

export default function Page() {
  return (
    <main className="flex flex-col h-full items-center justify-center">
      <Swap></Swap>
    </main>
  );
}
