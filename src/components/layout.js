/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Navbar from "./navbar"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
      <div 
        style={{
          height: '10vh',
          background: '#00abb5',
          display: 'grid',
          gridAutoFlow: 'column',
          boxShadow: `-4px 5px 5px -3px rgba(0,0,0,0.75)`,
          padding: '0',
          marginBottom: '3rem'
        }}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Navbar />
      </div>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
        <main
            style={{ height: '80vh' }}
          >{children}</main>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
