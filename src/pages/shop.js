import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from 'reactstrap';



const ShopPage = () => {

  const data = useStaticQuery(graphql`
  query ShopPageQuery {
    comingsoon: file(absolutePath: { regex: "/comingsoonpopfly.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    eltitan: file(absolutePath: { regex: "/shop-titan-23.png/" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }   
  }
  `)

  return(

    <Layout header="short" headerTitle="Our Stores">
      <SEO title="Our Stores" />

      <Container>
        <Row className="pt-5 pb-5">
          <Col xs={{size:"8", offset:"2"}} md={{size:"4", offset:"4"}} className="text-center">
            <p>
              <a href="https://store.popflyxp.com/collections/adrian-gonzalez">
                <Img fluid={data.eltitan.childImageSharp.fluid} style={{width:'100%', display:'inline-block'}} />
              </a>
            </p>
            <h3 className="text-uppercase">Titan 23</h3>
          </Col>
        </Row>
      </Container>
      
    </Layout>


  )

}

export default ShopPage
