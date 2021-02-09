import React from 'react'
import { Link } from 'gatsby'

import headerStyles from './header.module.scss'

const Header = () => {
    return (
        <div>
            <header className={headerStyles.header}>
                <h1>
                    <Link to="/" className={headerStyles['headerTitle']}>Kumar Gaurav</Link>
                </h1>
                <nav>
                    <ul className={headerStyles['headerNavList']}>
                        <li>
                            <Link to="/" className={headerStyles['headerNavListNavLink']}>Home</Link>
                        </li>
                        <li>
                            <Link to="/blog" className={headerStyles['headerNavListNavLink']}>Blog</Link>
                        </li>
                        <li>
                            <Link to="/about" className={headerStyles['headerNavListNavLink']}>About</Link>
                        </li>
                        <li>
                            <Link to="/contact" className={headerStyles['headerNavListNavLink']}>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header