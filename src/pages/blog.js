import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import '../sass/main.scss'
import Layout from '../components/layout'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost {
                edges {
                    node {
                        title
                    }
                }
            }
        }
    `)

    return (
        <div>
            <Layout>
                <h1>Blog</h1>
                {data.allContentfulBlogPost.edges.map((edge) => <p>{edge.node.title}</p>)}
            </Layout>
        </div>
    )
}

export default BlogPage