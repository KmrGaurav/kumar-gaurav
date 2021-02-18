require('dotenv/config')

module.exports = {
    plugins: [
        "gatsby-plugin-sass",
        {
            resolve: "gatsby-source-contentful",
            options: {
                spaceId:     process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
            }
        },
        "gatsby-transformer-remark",
        {
            resolve: "gatsby-source-gh-readme",
            options: {
                gitHubToken: `${process.env.GITHUB_API_TOKEN}`
            }
        },
        "gatsby-plugin-react-helmet"
    ]
}
