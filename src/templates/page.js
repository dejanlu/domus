import React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../containers/layout"

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`

const Page = ({ data }) => {
  const { title } = data.mdx.frontmatter
  return (
    <Layout>
      <div>
        <h1>{title}</h1>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </div>
    </Layout>
  )
}

export default Page
