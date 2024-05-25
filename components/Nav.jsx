import Link from "next/link";
import { IoIosSearch  } from "react-icons/io";
import { MdOutlinePersonOutline, MdBookmarkBorder } from "react-icons/md";
import { BiShoppingBag } from "react-icons/bi";


function Nav() {
    const sz = 30;
    return(
        <div className="flex items-center justify-between space-x-6 
        
        ">
        <Link href={"/"}> <IoIosSearch size={sz} /></Link>
        <Link href={"/"}> <MdOutlinePersonOutline size={sz} /></Link>
        <Link href={"/"}> <MdBookmarkBorder size={sz} /></Link>
        <Link href={"/"}><BiShoppingBag size={sz} /></Link>
        </div>
    )
    
}

export default Nav;