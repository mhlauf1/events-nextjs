import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

const NavLink = ({ href, text }) => (
    <li>
        <Link href={href}>{text}</Link>
    </li>
)

export const Navbar = () => {
    return (
        <header className={styles.navContainer}>
            <Link href="/">
                <Image src="/logo.svg" height={50} width={50} />
            </Link>
            <nav>
                <ul>
                    <NavLink href="/" text='About' />
                    <NavLink href="/" text='Agenda' />
                    <NavLink href="/" text='Speakers' />
                    <NavLink href="/" text='Sponsors' />
                    <NavLink href="/events" text='FAQ' />
                    <NavLink href="/about-us" text='Register Now' />
                </ul>
            </nav>
        </header>
    )
}