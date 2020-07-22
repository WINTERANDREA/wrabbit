import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import Technology from "../components/Technology"
export default () => {
  return (
    <Layout>
      <Hero />
      <Technology />
      <Services />
    </Layout>
  )
}
// ...GatsbyImageSharpFluid
