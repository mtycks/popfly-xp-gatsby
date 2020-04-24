import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from 'reactstrap';

const OurTeamPage = () => {

  const data = useStaticQuery(graphql`
  query OurTeamPageQuery {
    comingsoon: file(absolutePath: { regex: "/comingsoonpopfly.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    adrian: file(absolutePath: { regex: "/team-adrian.png/" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    } 
    jesse: file(absolutePath: { regex: "/team-jesse.png/" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    } 
    josue: file(absolutePath: { regex: "/team-josue.png/" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    } 
    luis: file(absolutePath: { regex: "/team-luis.png/" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    } 
    pascual: file(absolutePath: { regex: "/team-pascual.png/" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }   
  }
  `)

  const team = [
    {name: "Jesse Nuñez", img: data.jesse.childImageSharp.fluid, title: "Founder & CEO", desc: "Extremely versatile, creative and results-focused executive & entrepreneur with a  proven track record of developing highly effective business and marketing strategies in both the general and multi-cultural markets."},
    {name: "Luis Zuno", img: data.luis.childImageSharp.fluid, title: "Founder & COO", desc: "Luis is a well versed and highly experienced marketing executive who is leading our experience and operations teams to create a great experience and connectivity with our partners, clients and fans." },
    {name: "Pascual Aranalde", img: data.pascual.childImageSharp.fluid, title: "Founder & CAO", desc: "Executive with a high business sense focused on results, with extensive experience in investment banking, brand management, sponsorships, sports marketing, leading administrative and operational staff." },
    {name: "Adrían González", img: data.adrian.childImageSharp.fluid, title: "Founder & CPDO", desc: "Professional Baseball First Baseman who is currently a free agent. Previously played for the Texas Rangers, San Diego Padres, Boston Red Sox, Los Angeles Dodgers and the New York Mets." },
    {name: "Josué Elguezabal", img: data.josue.childImageSharp.fluid, title: "Founder & CCO", desc: "Josue has served as the Content Development Director for a variety of MLB players over the last 4 years." },
  ]

  return(

    <Layout header="short" headerTitle="Our Team">
      <SEO title="Our Team" />

      <Container fluid={true}>
        <div className="pt-5 pb-5 team-members">

          {team.map((member, index) => {
            return(
              <div className="text-center mb-5 team-member">
                <div className="pl-4 pr-4">
                  <Img fluid={member.img} style={{width:'100%', display:'inline-block'}} />
                  <h3>{member.name}</h3>
                  <h5>{member.title}</h5>
                  <p>{member.desc}</p>
                </div>
              </div>
            )
          })}

          
        </div>
      </Container>
      
    </Layout>


  )

}

export default OurTeamPage
