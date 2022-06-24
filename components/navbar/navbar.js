import css from "./navbar.module.css";
import Link from "next/link";
import NavbarLogo from "./navbar-logo";

export default function Navbar() {
    return (
        <nav className={css.Navbar}>
            <Link href="/">
                <a><NavbarLogo /></a>
            </Link>

            <ul className={css.Navbar_Menu}>
                <li className={css.Navbar_Menu__Item}>
                    <Link href="/">Home</Link>
                </li>
                <li className={css.Navbar_Menu__Item}>
                    <Link href="/posts">Posts</Link>
                </li>
                <li className={css.Navbar_Menu__Item}>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}