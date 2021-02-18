import React from 'react'
import { Link } from 'gatsby'

import '../sass/main.scss'
import pagenotfoundStyles from './404.module.scss'

import Head from '../components/head'
import Layout from '../components/layout'

const PageNotFound = () => {
    return (
        <Layout>
            <Head title="Page Not Found" />
            <p className={pagenotfoundStyles.heading}>Page not found</p>
            <Link className={pagenotfoundStyles.goback} to="/">Go back</Link>
        </Layout>
    )
}

export default PageNotFound