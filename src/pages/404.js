import React from 'react'
import { Link } from 'gatsby'

import '../sass/main.scss'
import pagenotfoundStyles from './404.module.scss'

import Layout from '../components/layout'

const PageNotFound = () => {
    return (
        <Layout>
            <p className={pagenotfoundStyles.heading}>Page not found</p>
            <Link className={pagenotfoundStyles.goback} to="/">Go back</Link>
        </Layout>
    )
}

export default PageNotFound