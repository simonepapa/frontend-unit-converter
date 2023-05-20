"use client"

const css = require("css")
import { useState } from "react"
import Description from "../components/Description"
import { Button } from "flowbite-react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { checkIfDecimal } from "../utils/calcHelper"

const PxToVWPage = () => {
  const [baseUnit, setBaseUnit] = useState(
    Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  )
  const [unitOne, setUnitOne] = useState("")
  const [unitTwo, setUnitTwo] = useState("")
  const [CSS, setCSS] = useState("")
  const [convertedCSS, setConvertedCSS] = useState("")

  const onChangeBase = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBaseUnit(parseInt(e.target.value))
    // Proportionally change the value of the first unit
    const unitOneValue = checkIfDecimal(
      (parseFloat(unitOne) * parseFloat(e.target.value.replace(/,/g, "."))) /
        baseUnit
    )
    unitOne !== "" ? setUnitOne(unitOneValue.toString()) : ""
  }
  const onChangeOne = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUnitOne(e.target.value)
    if (!isNaN(parseFloat(e.target.value.replace(/,/g, ".")))) {
      const val = checkIfDecimal(
        (parseFloat(e.target.value.replace(/,/g, ".")) / baseUnit) * 100
      )
      setUnitTwo(val.toString())
    } else {
      setUnitTwo("")
    }
  }
  const onChangeTwo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUnitTwo(e.target.value)
    if (!isNaN(parseFloat(e.target.value.replace(/,/g, ".")))) {
      const val = checkIfDecimal(
        (parseFloat(e.target.value.replace(/,/g, ".")) * baseUnit) / 100
      )
      setUnitOne(val.toString())
    } else {
      setUnitOne("")
    }
  }
  const readCSS = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCSS(e.target.value)
  }
  const convertCSS = () => {
    try {
      const parsedCSS = css.parse(CSS)
      parsedCSS.stylesheet.rules.forEach((rule: any = {}) => {
        // For each rule, apply it only if it includes "px" and is not one of the three listed
        rule.declarations.forEach((declaration: any = {}) => {
          if (
            declaration.property !== "border-radius" &&
            declaration.property !== "border" &&
            declaration.property !== "box-shadow" &&
            declaration.value.includes("px")
          ) {
            // Get array of substrings in order to correctly convert shorthand properties like padding, margin ecc
            const arrayOfSubstrings = declaration.value.match(/\b(\w+)\b/g)
            // For each substring, if it ends with px then convert it to vw
            for (let i = 0; i < arrayOfSubstrings.length; i++) {
              if (arrayOfSubstrings[i].endsWith("px")) {
                const split = arrayOfSubstrings[i].match(
                  /^([-.\d]+(?:\.\d+)?)(.*)$/
                )
                split[1] = ((split[1] / baseUnit) * 100).toFixed(3)
                arrayOfSubstrings[i] = split[1].trim() + "vw"
              }
            }
            // Convert the array of strings back to a single string
            declaration.value = arrayOfSubstrings.join(" ")
          }
        })
      })
      setConvertedCSS(css.stringify(parsedCSS))
    } catch (error) {
      toast.error("Invalid CSS. Check for errors.")
    }
  }
  const copyToClipboard = () => {
    navigator.clipboard.writeText(convertedCSS)
    toast.success("Copied to clipboard")
  }

  return (
    <div>
      <ToastContainer />
      <Description
        title="PX to VW Converter"
        description="VW (Viewport Width) is a CSS unite relative to 1% of the width of the viewport."
      />
      <div className="flex flex-col items-center mt-5">
        <div>
          <div className="flex items-center mb-4">
            <label className="font-bold" htmlFor="baseUnit">
              Viewport width (PX):
            </label>
            <input
              id="baseUnit"
              name="baseUnit"
              type="number"
              min="1"
              value={baseUnit}
              onChange={onChangeBase}
              className="block w-16 border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 text-lg text-center p-0 ms-2"
            />
            <Button
              size="xs"
              onClick={() => {
                setBaseUnit(
                  Math.max(
                    document.documentElement.clientWidth || 0,
                    window.innerWidth || 0
                  )
                )
              }}
              className="ms-2"
            >
              Get current viewport
            </Button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="w-full md:w-3/6 max-w-xs relative mb-8 md:mb-0 md:me-12">
            <label className="block font-bold mb-1" htmlFor="unitOne">
              PX
            </label>
            <input
              id="unitOne"
              name="unitOne"
              type="text"
              onChange={onChangeOne}
              value={unitOne}
              className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-lg text-center py-4"
            />
            <span className="unit-label absolute">PX</span>
          </div>
          <div className="w-full md:w-3/6 max-w-xs relative">
            <label className="block font-bold mb-1" htmlFor="unitTwo">
              VW
            </label>
            <input
              id="unitTwo"
              name="unitTwo"
              type="text"
              onChange={onChangeTwo}
              value={unitTwo}
              className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-lg text-center py-4"
            />
            <span className="unit-label absolute">VW</span>
          </div>
        </div>
      </div>
      <div className="mt-10 mb-8 w-fit">
        <h2 className="text-xl font-bold">Whole code converter</h2>
        <p className="max-w-3xl mt-1 mb-2">
          Paste your code here to convert all the properties' units from PX to
          VW (note that <i>box-shadow</i> and <i>border</i> property remain
          unchanged)
        </p>
        <textarea
          id="converter"
          name="converter"
          value={CSS}
          onChange={readCSS}
          className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-lg p-4 max-w-3xl w-full"
          style={{ height: "200px" }}
        />
        <Button onClick={convertCSS} className="mt-4 ms-auto">
          CONVERT
        </Button>
        <textarea
          id="converterResult"
          name="converterResult"
          value={convertedCSS}
          readOnly
          className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-200 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-lg p-4 max-w-3xl w-full mt-8"
          style={{ height: "200px", resize: "none" }}
        />
        <Button
          onClick={() => {
            copyToClipboard()
          }}
          className="mt-4 ms-auto"
        >
          Copy to clipboard
        </Button>
      </div>
    </div>
  )
}
export default PxToVWPage
