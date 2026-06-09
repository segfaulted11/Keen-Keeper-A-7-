"use client"
import { ChartLine, Clock, Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  console.log(pathName)
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <Link href={`/`}className={`btn btn-ghost text-xl`}>KeenKeeper</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <Link href={`/`}>
            <button className={`btn mr-4 ${pathName==="/"?"btn-primary":""}`}>
               <Home/>Home</button>
          </Link>
          <Link href={`/timeline`}>
            <button className={`btn mr-4 ${pathName==="/timeline"?"btn-primary":""}`}>
               <Clock/> Timeline</button>
          </Link>
          <Link href={``}>
            <button className="btn btn-soft">
              <ChartLine/> Stats</button>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
