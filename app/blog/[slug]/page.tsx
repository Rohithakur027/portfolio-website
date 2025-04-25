import type { Metadata } from "next"
import { blogPosts } from "@/components/blog-section"
import { notFound } from "next/navigation"
import BlogPostPageClient from "./BlogPostPageClient"

type BlogPostParams = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostParams): Promise<Metadata> {
  const post = blogPosts.find((post) => post.id === params.slug)

  if (!post) {
    return {
      title: "Blog Post Not Found",
    }
  }

  return {
    title: `${post.title} | Rohit Thakur's Blog`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: BlogPostParams) {
  const post = blogPosts.find((post) => post.id === params.slug)

  if (!post) {
    notFound()
  }

  return <BlogPostPageClient params={params} />
}
