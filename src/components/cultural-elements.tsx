import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export function PhilippineCulturalElement() {
  const { t } = useLanguage()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const images = [
    { src: "/christmas-celebrations.jpg", alt: "Filipino celebration", title: "Christmas Celebrations" },
    { src: "/australian-treats.jpg", alt: "Filipino food", title: "Filipino Treats" },
    { src: "/family-connections.jpg", alt: "Family reunion", title: "Family Connections" },
    { src: "/aus-pinoy-community.jpg", alt: "Australian Filipino community", title: "Aus-Pinoy Community" }
  ]

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">{t("cultural.title")}</h2>
            <p className="text-gray-600 mb-6">{t("cultural.description")}</p>
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="inline-block bg-philippine-blue/10 text-philippine-blue px-3 py-1 rounded-full text-sm">
                {t("cultural.balikbayan")}
              </span>
              <span className="inline-block bg-australian-green/10 text-australian-green px-3 py-1 rounded-full text-sm">
                {t("cultural.padala")}
              </span>
              <span className="inline-block bg-australian-gold/10 text-philippine-blue px-3 py-1 rounded-full text-sm">
                {t("cultural.pasalubong")}
              </span>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              {images.map((image, index) => (
                <Card key={index} className={`card-hover transition-opacity duration-300 ${currentImageIndex === index ? 'opacity-100' : 'opacity-70'}`}>
                  <CardContent className="p-4">
                    <div className="aspect-square relative mb-2">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    <p className="text-sm text-center font-medium">{image.title}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-center mt-4 gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentImageIndex
                      ? "bg-philippine-blue scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

