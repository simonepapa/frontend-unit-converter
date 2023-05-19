"use client"

import { useState } from "react"
import Description from "../components/Description"

const PxToREMPage = () => {
  const [baseUnit, setBaseUnit] = useState(16)
  const [unitOne, setUnitOne] = useState("16")
  const [unitTwo, setUnitTwo] = useState("1")

  const onChangeBase = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBaseUnit(parseInt(e.target.value))
    setUnitOne("")
    setUnitTwo("")
  }
  const onChangeOne = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUnitOne(e.target.value)
    if (!isNaN(parseFloat(e.target.value.replace(/,/g, ".")))) {
      const val = (
        parseFloat(e.target.value.replace(/,/g, ".")) / baseUnit
      ).toFixed(3)
      setUnitTwo(val.toString())
    } else {
      setUnitTwo("")
    }
  }
  const onChangeTwo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUnitTwo(e.target.value)
    if (!isNaN(parseFloat(e.target.value.replace(/,/g, ".")))) {
      const val = (
        parseFloat(e.target.value.replace(/,/g, ".")) * baseUnit
      ).toFixed(3)
      setUnitOne(val.toString())
    } else {
      setUnitOne("")
    }
  }

  return (
    <div>
      <Description
        title="PX to REM Converter"
        description="REM (Root EM) is a CSS unite relative to the font size of the root element. By default, 1rem equals 16px."
      />
      <div className="flex flex-col items-center mt-5">
        <div>
          <div className="flex items-center mb-4">
            <label className="font-bold" htmlFor="baseUnit">
              Root font-size: (PX):
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
              REM
            </label>
            <input
              id="unitTwo"
              name="unitTwo"
              type="text"
              onChange={onChangeTwo}
              value={unitTwo}
              className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-lg text-center py-4"
            />
            <span className="unit-label absolute">REM</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default PxToREMPage
