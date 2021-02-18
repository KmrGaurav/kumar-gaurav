import React from 'react'
import { Helmet } from 'react-helmet'

const Head = ({ title }) => {
    return (
        <Helmet>
            <html lang="en" />
            <meta name="description" content="Kumar Gaurav" />
            <title>{`${title} | Kumar Gaurav`}</title>
        </Helmet>
    )
}

export default Head