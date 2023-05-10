import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"

const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <main>
        <h1>About Us</h1>

        <blockquote>
          <p>
            <strong>Hockey rat</strong>, <em>noun</em>
          </p>
          <p>Someone whose life revolves around being a hockey player.</p>
        </blockquote>

        <hr />

        <p>
          HockeyRATS is home to players who are fanatical about improving their
          game. We know the early morning grind leads to late-night victories.
        </p>

        <p>
          We focus on fundamental drills that benefit modern hockey players.
          That's why we pioneered the <span>R.A.T.S.</span> Hockey Training
          System:
        </p>

        <div>
          <div>
            <h3>
              <span>R</span>epetition
            </h3>
            <h3>
              <span>A</span>pplication
            </h3>
            <h3>
              <span>T</span>actics
            </h3>
            <h3>
              <span>S</span>kills
            </h3>
          </div>
        </div>

        <p>
          We believe players from the Mini Mite to Senior levels can quickly
          improve by repeating fundamental drills to establish a strong base,
          applying the knowledge during game situations, combining ideas from
          multiple drills to form tactics, and expanding their toolbox of skills
          through continuous training.
        </p>

        <p>
          Joe Wagner presides as the Chief Hockey Rat. He is a premier hockey
          instructor with over 20 years of experience and served as the head
          coach of the 2020-2021 Mercer Chiefs Midget U16 American AAA Team.
        </p>
      </main>
    </Layout>
  )
}

export default AboutPage

export const Head: HeadFC = () => {
  return (
    <>
      <html lang="en-US" />
      <title>About Us</title>
    </>
  )
}
