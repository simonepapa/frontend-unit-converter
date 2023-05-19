"use client"

import ActiveLink from "./ActiveLink"
import { Navbar } from "flowbite-react"

const Header = () => {
  return (
    <Navbar fluid={true} rounded={true} className="navbar">
      <Navbar.Toggle />
      <Navbar.Collapse className="navbar-collapse">
        <li>
          <ActiveLink href="/" style="text-lg">
            Home
          </ActiveLink>
        </li>
        <li className="flex flex-col md:flex-row">
          <ActiveLink href="/px-to-rem" style="text-lg md:px-4">
            PX to REM
          </ActiveLink>
          <ActiveLink href="/px-to-em" style="text-lg md:px-4">
            PX to EM
          </ActiveLink>
          <ActiveLink href="/px-to-vw" style="text-lg md:px-4">
            PX to VW
          </ActiveLink>
          <ActiveLink href="/px-to-percentage" style="text-lg md:px-4 md:me-5">
            PX to %
          </ActiveLink>
        </li>
      </Navbar.Collapse>
    </Navbar>
  )
}
export default Header
