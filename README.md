# [Kumar Gaurav](https://kumargaurav.gtsb.io/)

This is a personal website. It has blogs and projects listed. The blogs are fetched from [Contentful]. Projects' READMEs are fetched from there respective github repositories.

The website is generated using [Gatsby].

## Live Demo

The website is live at <https://kumargaurav.gtsb.io/> on [Gatsby Cloud].

## Requirements

- For development, you will need Gatsby installed in your environment.
- For deployment, you will need Git installed on your system.

### Gatsby installation

    npm install gatsby-cli

If the installation was successful, you should be able to run the following command.

    $ gatsby --version
    X.X.XX

## Installing the website

    git clone https://github.com/KmrGaurav/kumar-gaurav
    cd kumar-gaurav
    npm install

## Running the website

- ### Deploying the website

  Set the environment variables listed in `.env.example` file.

      gatsby build

- ### Running the website locally for development

  Create a new file `.env` or rename `.env.example` to `.env` and put the [Contentful] and [GitHub] keys.

      npm run develop

[Gatsby]:       https://www.gatsbyjs.com/       "Gatsby"
[Gatsby Cloud]: https://www.gatsbyjs.com/cloud/ "Gatsby Cloud"
[Github]:       https://github.com              "GitHub"
[Contentful]:   https://www.contentful.com/     "Contentful"
