import Link from "next/link"

export default function Home() {
  return (
    <div className="">
      <ul>
        <li className="flex flex-col md:flex-row md:items-center mb-2">
          <Link href="/px-to-rem" className="text-lg">
            <span className="font-bold underline hover:no-underline">PX to REM</span>: from PX to REM using root font-size
          </Link>
        </li>
        <li className="flex flex-col md:flex-row md:items-center mb-2">
          <Link href="/px-to-em" className="text-lg">
            <span className="font-bold underline hover:no-underline">PX to EM</span>: from PX to EM using parent font-size
          </Link>
        </li>
        <li className="flex flex-col md:flex-row md:items-center mb-2">
          <Link href="/px-to-vw" className="text-lg">
            <span className="font-bold underline hover:no-underline">PX to VW</span>: from PX to VW using viewport width
          </Link>
        </li>
        <li className="flex flex-col md:flex-row md:items-center mb-2">
          <Link href="/px-to-percentage" className="text-lg">
            <span className="font-bold underline hover:no-underline">PX to Percentage</span>: from PX to Percentage using parent width
          </Link>
        </li>
      </ul>
    </div>
  )
}
