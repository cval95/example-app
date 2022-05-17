import Link from 'next/link'
import Image from 'next/image'


const Navbar = () => {
    return (
        <nav>
        <div className="logo">
        </div>
       <Link href="/"><a>Home</a></Link> 
       <Link href="/listing"><a>Listings</a></Link>
      </nav>



      );
}
 
export default Navbar;