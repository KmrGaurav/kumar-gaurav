import React from 'react'
import { Link } from 'gatsby'

import headerStyles from './header.module.scss'

const Header = () => {
    return (
        <div>
            <header className={headerStyles.header}>
                <h1>
                    <Link to="/" className={headerStyles['headerTitle']}>KUMAR GAURAV</Link>
                </h1>
                <nav className={headerStyles['headerNav']}>
                    <ul className={headerStyles['headerNavList']}>
                        <li>
                            <Link to="/" className={headerStyles['headerNavListLink']} activeClassName={headerStyles['headerNavListActivelink']}>Home</Link>
                        </li>
                        <li>
                            <Link to="/projects" className={headerStyles['headerNavListLink']} activeClassName={headerStyles['headerNavListActivelink']}>Projects</Link>
                        </li>
                        <li>
                            <Link to="/blog" className={headerStyles['headerNavListLink']} activeClassName={headerStyles['headerNavListActivelink']}>Blog</Link>
                        </li>
                        <li>
                            <Link to="/about" className={headerStyles['headerNavListLink']} activeClassName={headerStyles['headerNavListActivelink']}>About</Link>
                        </li>
                        <li>
                            <Link to="/contact" className={headerStyles['headerNavListLink']} activeClassName={headerStyles['headerNavListActivelink']}>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header