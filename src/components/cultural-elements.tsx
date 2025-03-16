import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export function PhilippineCulturalElement() {
  const { t } = useLanguage()
  
  return (
    <div className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-montserrat font-bold text-philippine-blue mb-4">{t("cultural.title")}</h3>
            <p className="text-gray-700 mb-4">
              {t("cultural.description")}
            </p>
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
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <Card className="card-hover">
              <CardContent className="p-4">
                <div className="aspect-square relative mb-2">
                  <Image
                    src="/christmas-celebrations.jpg"
                    alt="Filipino celebration"
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <p className="text-sm text-center font-medium">Christmas Celebrations</p>
              </CardContent>
            </Card>
            <Card className="card-hover">
              <CardContent className="p-4">
                <div className="aspect-square relative mb-2">
                  <Image
                    src="/australian-treats.jpg"
                    alt="Filipino food"
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <p className="text-sm text-center font-medium">Filipino Treats</p>
              </CardContent>
            </Card>
            <Card className="card-hover">
              <CardContent className="p-4">
                <div className="aspect-square relative mb-2">
                  <Image
                    src="/family-connections.jpg"
                    alt="Family reunion"
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <p className="text-sm text-center font-medium">Family Connections</p>
              </CardContent>
            </Card>
            <Card className="card-hover">
              <CardContent className="p-4">
                <div className="aspect-square relative mb-2">
                  <Image
                    src="/aus-pinoy-community.jpg"
                    alt="Australian Filipino community"
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <p className="text-sm text-center font-medium">Aus-Pinoy Community</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

