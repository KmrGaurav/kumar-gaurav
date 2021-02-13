import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import '../sass/main.scss'
import blogStyles from './blog.module.scss'
import Layout from '../components/layout'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost {
                edges {
                    node {
                        title
                        slug
                        publishedDate(formatString: "MMMM Do, YYYY")
                    }
                }
            }
        }
    `)

    return (
        <div>
            <Layout>
                <ol className={blogStyles.posts}>
                    {data.allContentfulBlogPost.edges.map((edge) => 
                        <li className={blogStyles.postsPost}>
                            <Link to={edge.node.slug}>
                                <h2>{edge.node.title}</h2>
                                <p>{edge.node.publishedDate}</p>
                            </Link>
                        </li>
                    )}
                </ol>
            </Layout>
        </div>
    )
}

export default BlogPage