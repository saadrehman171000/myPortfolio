import type React from "react"
import "./globals.css"
import { Inter, Sora, Orbitron } from "next/font/google"
import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"
import CustomCursor from "@/components/CustomCursor/CustomCursor"
import type { Metadata } from "next"
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
})

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Saad Rehman | Full Stack Developer & Data Scientist",
  description: "Portfolio of Saad Rehman - Full Stack Developer, Data Scientist, and AI Enthusiast",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} ${orbitron.variable}`} suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `,
          }}
        />
      </head>
      <body>
        {/* Only render CustomCursor on client-side */}
        <CustomCursor />
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}


import './globals.css'