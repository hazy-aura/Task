import Link from "next/link";

function MiddleNavLinks() {
 return(
    <div className=" sticky z-1 md:flex items-start justify-center space-x-12 w-full pt-12 text-lg 
     sm:block
    ">
    <Link href={"/"}> Bags</Link>
    <Link href={"/"}> Travel</Link>
    <Link href={"/"}> Accessories</Link>
    <Link href={"/"}> Gifting </Link>
    <Link href={"/"}> Jewellery </Link>
    </div>
 )
    
}

export default MiddleNavLinks;