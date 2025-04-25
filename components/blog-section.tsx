"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const blogPosts = [
  {
    id: "building-scalable-react-applications",
    title: "Building Scalable React Applications",
    date: "April 15, 2023",
    excerpt:
      "Learn how to structure your React applications for scalability and maintainability as they grow in complexity.",
    image: "/placeholder.svg?height=300&width=500",
    readTime: "8 min read",
  },
  {
    id: "power-of-server-components-nextjs",
    title: "The Power of Server Components in Next.js",
    date: "March 22, 2023",
    excerpt:
      "Explore how Server Components in Next.js can improve performance and simplify your application architecture.",
    image: "/placeholder.svg?height=300&width=500",
    readTime: "6 min read",
  },
  {
    id: "optimizing-database-queries",
    title: "Optimizing Database Queries for Web Applications",
    date: "February 10, 2023",
    excerpt: "Practical tips and techniques for improving database performance in your web applications.",
    image: "/placeholder.svg?height=300&width=500",
    readTime: "10 min read",
  },
]

export default function BlogSection() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="blog" className="py-16 md:py-24 bg-muted/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Blog & Insights</h2>
          <p className="section-subtitle">Sharing my knowledge and experiences in web development</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
        >
          {blogPosts.map((post, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full overflow-hidden hover:shadow-lg transition-all">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between text-muted-foreground mb-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{post.date}</span>
                    </div>
                    <span className="text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button asChild variant="ghost" className="p-0 h-auto">
                    <Link href={`/blog/${post.id}`} className="flex items-center gap-2 text-primary">
                      Read More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/blog">View All Posts</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
