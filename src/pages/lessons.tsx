import * as React from "react"
import { Link } from "gatsby"
import type { HeadFC, PageProps } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import Container from "react-bootstrap/Container"
import Ratio from "react-bootstrap/Ratio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  bodyStyle,
  calendarRatioParentStyle,
  jumbotronStyle,
  jumbotronVideoStyle,
  videoRatioParentStyle,
} from "./lessons.module.css"

const videoPath: string =
  require("../videos/HockeyRATS_lessons_jumbotron.mp4").default

const LessonsPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      {/* Jumbotron containing lessons video header */}
      <Container fluid className={jumbotronStyle}>
        <video
          playsInline
          muted
          autoPlay
          loop
          poster="../images/HockeyRATS_lessons_jumbotron_poster.png"
          className={jumbotronVideoStyle}
        >
          <source src={videoPath} type="video/mp4" />
        </video>
      </Container>

      {/* Lessons Information */}
      <Container className="mt-5">
        <h1 className="display-4 text-center mb-5">Lessons</h1>

        <p className="pb-3">
          To experience the R.A.T.S. Hockey Training System, please view our
          available lessons below.
        </p>

        <p className="pb-3">
          Lessons are held at{" "}
          <OutboundLink
            href="https://ice-land.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Ice Land Rink
          </OutboundLink>{" "}
          in Hamilton Township, NJ. Please <Link to="/contact">contact me</Link>{" "}
          regarding availability or if lessons at other facilities are desired.
        </p>

        {/* Lessons Calendar from Google */}
        <Container className="d-flex justify-content-center d-md-none">
          <Container className={calendarRatioParentStyle}>
            <Ratio aspectRatio="4x3">
              <iframe
                className="border border-0"
                src="https://calendar.google.com/calendar/embed?height=300&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&showNav=1&showDate=1&showTitle=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&mode=WEEK&src=aG9ja2V5cmF0c29mZmljaWFsQGdtYWlsLmNvbQ&color=%23039BE5"
              ></iframe>
            </Ratio>
          </Container>
        </Container>

        <Container className="d-none d-md-flex justify-content-center d-lg-none">
          <Container className={calendarRatioParentStyle}>
            <Ratio aspectRatio="4x3">
              <iframe
                className="border border-0"
                src="https://calendar.google.com/calendar/embed?height=450&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&showNav=1&showDate=1&showTitle=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&src=aG9ja2V5cmF0c29mZmljaWFsQGdtYWlsLmNvbQ&color=%23039BE5"
              ></iframe>
            </Ratio>
          </Container>
        </Container>

        <Container className="d-none d-lg-flex justify-content-center d-xxl-none">
          <Container className={calendarRatioParentStyle}>
            <Ratio aspectRatio="4x3">
              <iframe
                className="border border-0"
                src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&showNav=1&showDate=1&showTitle=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&src=aG9ja2V5cmF0c29mZmljaWFsQGdtYWlsLmNvbQ&color=%23039BE5"
              ></iframe>
            </Ratio>
          </Container>
        </Container>

        <Container className="d-none d-xxl-flex justify-content-center">
          <Container className={calendarRatioParentStyle}>
            <Ratio aspectRatio="16x9">
              <iframe
                className="border border-0"
                src="https://calendar.google.com/calendar/embed?height=900&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&showNav=1&showDate=1&showTitle=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&src=aG9ja2V5cmF0c29mZmljaWFsQGdtYWlsLmNvbQ&color=%23039BE5"
              ></iframe>
            </Ratio>
          </Container>
        </Container>

        <h1 className="display-5 text-center mt-4 mb-5">Sample Lessons</h1>

        <Container className="d-flex justify-content-center mb-4">
          <Container className={videoRatioParentStyle}>
            <Ratio aspectRatio="16x9">
              <iframe
                src="https://www.youtube-nocookie.com/embed/p78VOFA6_CU"
                allowFullScreen
              ></iframe>
            </Ratio>
          </Container>
        </Container>

        <Container className="d-flex justify-content-center">
          <Container className={videoRatioParentStyle}>
            <Ratio aspectRatio="16x9">
              <iframe
                src="https://www.youtube-nocookie.com/embed/l5PLL66Pw9s"
                allowFullScreen
              ></iframe>
            </Ratio>
          </Container>
        </Container>
      </Container>
    </Layout>
  )
}

export default LessonsPage

export const Head: HeadFC = () => {
  return (
    <>
      <SEO title="Lessons" pathname="/lessons" />
      <html lang="en-US" />
      <body className={bodyStyle} />
    </>
  )
}
