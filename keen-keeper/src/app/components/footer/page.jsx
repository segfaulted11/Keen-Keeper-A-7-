import { CircleFadingPlus } from "lucide-react";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="bg-purple-200 h-70 mt-15">
         
         <div className="flex flex-col gap-3 items-center py-10 font-bold">
            <h1 className="text-5xl">KeenKeeper</h1>
            <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            <p>Social Links</p>
            <ul className="flex gap-3">
            <Link href={''}><CircleFadingPlus/></Link>
            <Link href={''}><CircleFadingPlus/></Link>
            <Link href={''}><CircleFadingPlus/></Link>
            </ul>
    <p className="border-t-4">© 2026 KeenKeeper. All rights reserved.</p>
         </div>
        </div>
    );
};

export default Footer;