import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout";
import Image from "../components/image";
import PageQuery from "./blog";
import SEO from "../components/seo";

console.log(PageQuery);

const IndexPage = () => (
  <div>
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/blog">Blog</Link>
  </Layout>
  </div>
)

export default IndexPage
