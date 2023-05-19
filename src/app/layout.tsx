import "./globals.css"
import { Roboto } from "next/font/google"
import Header from "./components/Header"

const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] })

export const metadata = {
  title: "Frontend Unit Converter",
  description: "A tool to convert a frontend unit into another",
  keywords: "frontend, unit, converter, pixel, centimetres, viewports, rem, em",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-slate-100`}>
        <Header />
        <main className="flex justify-center">{children}</main>
      </body>
    </html>
  )
}
