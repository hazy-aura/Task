import Link from "next/link";

function MiddleNavLinks() {
 return(
    <div className="flex items-center justify-center space-x-12 w-115 pb-12 ">
    <Link href={"/"}> Bags</Link>
    <Link href={"/"}> Travel</Link>
    <Link href={"/"}> Accessories</Link>
    <Link href={"/"}> Gifting </Link>
    <Link href={"/"}> Jewellery </Link>
    </div>
 )
    
}

export default MiddleNavLinks;