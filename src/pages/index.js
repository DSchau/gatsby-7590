import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = ({ data }) => (
  <Layout>
    <div dangerouslySetInnerHTML={{ __html: data.markdown.childMarkdownRemark.html }} />
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    markdown:file(relativePath:{eq:"example.md"}) {
      childMarkdownRemark {
        html
      }
    }
  }
`