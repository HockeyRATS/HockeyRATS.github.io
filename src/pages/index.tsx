import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  backgroundContainerStyle,
  backgroundImageStyle,
  bodyStyle,
  buttonStyle,
  contentContainerStyle,
  htmlStyle,
  jumbotronStyle,
} from "./index.module.css"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Container fluid className={backgroundContainerStyle}>
      <StaticImage
        src="../images/seong-stick-flex_medium.jpg"
        alt=""
        backgroundColor="#dce2e0"
        layout="fullWidth"
        placeholder="blurred"
        formats={["auto", "webp", "avif"]}
        className={backgroundImageStyle}
      />

      <Container fluid className={contentContainerStyle}>
        <Layout>
          <Container className={jumbotronStyle}>
            <Row>
              <Col
                lg={4}
                className="d-flex justify-content-center align-items-center"
              >
                <StaticImage
                  src="../images/joe-wagner-profile-800_medium.jpg"
                  alt="Coach Joe Wagner"
                  placeholder="blurred"
                  width={227.625}
                  height={262.387}
                  className="img-thumbnail"
                />
              </Col>

              <Col lg={8}>
                <p className="lead mt-3">
                  Joe Wagner is a premier hockey instructor with over 20 years
                  of experience. He was the head coach of the 2020-2021 Mercer
                  Chiefs Midget U16 American AAA Team.
                </p>

                <p className="lead d-none d-sm-block">
                  Focus is placed on fundamental skills that benefit modern
                  hockey players. Above all, Joe strives to ensure his students
                  have fun!
                </p>

                <hr className="my-4" />

                <p>Coach Wagner is currently accepting new players.</p>

                <Button href="/lessons" size="lg" className={buttonStyle}>
                  View Lessons
                </Button>
              </Col>
            </Row>
          </Container>
        </Layout>
      </Container>
    </Container>
  )
}

export default IndexPage

export const Head: HeadFC = () => {
  return (
    <>
      <SEO />
      <html lang="en-US" className={htmlStyle} />
      <body className={bodyStyle} />
    </>
  )
}
