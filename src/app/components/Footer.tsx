"use client"

import { Footer } from "flowbite-react"
import { BsGithub } from "react-icons/bs"

const FooterComponent = () => {
  return (
    <Footer container={true} className="mt-5">
      <div className="w-full">
        <div className="w-full flex items-center justify-between">
          <Footer.Copyright by="Simone Papa" year={new Date().getFullYear()} />
          <div className="mt-4 flex space-x-6 mt-0 justify-center">
            <Footer.Icon href="https://github.com/simonepapa" target="_blank" icon={BsGithub} />
          </div>
        </div>
      </div>
    </Footer>
  )
}
export default FooterComponent
