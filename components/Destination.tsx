import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const destinations = [
  {
    id: "moon",
    name: "MOON",
    description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 KM",
    travelTime: "3 DAYS",
    image: "/assets/destination/image-moon.webp" 
  },
  {
    id: "mars",
    name: "MARS",
    description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 MIL. KM",
    travelTime: "9 MONTHS",
    image: "/assets/destination/image-mars.webp"
  }

];

export default function DestinationPage() {
  return (
    <div className="min-h-screen bg-[#0B0D17] text-white overflow-hidden px-6 py-24 md:px-24 lg:pt-40">

      <h2 className="text-center md:text-left font-barlow-condensed text-xl md:text-2xl tracking-[4.75px] uppercase mb-12">
        <span className="text-white/25 font-bold mr-4">01</span> Pick your destination
      </h2>

      <Tabs defaultValue="moon" className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
    
          <div className="flex justify-center animate-spin-slow">
            {destinations.map((dest) => (
              <TabsContent key={dest.id} value={dest.id} className="mt-0">
                <img src={dest.image} alt={dest.name} className="w-[42.5] md:w-[7.5] lg:w-[111.25]" />
              </TabsContent>
            ))}
          </div>

  
          <div className="flex flex-col items-center lg:items-start max-w-lg mx-auto lg:mx-0">
            <TabsList className="bg-transparent h-auto p-0 gap-8 mb-8">
              {destinations.map((dest) => (
                <TabsTrigger 
                  key={dest.id}
                  value={dest.id} 
                  className="bg-transparent px-0 pb-3 rounded-none border-b-2 border-transparent data-[state=active]:border-white data-[state=active]:bg-transparent text-[#D0D6F9] hover:border-white/50 transition-all uppercase tracking-[2.7px]"
                >
                  {dest.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {destinations.map((dest) => (
              <TabsContent key={dest.id} value={dest.id} className="mt-0 text-center lg:text-left">
                <h1 className="text-7xl md:text-[100px] font-bellefair uppercase mb-4">
                  {dest.name}
                </h1>
                <p className="text-[#D0D6F9] font-barlow leading-relaxed text-lg mb-12 border-b border-white/10 pb-12">
                  {dest.description}
                </p>

                <div className="flex flex-col md:flex-row gap-8 md:gap-20">
                  <div className="flex flex-col gap-3">
                    <span className="text-sm font-barlow-condensed tracking-[2.35px] text-[#D0D6F9]">AVG. DISTANCE</span>
                    <span className="text-3xl font-bellefair uppercase">{dest.distance}</span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <span className="text-sm font-barlow-condensed tracking-[2.35px] text-[#D0D6F9]">EST. TRAVEL TIME</span>
                    <span className="text-3xl font-bellefair uppercase">{dest.travelTime}</span>
                  </div>
                </div>
              </TabsContent>
            ))}
          </div>
        </div>
      </Tabs>
    </div>
  )
}