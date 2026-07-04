import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="relative z-50 py-5 text-[#f8f2e8]">
        <div className="container mx-auto flex justify-between items-center">
            <Link href="/">
                <h1 className="text-2xl font-semibold tracking-normal">
                    Yashvanth<span className="text-accent"> R</span>
                </h1>
            </Link>

            <div className="hidden xl:flex items-center gap-8">
                <Nav/>
                <Link href="/contact">
                    <Button className="shadow-lg shadow-accent/20">Hire Me</Button>
                </Link>
            </div>

            <div className="xl:hidden">
                <MobileNav />
            </div>
        </div>
    </header>
  )
}

export default Header
