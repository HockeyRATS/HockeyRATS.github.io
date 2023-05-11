import * as React from "react"
import NavbarTop from "../components/navbartop"
import { section } from "./layout.module.css"

export interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <section className={section}>
      <NavbarTop />

      {props.children}
    </section>
  )
}

export default Layout
