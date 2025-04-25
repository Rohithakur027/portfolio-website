import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | Rohit Thakur",
  description: "Articles and insights about web development, programming, and technology.",
}

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
