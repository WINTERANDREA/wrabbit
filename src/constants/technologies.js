import React from "react"
import Title from "../components/Title"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

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
    reactFirebase: file(relativePath: { eq: "firebase.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default () => {
  const data = useStaticQuery(query)
  const list = [
    {
      id: 1,
      image: data.gatsby.childImageSharp.fluid,
      title: "Gatsby JS",
      text: `Gatsby.js builds the fastest possible website.
      Don't build a website with last decade’s tech. The future of the web is mobile, JavaScript and APIs. Every website is a web app and every web app is a website. `,
    },
    {
      id: 2,
      image: data.react.childImageSharp.fluid,
      title: "React & React Native",
      text: `Originally created for Facebook, React has quickly become one of the most used front-end Web Development technologies in the world. Furthermore React Native allows us to build faster and cost effective hybrid mobile apps (Android & Ios).`,
    },
    {
      id: 3,
      image: data.reactFirebase.childImageSharp.fluid,
      title: "Firebase",
      text: `Firebase is a mobile and web application platform with tools and back-end infrastructure designed to help developers build high-quality and secure mobile and web apps.`,
    },
  ]
  return (
    <section className="section">
      <Title title="technologies" />
      <div className="section-center tech-center">
        {list.map(technologies => {
          const { id, image, title, text } = technologies

          return (
            <article key={id} className="tech">
              <Image className="tech-image" fluid={image} />
              <h4>{title}</h4>
              <p>{text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
