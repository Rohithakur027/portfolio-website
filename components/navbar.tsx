"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"
import { usePathname } from "next/navigation"

const navItems = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Experience", href: "/#experience" },
  // { name: "Blog", href: "/#blog" },
  { name: "Contact", href: "/#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className="font-bold text-xl">
              <span className="gradient-text">Rohit Thakur</span>
            </Link>
          </div>

          <div className="-mr-2 -my-2 md:hidden flex items-center">
            <ModeToggle />
            <Button
              variant="ghost"
              className="rounded-md p-2 inline-flex items-center justify-center"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </Button>
          </div>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              // For blog link, check if we're on a blog post page
              const href = item.name === "Blog" && pathname.startsWith("/blog/") ? "/blog" : item.href

              return (
                <Link
                  key={item.name}
                  href={href}
                  className="text-base font-medium hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              )
            })}
          </nav>

          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-2">
            <ModeToggle />
            <Button asChild>
              <Link href="/#contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto" },
          closed: { opacity: 0, height: 0 },
        }}
        className="md:hidden overflow-hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background shadow-lg rounded-b-lg">
          {navItems.map((item) => {
            // For blog link, check if we're on a blog post page
            const href = item.name === "Blog" && pathname.startsWith("/blog/") ? "/blog" : item.href

            return (
              <Link
                key={item.name}
                href={href}
                className="block px-3 py-2 rounded-md text-base font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            )
          })}
          <div className="pt-4 pb-3 border-t border-border">
            <Button asChild className="w-full" onClick={() => setIsOpen(false)}>
              <Link href="/#contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.header>
  )
}
