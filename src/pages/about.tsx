import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  bodyStyle,
  jumbotronStyle,
  creditLinkStyle,
  creditSvgStyle,
  creditTextStyle,
} from "./about.module.css"

const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      {/* Jumbotron containing group photo */}
      <Container fluid className={jumbotronStyle}>
        <Container fluid className="d-flex justify-content-end px-0">
          <a
            // Arthur's Unsplash profile doesn't exist anymore but keep link
            href="https://unsplash.com/@iamarthuredelman?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
            className={creditLinkStyle}
            target="_blank"
            rel="noopener noreferrer"
            title="Download free do whatever you want high-resolution photos from Arthur Edelman"
          >
            <span className={creditTextStyle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={creditSvgStyle}
                viewBox="0 0 32 32"
              >
                <title>unsplash-logo</title>
                <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
              </svg>
            </span>
            <span className={creditTextStyle}>Arthur Edelman</span>
          </a>
        </Container>
      </Container>

      <Container>
        <h1 className="display-4 text-center pt-2 mb-5">About Us</h1>

        <Row className="align-items-start">
          {/* Image of Coach Wagner */}
          <Col lg="6">
            <StaticImage
              alt="Coach Wagner, chief of HockeyRATS"
              src="../images/joe-wagner-about-winter-3x4_medium.jpg"
              placeholder="blurred"
              className="shadow border rounded"
            />
          </Col>

          {/* About page text */}
          <Col lg="6" className="mt-4">
            <blockquote className="blockquote text-center pb-2">
              <p>
                <strong>Hockey rat</strong>, <em>noun</em>
              </p>
              <p>Someone whose life revolves around being a hockey player.</p>
            </blockquote>

            <hr className="border-top border-light pb-3" />

            <p className="pb-3">
              HockeyRATS is home to players who are fanatical about improving
              their game. We know the early morning grind leads to late-night
              victories.
            </p>

            <p className="pb-3">
              We focus on fundamental drills that benefit modern hockey players.
              That's why we pioneered the{" "}
              <span className="text-danger">R.A.T.S.</span> Hockey Training
              System:
            </p>

            <Container className="justify-content-center pb-3 mb-3">
              <Col xs={{ span: 4, offset: 5 }} className="text-left">
                <h3 className="mb-0">
                  <span className="text-danger">R</span>epetition
                </h3>
                <h3 className="mb-0">
                  <span className="text-danger">A</span>pplication
                </h3>
                <h3 className="mb-0">
                  <span className="text-danger">T</span>actics
                </h3>
                <h3 className="mb-0">
                  <span className="text-danger">S</span>kills
                </h3>
              </Col>
            </Container>

            <p>
              We believe players from the Mini Mite to Senior levels can quickly
              improve by repeating fundamental drills to establish a strong
              base, applying the knowledge during game situations, combining
              ideas from multiple drills to form tactics, and expanding their
              toolbox of skills through continuous training.
            </p>

            <p>
              Joe Wagner presides as the Chief Hockey Rat. He is a premier
              hockey instructor with over 20 years of experience and served as
              the head coach of the 2020-2021 Mercer Chiefs Midget U16 American
              AAA Team.
            </p>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default AboutPage

export const Head: HeadFC = () => {
  return (
    <>
      <SEO title="About Us" pathname="/about" />
      <html lang="en-US" />
      <body className={bodyStyle} />
    </>
  )
}
