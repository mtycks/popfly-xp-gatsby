import React, {useState} from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col, Form, Input, Label, Button, FormGroup, Alert } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'


const ContactPage = () => {

  const [submitted, setSubmitted] = useState({});

  const SubmitContactForm = (ev) => {

    ev.preventDefault();

    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setSubmitted({ status: "SUCCESS" });
      } else {
        setSubmitted({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }


  return(

    <Layout header="short" headerTitle="Contact">
      <SEO title="Contact" />

      <Container>
        <Row className="pt-5 pb-2">
          <Col md="6" className="mb-5">
            <h3>Los Angeles Office</h3>
            <address className="m-0">
              100 W Broadway, Long Beach, CA 90802
            </address>
            <p className="m-0 text-secondary"><span>Telephone: (213) 283 PFXP</span></p>
            <p className="m-0"><a href="mailto:jesse@popflyxp.com">Jesse@PopFlyXP.com</a></p>
          </Col>
          <Col md="6">

            <Form action="https://formspree.io/xqkdrgnv" method="post" onSubmit={SubmitContactForm} className="mb-4">
              <FormGroup>
                <Label for="name">Name*</Label>
                <Input type="text" name="name" id="name" placeholder="Name" />
              </FormGroup>
              <FormGroup>
                <Label for="name">Email*</Label>
                <Input type="email" name="_replyto" id="email" placeholder="name@example.com" />
              </FormGroup>
              <FormGroup>
                <Label for="name">Message*</Label>
                <Input type="textarea" name="message" id="message" />
              </FormGroup>
              <Button color="primary">Submit</Button>
            </Form>

            {submitted.status === 'SUCCESS' &&
              <Alert color="success">Thanks! Your form was successfully submitted.</Alert>
            }
            
            {submitted.status === 'ERROR' &&
            <Alert color="danger">Oops, there was an error submitting the form. Please try again.</Alert>
            }

          </Col>
        </Row>
        <hr />
        <Row className="pt-2 pb-5">

          <Col md="6" className="mb-5 contact-social">

            <h3>Social Network</h3>
            <p>Find us on our social media networks and find out everything that interests you about your favorite athlete.</p>
            <a href="https://www.facebook.com/popflyxp/" target="_blank" rel="noopener noreferrer" className="d-inline-block pr-4"><FontAwesomeIcon size="3x" icon={faFacebookF} /></a>
            <a href="https://twitter.com/PopFlyXP" target="_blank" rel="noopener noreferrer" className="d-inline-block pr-4"><FontAwesomeIcon size="3x" icon={faTwitter} /></a>
            <a href="https://www.instagram.com/popflyxp/" target="_blank" rel="noopener noreferrer" className="d-inline-block pr-4"><FontAwesomeIcon size="3x" icon={faInstagram} /></a>

          </Col>

          <Col md="6" className="mb-5">
            <h3>Give us a call!</h3>
            <p className="mb-3">We’re happy to hear from you and will try to help in any way we can. We want to make sure you have the best experience possible connecting with your favorite player.</p>
            <h4 className="mt-0">tel: 213.283.7397</h4>
          </Col>
        </Row>
      </Container>
      
    </Layout>


  )

}

export default ContactPage
