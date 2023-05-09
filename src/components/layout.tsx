import * as React from "react"

export interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <section>
      {/* <NavBar /> */}

      {props.children}
    </section>
  )
}

export default Layout
