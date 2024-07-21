"use client";
import Image from "next/image";
import Link from "next/link";
import { RouteEnum, routes } from "./routes";
import { usePathname } from "next/navigation";

export const NavHeader = () => {
  const pathName = usePathname();
  return (
    <div className="items-center w-full justify-between font-mono text-sm flex px-3 py-2  shadow-md">
      <div>
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          className="dark"
          width={96}
          height={18}
          priority
        />
      </div>
      <div className="items-center justify-center w-full font-mono text-sm flex lg:mr-[100px]">
        {routes.map((item) => {
          const className = `${pathName === item.path ? "text-rose-600" : ""}`;
          return (
            <div key={item.path} className="py-2 p-3">
              <Link href={item.path}>
                <span className={className}>{item.title}</span>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
