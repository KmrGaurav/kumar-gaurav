import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import '../sass/main.scss'
import projectsStyles from './projects.module.scss'
import Layout from '../components/layout'

const ProjectsPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulProject {
                edges {
                    node {
                        projectName
                        projectDescription
                        slug
                    }
                }
            }
        }      
    `)

    return (
        <div>
            <Layout>
                <ol className={projectsStyles.list}>
                    {data.allContentfulProject.edges.map((edge) => 
                        <li className={projectsStyles.listItem}>
                            <Link to={edge.node.slug}>
                                <h2>{edge.node.projectName}</h2>
                                <p>{edge.node.projectDescription}</p>
                            </Link>
                        </li>
                    )}
                </ol>
            </Layout>
        </div>
    )
}

export default ProjectsPage