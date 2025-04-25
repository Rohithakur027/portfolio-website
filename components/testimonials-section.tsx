"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"
import { useMobile } from "@/hooks/use-mobile"

const testimonials = [
  {
    name: "Alex Johnson",
    role: "CTO at TechStart",
    image: "/placeholder.svg?height=100&width=100",
    text: "Rohit is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills make him a valuable asset to any team.",
  },
  {
    name: "Sarah Williams",
    role: "Product Manager",
    image: "/placeholder.svg?height=100&width=100",
    text: "Working with Rohit was a pleasure. He not only implemented our requirements perfectly but also suggested improvements that enhanced the overall user experience.",
  },
  {
    name: "Michael Chen",
    role: "Startup Founder",
    image: "/placeholder.svg?height=100&width=100",
    text: "Rohit helped us build our MVP from scratch. His technical expertise and ability to understand business requirements made the development process smooth and efficient.",
  },
  {
    name: "Priya Sharma",
    role: "Senior Developer",
    image: "/placeholder.svg?height=100&width=100",
    text: "As a colleague, I've seen Rohit tackle complex problems with innovative solutions. His collaborative approach and willingness to share knowledge make him a great team player.",
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const isMobile = useMobile()

  const itemsPerPage = isMobile ? 1 : 2
  const totalPages = Math.ceil(testimonials.length / itemsPerPage)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalPages)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, totalPages])

  const handlePrev = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const handleNext = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev + 1) % totalPages)
  }

  const visibleTestimonials = testimonials.slice(current * itemsPerPage, (current + 1) * itemsPerPage)

  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Testimonials</h2>
          <p className="section-subtitle">What people say about working with me</p>
        </motion.div>

        <div className="mt-12 relative">
          <div className="flex flex-col md:flex-row gap-6">
            {visibleTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="flex-1"
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex items-center gap-4">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                      <Quote className="h-8 w-8 text-primary/20" />
                    </div>
                    <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-8 gap-2">
            <Button variant="outline" size="icon" onClick={handlePrev} aria-label="Previous testimonial">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <Button
                  key={index}
                  variant={current === index ? "default" : "outline"}
                  size="icon"
                  className="w-2 h-2 p-0 rounded-full"
                  onClick={() => {
                    setAutoplay(false)
                    setCurrent(index)
                  }}
                  aria-label={`Go to testimonial page ${index + 1}`}
                />
              ))}
            </div>
            <Button variant="outline" size="icon" onClick={handleNext} aria-label="Next testimonial">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
