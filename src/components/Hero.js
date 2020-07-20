import React from "react"
import Image from "gatsby-image"
import wrabbit from "../assets/wrabbit_text.png"
import wrabbitSvg from "../assets/wrabbit_img.png"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const query = graphql`
  {
    imageWall: file(relativePath: { eq: "wall.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wrabbitText: file(relativePath: { eq: "wrabbit_text.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const data = useStaticQuery(query)

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <Image fluid={data.wrabbitText.childImageSharp.fluid} />
            <h4>
              Creating modern web experience for the next generation of
              consumer-facing company
            </h4>
            <Link to="/portfolio" className="btn">
              Portfolio
            </Link>
          </div>
        </article>
        <Image
          fluid={data.imageWall.childImageSharp.fluid}
          className="hero-img"
        />
      </div>
    </header>
  )
}

export default Hero
