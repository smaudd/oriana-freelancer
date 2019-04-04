import React from "react"

import Layout from "../components/layout"
import Link from "gatsby-link"
import Bio from "../components/bio"
import { graphql } from "gatsby";


const Blog = ({data}) => (
  <Layout>
    <Bio />
    <h1>Lastest Posts</h1>
    {data.allMarkdownRemark.edges.map(post => (
      <div key={post.node.id}>
        <h3>{post.node.frontmatter.title}</h3>
        <small>Author: {post.node.frontmatter.author}</small>
        <br />
        <small>Date: {post.node.frontmatter.date}</small>
        <br />
        <br />
        <p>{post.node.frontmatter.description}</p>
        <Link to={post.node.frontmatter.path}>Read More</Link>
        <br />
        <br />
        <hr />
      </div>
    ))}
  </Layout>
)

export const pageQuery = graphql`
 query BlogIndexQuery {
      allMarkdownRemark {
          edges {
              node {
                id
                  frontmatter {
                      path
                      title
                      date
                      author
                      description
                  }
              }
          }
      }
 }
`

export default Blog
