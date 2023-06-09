"use client"

import { useState } from "react"
import Description from "../components/Description"
import { checkIfDecimal } from "../utils/calcHelper"

const PxToPercentagePage = () => {
  const [baseUnit, setBaseUnit] = useState(1)
  const [unitOne, setUnitOne] = useState("")
  const [unitTwo, setUnitTwo] = useState("")

  const onChangeBase = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBaseUnit(parseInt(e.target.value))
    // Proportionally change the value of the first unit
    const unitOneValue = checkIfDecimal(parseFloat(unitOne) * parseFloat(e.target.value.replace(/,/g, ".")) / baseUnit)
    unitOne !== "" ? setUnitOne(unitOneValue.toString()) : ""
  }
  const onChangeOne = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUnitOne(e.target.value)
    if (!isNaN(parseFloat(e.target.value.replace(/,/g, ".")))) {
      const val = checkIfDecimal((
        parseFloat(e.target.value.replace(/,/g, ".")) / baseUnit * 100
      ))
      setUnitTwo(val.toString())
    } else {
      setUnitTwo("")
    }
  }
  const onChangeTwo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUnitTwo(e.target.value)
    if (!isNaN(parseFloat(e.target.value.replace(/,/g, ".")))) {
      const val = checkIfDecimal((
        parseFloat(e.target.value.replace(/,/g, ".")) / 100 * baseUnit
      ))
      setUnitOne(val.toString())
    } else {
      setUnitOne("")
    }
  }

  return (
    <div>
      <Description
        title="PX to % Converter"
        description="% (Percentage) is a CSS unite relative to the parent element."
      />
      <div className="flex flex-col items-center mt-5">
        <div>
          <div className="flex items-center mb-4">
            <label className="font-bold" htmlFor="baseUnit">
              Base unit (PX):
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
              %
            </label>
            <input
              id="unitTwo"
              name="unitTwo"
              type="text"
              onChange={onChangeTwo}
              value={unitTwo}
              className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-lg text-center py-4"
            />
            <span className="unit-label absolute">%</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default PxToPercentagePage
