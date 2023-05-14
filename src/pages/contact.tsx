import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Ratio from "react-bootstrap/Ratio"
import Row from "react-bootstrap/Row"
import Layout from "../components/layout"
import { bodyStyle, ratioParentStyle } from "./contact.module.css"

const ContactPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      {/* Contact Information */}
      <Container className="my-4">
        <h1 className="display-4 text-center mb-4">Contact</h1>

        <Row className="justify-content-center">
          <Col xs={10} md={8} xl={7}>
            <p>For inquiries, please reach me at:</p>
            <ul>
              <li>
                Call/Text <a href="tel:+19088120636">(908) 812-0636</a>
              </li>
              <li>
                <a href="mailto:joe@hockeyrats.com">joe@hockeyrats.com</a>
              </li>
            </ul>

            <h3>Ice Land Rink</h3>
            <ul>
              <li>
                Call <a href="tel:+16095886672">(609) 588-6672</a>
              </li>
              <li>6 Tennis Court, Hamilton Township, NJ 08619</li>
            </ul>
          </Col>
        </Row>
      </Container>

      {/* Map of Ice Land Rink */}
      <Container className="d-flex justify-content-center d-md-none">
        <Container className={ratioParentStyle}>
          <Ratio aspectRatio="4x3">
            <iframe
              className="border border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3044.405932277059!2d-74.68009978798703!3d40.266732071344954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3e1f1a9963a49%3A0x43aeebab848f9d68!2sIce%20Land%20Skating%20Center!5e0!3m2!1sen!2sus!4v1684071792032!5m2!1sen!2sus"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Ratio>
        </Container>
      </Container>

      <Container className="d-none d-md-flex justify-content-center d-lg-none">
        <Container className={ratioParentStyle}>
          <Ratio aspectRatio="4x3">
            <iframe
              className="border border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3044.405932277059!2d-74.68009978798703!3d40.266732071344954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3e1f1a9963a49%3A0x43aeebab848f9d68!2sIce%20Land%20Skating%20Center!5e0!3m2!1sen!2sus!4v1684071792032!5m2!1sen!2sus"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Ratio>
        </Container>
      </Container>

      <Container className="d-none d-lg-flex justify-content-center d-xxl-none">
        <Container className={ratioParentStyle}>
          <Ratio aspectRatio="4x3">
            <iframe
              className="border border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3044.405932277059!2d-74.68009978798703!3d40.266732071344954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3e1f1a9963a49%3A0x43aeebab848f9d68!2sIce%20Land%20Skating%20Center!5e0!3m2!1sen!2sus!4v1684071792032!5m2!1sen!2sus"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Ratio>
        </Container>
      </Container>

      <Container className="d-none d-xxl-flex justify-content-center">
        <Container className={ratioParentStyle}>
          <Ratio aspectRatio="16x9">
            <iframe
              className="border border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3044.405932277059!2d-74.68009978798703!3d40.266732071344954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3e1f1a9963a49%3A0x43aeebab848f9d68!2sIce%20Land%20Skating%20Center!5e0!3m2!1sen!2sus!4v1684071792032!5m2!1sen!2sus"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Ratio>
        </Container>
      </Container>
    </Layout>
  )
}

export default ContactPage

export const Head: HeadFC = () => {
  return (
    <>
      <html lang="en-US" />
      <body className={bodyStyle} />
      <title>Contact</title>
    </>
  )
}
