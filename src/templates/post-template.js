import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

const PostTemplate = ({ data: post }) => (
  <Layout>
    <h1>{post.markdownRemark.frontmatter.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: post.markdownRemark.html }} />
  </Layout>
)

// This will be rendered and sent to the `data` parameter
export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default PostTemplate
