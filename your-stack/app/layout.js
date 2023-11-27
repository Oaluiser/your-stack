import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "yourstack",
  description: "showcase your stack",
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="bg-background"
    >
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
