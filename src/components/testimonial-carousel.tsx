"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

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

  // Create an extended array that includes the first testimonial at the end
  const extendedTestimonials = [...testimonials, testimonials[0]]

  const next = () => {
    if (current === testimonials.length - 1) {
      // When we reach the last original item, smoothly transition to the clone
      setCurrent(current + 1)
      // After the transition, instantly jump back to the first item without animation
      setTimeout(() => {
        document.querySelector('.testimonial-slider')?.classList.add('no-transition')
        setCurrent(0)
        // Re-enable transitions after jumping back
        setTimeout(() => {
          document.querySelector('.testimonial-slider')?.classList.remove('no-transition')
        }, 50)
      }, 500)
    } else {
      setCurrent(current + 1)
    }
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
      <style jsx>{`
        .no-transition {
          transition: none !important;
        }
      `}</style>
      <div className="overflow-hidden">
        <div
          className="testimonial-slider flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          {extendedTestimonials.map((testimonial, index) => (
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
      <div className="flex justify-center mt-4 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              current === index
                ? "bg-philippine-blue scale-125"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

