"use client"

import Description from "../components/Description"
import { TextInput } from "flowbite-react"
import { IoMdSwap } from "react-icons/io"

const PxToREMPage = () => {
  return (
    <div>
      <Description
        title="PX to REM Converter"
        description="REM (Root EM) is a CSS unite relative to the font size of the root element. By default, 1rem equals 16px."
      />
      <div className="flex flex-col md:flex-row justify-center items-center mt-5">
        <div className="w-full md:w-3/6 max-w-xs relative">
          <TextInput id="unitOne" type="number" min="0" className="unit-input" />
          <span className="unit-label absolute">PX</span>
        </div>
        <IoMdSwap className="my-4 md:my-0 md:mx-8 w-8 h-8"/>
        <div className="w-full md:w-3/6 max-w-xs relative">
          <TextInput id="unitTwo" type="number" min="0" className="unit-input" />
          <span className="unit-label absolute">REM</span>
        </div>
      </div>
    </div>
  )
}
export default PxToREMPage
