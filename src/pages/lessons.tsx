import * as React from "react"

const LessonsPage = () => {
  return (
    <main>
      <h1>Lessons</h1>

      <p>
        To experience the R.A.T.S. Hockey Training System, please view our
        available lessons below.
      </p>

      <p>
        Lessons are held at{" "}
        <a
          href="https://ice-land.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Ice Land Rink
        </a>{" "}
        in Hamilton Township, NJ. Please contact me regarding availability or if
        lessons at other facilities are desired.
      </p>

      <h1>Sample Lessons</h1>
    </main>
  )
}

export default LessonsPage

export const Head = () => <title>Lessons</title>
