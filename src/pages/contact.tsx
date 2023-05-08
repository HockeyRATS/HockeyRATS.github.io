import * as React from "react"

const ContactPage = () => {
  return (
    <main>
      <h1>Contact</h1>

      <div>
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
      </div>
    </main>
  )
}

export default ContactPage

export const Head = () => <title>Contact</title>