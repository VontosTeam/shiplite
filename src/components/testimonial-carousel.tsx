"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Sydney",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "I've been using ShipLite to send care packages to my family in Manila for over a year now. Their service is reliable and the prices are much better than what I was paying before!",
  },
  {
    name: "Michael Chen",
    location: "Melbourne",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "As a small business owner shipping products to the Philippines, ShipLite has been a game-changer. Their customs clearance service saves me so much time and hassle.",
  },
  {
    name: "Emma Rodriguez",
    location: "Brisbane",
    image: "/placeholder.svg?height=80&width=80",
    rating: 4,
    text: "I was worried about sending valuable items to my relatives in Cebu, but ShipLite's tracking system gave me peace of mind throughout the entire shipping process.",
  },
  {
    name: "David Wilson",
    location: "Perth",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "The door-to-door service is fantastic! My elderly parents in the Philippines don't have to go anywhere to receive the packages I send them.",
  },
]

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={80}
                        height={80}
                        className="object-cover"
                      />
                    </div>
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none"
        onMouseEnter={() => setAutoplay(false)}
        onMouseLeave={() => setAutoplay(true)}
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-6 w-6 text-blue-600" />
      </button>

      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none"
        onMouseEnter={() => setAutoplay(false)}
        onMouseLeave={() => setAutoplay(true)}
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-6 w-6 text-blue-600" />
      </button>

      <div className="flex justify-center mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`mx-1 w-3 h-3 rounded-full ${current === index ? "bg-blue-600" : "bg-gray-300"}`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

