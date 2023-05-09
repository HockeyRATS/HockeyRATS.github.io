import * as React from "react"
import { section } from "./layout.module.css"

export interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <section className={section}>
      {/* <NavBar /> */}

      {props.children}
    </section>
  )
}

export default Layout
