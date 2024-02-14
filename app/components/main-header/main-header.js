import Link from 'next/link'
import Image from 'next/image'

import logoImg from '@/assets/logo.png'

import classes from "./main-header.module.css"
import MainHeaderBackground from './main-header-background'
import NavLink from './nav-link'
export default function MainHeader() {
    return (
        <>
            <MainHeaderBackground />
            <header className={classes.header}>
                <Link className={classes.logo} href="/">
                    <Image src={logoImg} alt="A plate with food on it" priority></Image>
                    Next level food
                </Link>
                <nav className={classes.nav}>
                    <ul>
                        <li><NavLink href="/meals" >Browse meals</NavLink></li>
                        <li><NavLink href="/community" >Foodies community</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}