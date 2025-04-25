// import type { Metadata } from "next"
// import Link from "next/link"
// import Image from "next/image"
// import { Card, CardContent, CardFooter } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { ArrowRight, Calendar, ArrowLeft } from "lucide-react"
// import { blogPosts } from "@/components/blog-section"

// export const metadata: Metadata = {
//   title: "Blog | Rohit Thakur",
//   description: "Read articles and insights about web development, programming, and technology.",
// }

// export default function BlogPage() {
//   return (
//     <div className="pt-24 pb-16">
//       <div className="section-container">
//         <div className="mb-12">
//           <div className="flex items-center gap-2 mb-6">
//             <Button asChild variant="ghost" size="sm" className="p-0 h-auto">
//               <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
//                 <ArrowLeft className="h-4 w-4" /> Back to Home
//               </Link>
//             </Button>
//           </div>
//           <h1 className="text-4xl font-bold mb-4">Blog & Insights</h1>
//           <p className="text-xl text-muted-foreground">
//             Thoughts, tutorials, and insights about web development and technology.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {blogPosts.map((post, index) => (
//             <Card key={index} className="h-full overflow-hidden hover:shadow-lg transition-all">
//               <div className="relative h-48 overflow-hidden">
//                 <Image
//                   src={post.image || "/placeholder.svg"}
//                   alt={post.title}
//                   fill
//                   className="object-cover transition-transform hover:scale-105"
//                 />
//               </div>
//               <CardContent className="p-6">
//                 <div className="flex items-center justify-between text-muted-foreground mb-2">
//                   <div className="flex items-center gap-2">
//                     <Calendar className="h-4 w-4" />
//                     <span className="text-sm">{post.date}</span>
//                   </div>
//                   <span className="text-sm">{post.readTime}</span>
//                 </div>
//                 <h3 className="text-xl font-bold mb-2">{post.title}</h3>
//                 <p className="text-muted-foreground">{post.excerpt}</p>
//               </CardContent>
//               <CardFooter className="p-6 pt-0">
//                 <Button asChild variant="ghost" className="p-0 h-auto">
//                   <Link href={`/blog/${post.id}`} className="flex items-center gap-2 text-primary">
//                     Read More <ArrowRight className="h-4 w-4" />
//                   </Link>
//                 </Button>
//               </CardFooter>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

import React from "react";

function page() {
  return <div>hello blog</div>;
}

export default page;
