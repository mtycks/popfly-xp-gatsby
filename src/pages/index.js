import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const indexHeader = `Bringing fans and<br />players together`;

const IndexPage = () => (
  <Layout header="tall" headerTitle={indexHeader}>
    <SEO title="Home" />
    <h1>Home</h1>
  </Layout>
)

export default IndexPage
