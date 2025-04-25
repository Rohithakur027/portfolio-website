import Link from "next/link"
import { Github, Linkedin, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, url: "https://github.com", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, url: "https://linkedin.com", label: "LinkedIn" },
    { icon: <Twitter className="h-5 w-5" />, url: "https://twitter.com", label: "Twitter" },
    { icon: <Instagram className="h-5 w-5" />, url: "https://instagram.com", label: "Instagram" },
  ]

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <footer className="bg-muted/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="font-bold text-xl">
              <span className="gradient-text">Rohit Thakur</span>
            </Link>
            <p className="mt-4 text-muted-foreground">
              Full-Stack Engineer building modern, scalable web applications with a passion for creating impactful
              products.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <p className="text-muted-foreground">
              Feel free to reach out if you have any questions or want to work together.
            </p>
            <p className="mt-4">
              <a href="mailto:rohit@example.com" className="text-primary hover:underline">
                rohit@example.com
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p>© {currentYear} Rohit Thakur. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
