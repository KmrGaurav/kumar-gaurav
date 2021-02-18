import React from 'react'
import { Link } from 'gatsby'

import '../sass/main.scss'
import indexStyles from './index.module.scss'

import Head from '../components/head'
import Layout from '../components/layout'

const IndexPage = () => {
    return (
        <div>
            <Layout>
                <Head title="Home" />
                <div className={indexStyles.body}>
                    <p className={indexStyles.heading}>
                        Hi,<br />
                        I’m Kumar Gaurav,<br />
                        Web Developer.
                    </p>
                    <Link to="/contact" className={indexStyles.contactMe}>Contact me</Link>
                </div>
            </Layout>
        </div>
    )
}

export default IndexPage