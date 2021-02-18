import React from 'react'
import { graphql } from 'gatsby'

import projectStyles from './project.module.scss'

import Head from '../components/head'
import Layout from '../components/layout'

export const query = graphql`
    query ($slug: String!, $title: String!) {
        contentfulProject(slug: {eq: $slug}) {
            projectName
            projectDescription
            liveDemoLink
            repositoryLink
        }
        githubReadme(title: {eq: $title}) {
            childMarkdownRemark {
                html
            }
        }
    }
`

const Project = (props) => {
    return (
        <div>
            <Layout>
                <Head title={props.data.contentfulProject.projectName} />
                <div className={projectStyles.project}>
                    <h1 className={projectStyles.projectName          }>{props.data.contentfulProject.projectName        }</h1>
                    <p  className={projectStyles.projectDescription   }>{props.data.contentfulProject.projectDescription }</p>
                    <a  className={projectStyles.projectLiveDemoLink  } href={props.data.contentfulProject.liveDemoLink  } target="_blank" rel="noreferrer">
                        <p className={projectStyles.projectLiveSign}>LIVE</p>
                        <p className={projectStyles.projectLiveDemoName}>{props.data.contentfulProject.projectName}</p>
                    </a>
                    <span className={projectStyles.projectRepoTitle}>Repository: </span>
                    <a  className={projectStyles.projectRepositoryLink} href={props.data.contentfulProject.repositoryLink} target="_blank" rel="noreferrer">{props.data.contentfulProject.repositoryLink}</a>
                    <hr />
                    <div className={projectStyles.projectGithubReadme} dangerouslySetInnerHTML={{ __html: props.data.githubReadme.childMarkdownRemark.html }}></div>
                </div>
            </Layout>
        </div>
    )
}

export default Project