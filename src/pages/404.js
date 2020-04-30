import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from 'reactstrap';



const NotFoundPage = () => {

  return(

    <Layout header="short" headerTitle="404">
      <SEO title="404" />

      <Container>
        <Row className="pt-5 pb-5">
          <Col className="text-center">
            <h2>Page Not Found</h2>
          </Col>
        </Row>
      </Container>
      
    </Layout>


  )

}

export default NotFoundPage
