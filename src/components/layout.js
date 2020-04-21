import React, {useState} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css'
import Img from 'gatsby-image'
import Header from "./header"
import Sidebar from "./sidebar"
import RecentPosts from './recent-posts'
import "./layout.css"
import igIcon from '../images/instagram-icon.svg'
import twtrIcon from '../images/twitter-icon.svg'

import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, Container, Row, Col } from 'reactstrap';


const Layout = ({ children, header, headerTitle }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
      white_logo: file(absolutePath: { regex: "/whitelogo3.png/" }) {
        childImageSharp {
          fluid(maxWidth: 250, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      header_bg: file(absolutePath: { regex: "/slidehomeOPT.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      header_bg_short: file(absolutePath: { regex: "/interior-bg.png/" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      phones: file(absolutePath: { regex: "/celulares.png/" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <>

      <div className="popflyxp-header">

        <nav className="main-navigation">
          <Container>
            <Row>
              <Col>
              
                <Navbar color="faded" dark expand="md">
                  <Link href="/" className="navbar-brand mr-auto">
                    <Img fluid={data.white_logo.childImageSharp.fluid} imgStyle={{objectFit: "contain",objectPosition: "50% 50%",}} style={{minWidth: "250px", display: "inline-block"}} />
                  </Link>
                  <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                  <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                      <NavItem>
                        <Link to="/">Home</Link>
                      </NavItem>
                      <NavItem>
                        <Link to="/">Players</Link>
                      </NavItem>
                      <NavItem>
                        <Link to="/">Team</Link>
                      </NavItem>
                      <NavItem>
                        <Link to="/">Shop</Link>
                      </NavItem>
                      <NavItem>
                        <Link to="/">Contact</Link>
                      </NavItem>
                    </Nav>
                  </Collapse>
                </Navbar>

              </Col>
            </Row>
          </Container>
        </nav>
    
        {headerTitle && header === "short" &&
          <div className="main-header-title">
            <h1>{headerTitle}</h1>
          </div>
        }

        {header === "tall" &&
          <>
            <div className="tall-header-title">
              <Container>
                <Row>
                  <Col md="7">
                    <h1 dangerouslySetInnerHTML={{ __html: headerTitle }} />
                    <Link to="blog" className="btn btn-primary">Our Players</Link>
                  </Col>
                  <Col md="5">
                    <Img fluid={data.phones.childImageSharp.fluid} />
                  </Col>
                </Row>
              </Container>
            </div>

            <Img fluid={data.header_bg.childImageSharp.fluid} imgStyle={{objectFit: "cover", objectPosition: "50% 50%",}} style={{width: "100%", maxHeight: "780px", display: "inline-block", textAlign:"center"}} />
          </>
        }

        {header === "short" &&
          <Img fluid={data.header_bg_short.childImageSharp.fluid} imgStyle={{objectFit: "cover", objectPosition: "50% 50%",}} style={{width: "100%", maxHeight: "420px", display: "inline-block", textAlign:"center"}} />
        }

      </div>

      {children}
      
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
