import React, { useState } from "react"
import Title from "./Title"
import Image from "gatsby-image"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiServices(sort: { fields: strapiId, order: DESC }) {
      nodes {
        strapiId
        service: Title
        description: Description {
          desc
          id
        }
        foto: Image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const Services = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiServices: { nodes: services },
  } = data

  const [value, setValue] = useState(0)
  const { service, foto, description } = services[value]
  console.log(service, foto, description)

  return (
    <section className="section">
      <Title title="Services" />
      <div className="service-center">
        {/* btn container */}
        <div className="btn-container">
          {services.map((item, index) => {
            return (
              <button
                key={item.strapiId}
                onClick={() => setValue(index)}
                className={`service-btn  ${index === value && "active-btn"}`}
              >
                {item.service}
              </button>
            )
          })}
        </div>
        {/* service info */}
        <article className="service-info">
          <div className="service-image">
            <Image
              style={{ height: "100%", objectFit: "contain" }}
              fluid={foto.childImageSharp.fluid}
            />
          </div>
          {description.map(item => {
            return (
              <div className="service-desc" key={item.id}>
                <p>{item.desc}</p>
              </div>
            )
          })}
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        more info
      </Link>
    </section>

    // <div>
    //   <h2 style={{ backgroundColor: "black" }}>services component</h2>
    //   {services.map((item, index) => {
    //     return (
    //       <>
    //         <h2 style={{ color: "red" }}>{item.Title}</h2>
    //         {Description.map(item => {
    //           return <p>{item.desc}</p>
    //         })}

    //         <Image fluid={item.foto.childImageSharp.fluid} />
    //       </>
    //     )
    //   })}
    // </div>
  )
}

export default Services
