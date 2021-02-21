import React from 'react'

import footerStyles from './footer.module.scss'

const Footer = () => {
    return (
        <div>
            <footer className={footerStyles.footer}>
                &copy; 2021 Kumar&nbsp;Gaurav. All Rights Reserved.
            </footer>
        </div>
    )
}

export default Footer