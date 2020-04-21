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



const IndexPage = () => {

  const data = useStaticQuery(graphql`
  query HomepageQuery {
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
    phoneFrame: file(absolutePath: { regex: "/frame-slider.png/" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    } 
    phoneFrame1: file(absolutePath: { regex: "/frame-slider-1.png/" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    } 
    phoneFrame2: file(absolutePath: { regex: "/frame-slider-2.png/" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    } 
    phoneFrame3: file(absolutePath: { regex: "/frame-slider-3.png/" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    } 
    phoneFrame4: file(absolutePath: { regex: "/frame-slider-4.png/" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    } 
    phoneFrame5: file(absolutePath: { regex: "/frame-slider-5.png/" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    } 
    phoneFrame6: file(absolutePath: { regex: "/frame-slider-6.png/" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }    
  }
  `)

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: "0",
    centerMode: true,
    autoplay:true,
    className: "center",
    responsive: [{
      breakpoint: 1340,
      settings: {
        slidesToShow:1
      }
    }]
  };

  return(

    <Layout header="tall" headerTitle={indexHeader}>
      <SEO title="Home" />

      <Container>
        <Row className="pt-5 pb-5">
          <Col md="5">
            <h2>POPFLYXP</h2>
            <p className="lead"><em>Is a Digital Brand Development Platform for Baseball Players. Its roster of athletes includes Active Players as well as Legends of the Game. PFXP's mission is to bring fans closer to their favorite player.</em></p>
            <p>In an era where Content is The Castle and the Audience is the King, we have created an Athlete Engagement Platform where Fans can find all the authentic content, relevant information and day to day perspective of the favorite Players in the game.</p>
            <p><Link to="blog" className="btn btn-primary">Our Team</Link></p>
          </Col>
          <Col md={{offset:"1", size:"6"}}>
            <Img fluid={data.comingsoon.childImageSharp.fluid} />
          </Col>
        </Row>
      </Container>

      <div className="hp-app text-center pb-5 pt-5">

            <h2 className="text-uppercase">App Design</h2>
            <p><em>PopFlyXp has all the exclusive content of your favorite athletes.</em></p>

            <div className="slick-container text-center">

              <div className="frame-holder">
                <Img fluid={data.phoneFrame.childImageSharp.fluid} style={{minWidth:"450px", display:'inline-block'}} />
              </div>

              <Slider {...settings}>
                <div>
                  <Img fluid={data.phoneFrame1.childImageSharp.fluid} style={{minWidth:"450px",maxWidth:"450px", display:"inline-block"}} />
                </div>
                <div>
                 <Img fluid={data.phoneFrame2.childImageSharp.fluid} style={{minWidth:"450px",maxWidth:"450px", display:"inline-block"}}  />
                </div>
                <div>
                 <Img fluid={data.phoneFrame3.childImageSharp.fluid} style={{minWidth:"450px",maxWidth:"450px", display:"inline-block"}}  />
                </div>
                <div>
                 <Img fluid={data.phoneFrame4.childImageSharp.fluid} style={{minWidth:"450px",maxWidth:"450px", display:"inline-block"}}  />
                </div>
                <div>
                 <Img fluid={data.phoneFrame5.childImageSharp.fluid} style={{minWidth:"450px",maxWidth:"450px", display:"inline-block"}}  />
                </div>
                <div>
                  <Img fluid={data.phoneFrame6.childImageSharp.fluid} style={{minWidth:"450px",maxWidth:"450px", display:"inline-block"}}  />
                </div>
              </Slider>
            </div>

      </div>

      <Container>
        <Row className="pt-5 pb-5">
          <Col xs="12" className="text-center">
            <h2 className="text-uppercase">Our Players</h2>
            <p><Img fluid={data.eltitan.childImageSharp.fluid} style={{minWidth: '150px', maxWidth:'200px', display:'inline-block'}} /></p>
          </Col>
        </Row>
      </Container>
      
    </Layout>


  )

}

export default IndexPage
