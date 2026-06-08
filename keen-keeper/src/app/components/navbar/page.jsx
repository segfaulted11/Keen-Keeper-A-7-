import { ChartLine, Clock, Home } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <Link href={`/`}className="btn btn-ghost text-xl">KeenKeeper</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <Link href={`/`}>
            <button className="btn btn-primary mr-4">
               <Home/>Home</button>
          </Link>
          <Link href={``}>
            <button className="btn btn-soft mr-4">
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
