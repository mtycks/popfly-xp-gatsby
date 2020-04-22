import React, {useState} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css'
import Img from 'gatsby-image'
import "./layout.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

import { Collapse, Navbar, NavbarToggler, Nav, NavItem, Container, Row, Col } from 'reactstrap';

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
            ...GatsbyImageSharpFluid_withWebp_noBase64
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

        <nav className={`main-navigation ${collapsed ? `collapsed` : `open` }`}>
          <Container>
            <Row>
              <Col>
              
                <Navbar color="faded" dark expand="lg">
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
                        <Link to="/players">Players</Link>
                      </NavItem>
                      <NavItem>
                        <Link to="/team">Team</Link>
                      </NavItem>
                      <NavItem>
                        <Link to="/shop">Shop</Link>
                      </NavItem>
                      <NavItem>
                        <Link to="/contact">Contact</Link>
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
                  <Col xl={{size:"7", offset:"0"}} lg={{size:"6", offset: "0"}} md={{size:"8", offset:"2"}} sm={{size:"12", offset:"0"}} xs={{size:"12", offset: "0"}} className="tall-header-text">
                    <h1 dangerouslySetInnerHTML={{ __html: headerTitle }} />
                    <Link to="blog" className="btn btn-primary">Our Players</Link>
                  </Col>
                  <Col xl={{size:"5", offset: "0"}} lg={{size:"6", offset: "0"}} md={{size:"6", offset: "3"}} xs={{size:"8", offset:"2"}}>
                    <Img fluid={data.phones.childImageSharp.fluid} />
                  </Col>
                </Row>
              </Container>
            </div>

            <Img fluid={data.header_bg.childImageSharp.fluid} imgStyle={{objectFit: "cover", objectPosition: "50% 50%",}} style={{width: "100%", minHeight:"780px", maxHeight: "780px", display: "inline-block", textAlign:"center"}} />
          </>
        }

        {header === "short" &&
          <Img fluid={data.header_bg_short.childImageSharp.fluid} imgStyle={{objectFit: "cover", objectPosition: "50% 50%",}} style={{width: "100%", minHeight: "420px", maxHeight: "420px", display: "inline-block", textAlign:"center"}} />
        }

      </div>

      {children}

      <footer className="pt-5 pb-5">
        <Container>
          <Row>
            <Col md={{size:"3", offset:"0"}} xs={{size:"8", offset:"2"}} className="pb-5">
              <p>
                <Link to="/"><Img fluid={data.white_logo.childImageSharp.fluid} /></Link>
              </p>

              <a href="https://www.facebook.com/popflyxp/" target="_blank" rel="noopener noreferrer" className="d-inline-block p-3"><FontAwesomeIcon size="2x" icon={faFacebookF} /></a>
              <a href="https://twitter.com/PopFlyXP" target="_blank" rel="noopener noreferrer" className="d-inline-block p-3"><FontAwesomeIcon size="2x" icon={faTwitter} /></a>
              <a href="https://www.instagram.com/popflyxp/" target="_blank" rel="noopener noreferrer" className="d-inline-block p-3"><FontAwesomeIcon size="2x" icon={faInstagram} /></a>

            </Col>
            <Col sm={{offset:"0"}} md={{size:"6", offset:"1"}}>
              <h4>Additional Links</h4>
              <ul className="list-unstyled">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/players">Players</Link>
                </li>
                <li>
                  <Link to="/team">Team</Link>
                </li>
                <li>
                  <Link to="/shop">Shop</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </Col>
          </Row>
          <Row className="pt-3 pb-3">
            <Col>
              <hr />
            </Col>
          </Row>
        </Container>
      </footer>

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
