import React from "react"
/* import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby" */
import Title from "./Title"
import Tech from "../constants/technologies"
/* 
const query = graphql`
  {
    gatsby: file(relativePath: { eq: "gatsby.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    react: file(relativePath: { eq: "react.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    reactFirebase: file(relativePath: { eq: "react-native-firebase-1.svg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
` */

const Technology = () => {
  return <Tech />
}

export default Technology
