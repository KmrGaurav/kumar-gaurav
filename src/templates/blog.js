import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/layout'
import blogStyles from './blog.module.scss'

export const query = graphql`
    query ($slug: String!) {
        contentfulBlogPost(slug: {eq: $slug}) {
            title
            publishedDate(formatString: "MMMM Do, YYYY")
            body {
                raw
            }
        }
    }
`

const Blog = (props) => {
    return (
        <div>
            <Layout>
                <div className={blogStyles.blog}>
                    <h1 className={blogStyles.title}>{props.data.contentfulBlogPost.title}</h1>
                     <p className={blogStyles.date }>{props.data.contentfulBlogPost.publishedDate}</p>
                     <p className={blogStyles.body }>{documentToReactComponents(JSON.parse(props.data.contentfulBlogPost.body.raw))}</p>
                </div>
            </Layout>
        </div>
    )
}

export default Blog