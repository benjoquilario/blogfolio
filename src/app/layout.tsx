import { Metadata } from "next"

import "./globals.css"

import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
// import { MDXProvider } from "@mdx-js/react"
// import { useMDXComponents } from "@/mdx-components"
import { SpeedInsights } from "@vercel/speed-insights/next"

import { siteConfig } from "@/config/site"
import { Toaster } from "@/components/ui/toaster"
import Header from "@/components/header"
import Footer from "@/components/site-footer"
import { PersonJsonLd, WebsiteJsonLd } from "@/components/structured-data"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import ThemeProvider from "@/components/theme-provider"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  alternates: {
    canonical: "/",
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    "Benjo Quilario",
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Web Development",
    "Portfolio",
    "Blog",
    "Software Engineer",
    "Philippines",
    "TailwindCSS",
    "Full Stack Developer",
  ],
  authors: [
    {
      name: siteConfig.username,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.username,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/og.jpeg`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    site: "@iam_benjo",
    creator: "@iam_benjo",
    images: [`${siteConfig.url}/og.jpeg`],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/manifest.json",
  category: "technology",
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  // const components = useMDXComponents({})

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <PersonJsonLd />
        <WebsiteJsonLd />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiase min-h-screen`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="mx-auto max-w-4xl p-4">
            <Header />
            <main>{children}</main>
            {/* <ChatBot /> */}
            <Footer />
          </div>
          <Toaster />
          <TailwindIndicator />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
