'use client';

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
    {
        name:"home",
        path:"/",
    },
    // {
    //     name:"experience",
    //     path:"/experience",
    // },
    {
        name:"experience",
        path:"/experience",
    },
    {
        name:"work",
        path:"/work",
    },
    {
        name:"contact",
        path:"/contact",
    },
];

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent"/>
            </SheetTrigger>
            <SheetContent className="flex flex-col border-white/10 bg-[#101016] text-[#f8f2e8]">
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">
                            Yashvanth<span className="text-accent"> R</span>
                        </h1>
                    </Link>
                </div>
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => {
                        return (
                            <Link 
                                href={link.path} 
                                key={index} 
                                prefetch={true}
                                className={`${link.path === pathname ? "bg-accent text-primary" : "text-white/70 hover:text-white"} rounded-full px-6 py-2 text-xl capitalize transition-all`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav;
