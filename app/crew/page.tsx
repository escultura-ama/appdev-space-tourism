import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Image from "next/image"

const crew = [
  {
    name: "Douglas Hurley",
    src: "/assets/crew/image-douglas-hurley.webp",
  },
  {
    name: "Mark Shuttleworth",
    src: "/assets/crew/image-mark-shuttleworth.webp",
  },
  {
    name: "Victor Glover",
    src: "/assets/crew/image-victor-glover.webp",
  },
  {
    name: "Anousheh Ansari",
    src: "/assets/crew/image-anousheh-ansari.webp",
  },
]

export default function Page() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-4 py-10">
      <Image
        src="/assets/crew/background-crew-desktop.jpg"
        alt="Background"
        fill
        sizes="100vw"
        className="absolute inset-0 object-cover"
        priority
      />

      <div className="relative w-full max-w-10xl">
        <Carousel className="w-full">
          <CarouselContent className="gap-4">
            {crew.map((member) => (
              <CarouselItem key={member.name}>
                <div className="mx-auto w-full max-w-sm">
                  <Card className="bg-transparent border-0">
                    <CardContent className="bg-none relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={member.src}
                        alt={member.name}
                        fill
                        sizes="(min-width: 1024px) 720px, 100vw"
                        className="object-contain"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </main>
  )
}
