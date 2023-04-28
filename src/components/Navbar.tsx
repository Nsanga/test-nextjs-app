import Link from "next/link"

const Navbar = () => {
    return (
        <div>
            <nav>
                <Link href='/' className='head'>Home</Link>
                <Link href='/aboutUs' className='head'>About</Link>
                <Link href='/contact' className='head'>Contact</Link>
                <Link href='/blog'>Blog</Link>
            </nav>
        </div>
    )
}

export default Navbar
