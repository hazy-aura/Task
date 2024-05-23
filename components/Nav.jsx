import Link from "next/link";
import { IoIosSearch  } from "react-icons/io";
import { MdOutlinePersonOutline, MdBookmarkBorder } from "react-icons/md";
import { BiShoppingBag } from "react-icons/bi";


function Nav() {
    return(
        <div className="flex items-center justify-between space-x-6">
        <Link href={"/"}> <IoIosSearch /></Link>
        <Link href={"/"}> <MdOutlinePersonOutline /></Link>
        <Link href={"/"}> <MdBookmarkBorder /></Link>
        <Link href={"/"}><BiShoppingBag /></Link>
        </div>
    )
    
}

export default Nav;