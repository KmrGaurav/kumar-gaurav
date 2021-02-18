import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import blogStyles from './blog.module.scss'

import Head from '../components/head'
import Layout from '../components/layout'

export const query = graphql`
    query ($slug: String!) {
        contentfulBlogPost(slug: {eq: $slug}) {
            title
            publishedDate(formatString: "MMMM Do, YYYY")
            postDescription
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
                <Head title={props.data.contentfulBlogPost.title} />
                <div className={blogStyles.blog}>
                    <h1 className={blogStyles.blogTitle      }>{props.data.contentfulBlogPost.title}</h1>
                     <p className={blogStyles.blogDate       }>{props.data.contentfulBlogPost.publishedDate}</p>
                     <p className={blogStyles.blogDescription}>{props.data.contentfulBlogPost.postDescription}</p>
                     <hr />
                     <p className={blogStyles.blogBody       }>{documentToReactComponents(JSON.parse(props.data.contentfulBlogPost.body.raw))}</p>
                </div>
            </Layout>
        </div>
    )
}

export default Blog