import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import '../sass/main.scss'
import aboutStyles from './about.module.scss'
import Layout from '../components/layout'

const AboutPage = () => {
    const data = useStaticQuery(graphql`
        query {
            contentfulAboutPage {
                about {
                    raw
                }
            }
        }
    `)

    return (
        <div>
            <Layout>
                <p className={aboutStyles.body}>{documentToReactComponents(JSON.parse(data.contentfulAboutPage.about.raw))}</p>
            </Layout>
        </div>
    )
}

export default AboutPage