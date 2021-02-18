import React from 'react'

import '../sass/main.scss'
import contactStyles from './contact.module.scss'
import Layout from '../components/layout'

const ContactPage = () => {
    return (
        <div>
            <Layout>
                <div className={contactStyles.body}>
                    <p className={contactStyles.heading}>Get in touch</p>
                    <a className={contactStyles.email} href="mailto:kmrgrv119@gmail.com">Email</a>
                    <p className={contactStyles.heading}>Social</p>
                    <div className={contactStyles.social}>
                        <a className={contactStyles.socialLinkedin} href="https://www.linkedin.com/in/KrGv" target="_target" rel="noreferrer">LinkedIn</a>
                        <a className={contactStyles.socialGithub}   href="https://github.com/KmrGaurav"     target="_target" rel="noreferrer">GitHub</a>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default ContactPage