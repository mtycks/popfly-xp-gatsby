import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from 'gatsby-image'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from 'reactstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const indexHeader = `Bringing fans and<br />players together`;



const PlayersPage = () => {

  const data = useStaticQuery(graphql`
  query PlayersPageQuery {
    comingsoon: file(absolutePath: { regex: "/comingsoonpopfly.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    eltitan: file(absolutePath: { regex: "/logotitanOPT.png/" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }   
  }
  `)

  return(

    <Layout header="short" headerTitle="Our Players">
      <SEO title="Home" />

      <Container>
        <Row className="pt-5 pb-5">
          <Col md={{size:"10", offset:"1"}} lg={{size:"8", offset:"2"}}>
            <Row>
              <Col xs={{size:"6", offset:"3"}} md={{size:"4", offset:"1"}} className="text-center">
                <p><Img fluid={data.eltitan.childImageSharp.fluid} style={{width:'100%', display:'inline-block'}} /></p>
              </Col>
              <Col md="6" className="text-center">
                <h2 className="text-uppercase">El Titan</h2>
                <p>Professional Baseball First Baseman who is currently a free agent. Previously played for the Texas Rangers, San Diego Padres, Boston Red Sox, Los Angeles Dodgers and the New York Mets. El Titán is one of the most decorated Mexican American Players in MLB history as 5x All Star, 2x Silver Slugger Award Winner, and 4x Gold Glove Award Winner.</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      
    </Layout>


  )

}

export default PlayersPage
