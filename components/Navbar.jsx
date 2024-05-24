import Logo from "./Logo";
import MiddleNavLinks from "./MiddleNavLinks";
import Nav from "./Nav";
function Navbar() {


    return(
       <>
        
       
       <header className="bg-black sticky top-0 z-[20] mx-auto flex w-full items-center justify-between border-gray-500 p-8">
       <Logo />
       <MiddleNavLinks  />
       
       <Nav />
       </header>
      
       
       
       </>
    )
    
}

export default Navbar;


