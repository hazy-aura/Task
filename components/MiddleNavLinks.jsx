import Link from "next/link";

function MiddleNavLinks() {
 return(
    <div className=" sticky z-1 flex items-start justify-center space-x-12 w-115 pt-12  ">
    <Link href={"/"}> Bags</Link>
    <Link href={"/"}> Travel</Link>
    <Link href={"/"}> Accessories</Link>
    <Link href={"/"}> Gifting </Link>
    <Link href={"/"}> Jewellery </Link>
    </div>
 )
    
}

export default MiddleNavLinks;