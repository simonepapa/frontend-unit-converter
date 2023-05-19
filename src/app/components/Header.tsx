"use client"

import ActiveLink from './ActiveLink'
import { Navbar } from "flowbite-react"

const Header = () => {
  return (
    <Navbar fluid={true} rounded={true} className="bg-slate-100 md:flex md:justify-center">
      <Navbar.Toggle />
      <Navbar.Collapse>
        <ActiveLink href="/" style="text-lg">
          Home
        </ActiveLink>
        <ActiveLink href="/px-to-rem" style="text-lg">PX to REM</ActiveLink>
        <ActiveLink href="/px-to-em" style="text-lg">PX to EM</ActiveLink>
        <ActiveLink href="/px-to-vw" style="text-lg">PX to VW</ActiveLink>
        <ActiveLink href="/px-to-percentage" style="text-lg">PX to %</ActiveLink>
      </Navbar.Collapse>
    </Navbar>
  )
}
export default Header
