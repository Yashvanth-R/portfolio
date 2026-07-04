"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "home",
        path: "/",
    },
    // {
    //     name: "experience",
    //     path: "/experience",
    // },
    {
        name: "experience",
        path: "/experience",
    },
    {
        name: "work",
        path: "/work",
    },
    {
        name: "contact",
        path: "/contact",
    },
];

const Nav = () => {
    const pathname = usePathname();
    return (
        <nav className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] p-1 backdrop-blur">
            {links.map((link, index) => {
                return (
                    <Link 
                        href={link.path} 
                        key={index} 
                        prefetch={true}
                        className={`${link.path === pathname ? "bg-accent text-primary" : "text-white/70 hover:text-white"} rounded-full px-4 py-2 capitalize font-medium transition-all`}
                    >
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    )
}

export default Nav;
