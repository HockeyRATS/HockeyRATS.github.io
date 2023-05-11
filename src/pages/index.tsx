import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import Row from "react-bootstrap/Row"
import Profile from "./../images/joe-wagner-profile-800_medium.jpg"
import Layout from "../components/layout"
import {
  bodyStyle,
  buttonStyle,
  htmlStyle,
  jumbotronStyle,
  profileStyle,
} from "./index.module.css"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Container className={jumbotronStyle}>
        <Row>
          <Col
            lg={4}
            className="d-flex justify-content-center align-items-center"
          >
            <Image
              src={Profile}
              alt="Coach Joe Wagner"
              thumbnail={true}
              className={profileStyle}
            />
          </Col>

          <Col lg={8}>
            <p className="lead mt-3">
              Joe Wagner is a premier hockey instructor with over 20 years of
              experience. He was the head coach of the 2020-2021 Mercer Chiefs
              Midget U16 American AAA Team.
            </p>

            <p className="lead d-none d-sm-block">
              Focus is placed on fundamental skills that benefit modern hockey
              players. Above all, Joe strives to ensure his students have fun!
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
  )
}

export default IndexPage

export const Head: HeadFC = () => {
  return (
    <>
      <html lang="en-US" className={htmlStyle} />
      <body className={bodyStyle} />
      <title>HockeyRATS</title>
    </>
  )
}
