import React from 'react'
import { graphql } from 'gatsby'
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/layout'
import projectStyles from './project.module.scss'

export const query = graphql`
    query ($slug: String!) {
        contentfulProject(slug: {eq: $slug}) {
            projectName
            projectDescription
            liveDemoLink
            repositoryLink
        }
    }
`

const Blog = (props) => {
    return (
        <div>
            <Layout>
                <div className={projectStyles.project}>
                    <h1 className={projectStyles.projectName          }>{props.data.contentfulProject.projectName        }</h1>
                    <p  className={projectStyles.projectDescription   }>{props.data.contentfulProject.projectDescription }</p>
                    <a  className={projectStyles.projectLiveDemoLink  } href={props.data.contentfulProject.liveDemoLink  } target="_blank" rel="noreferrer">
                        <p className={projectStyles.projectLiveSign}>LIVE <span>&#11044;</span></p>
                        <p className={projectStyles.projectLiveDemoName}>{props.data.contentfulProject.projectName}</p>
                    </a>
                    <span className={projectStyles.projectRepoTitle}>Repository: </span>
                    <a  className={projectStyles.projectRepositoryLink} href={props.data.contentfulProject.repositoryLink} target="_blank" rel="noreferrer">{props.data.contentfulProject.repositoryLink}</a>
                </div>
            </Layout>
        </div>
    )
}

export default Blog