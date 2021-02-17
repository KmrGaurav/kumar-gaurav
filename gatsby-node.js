const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    
    const blogTemplate    = path.resolve('./src/templates/blog.js')
    const blogResponse = await graphql(`
        query {
            allContentfulBlogPost {
                edges {
                    node {
                        slug
                    }
                }
            }
        } 
    `)
    blogResponse.data.allContentfulBlogPost.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })
    
    const projectTemplate = path.resolve('./src/templates/project.js')
    const projectResponse = await graphql(`
        query {
            allContentfulProject {
                edges {
                    node {
                        slug
                        repositoryLink
                    }
                }
            }
        }
    `)
    projectResponse.data.allContentfulProject.edges.forEach((edge) => {
        createPage({
            component: projectTemplate,
            path: `/projects/${edge.node.slug}`,
            context: {
                slug: edge.node.slug,
                title: path.basename(edge.node.repositoryLink, '.git')
            }
        })
    })
}