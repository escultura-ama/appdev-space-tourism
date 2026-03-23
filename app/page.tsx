  import { Button } from "@/components/ui/button"
  import { Nav } from "@/components/Nav"

  export default function Page() {
    return (
      <div className="bg-home-bg relative min-h-screen flex flex-col">
        <Nav />

        <div className="flex-1 flex items-start pt-20 md:pt-50 justify-center px-6 md:px-10 lg:px-36 pb-0">
          {/* Left Content */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left w-full md:w-1/2 lg:w-auto md:mt-0">
            <h1 className="font-barlow text-primaryText font-normal hidden md:block" style={{ fontSize: '20px', lineHeight: '36px', letterSpacing: '1.5px' }}>
              SO, YOU WANT TO TRAVEL TO
            </h1>
            <h1 className="font-barlow text-primaryText font-normal md:hidden mb-4" style={{ fontSize: '20px', lineHeight: '36px', letterSpacing: '1.5px' }}>
              SO, YOU<br />
              WANT TO<br />
              TRAVEL TO
            </h1>
            <h2 
              className="font-bellefair font-normal text-white mt-4 md:mt-6 md:mb-12 lg:mt-0 -translate-x-[200px]md:-translate-x-[100px]"
              style={{ fontSize: '128px', lineHeight: '150px' }}
            >
              SPACE
            </h2>
            <p className="text-primaryText text-base barlow md:l-5 lg:text-xl -translate-x-10 md:-translate-x-3" style={{ fontSize: '16px', lineHeight: '25px', fontWeight: 400, length: '0.px' }}>
              Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!
            </p>
          </div>
            
          {/* Right Button - Desktop Only */}
          <div className="hidden lg:flex items-center justify-center w-1/2">
              
            <button
              className="ml-100 mt-50 w-60 h-60 rounded-full text-3xl font-normal tracking-wide bg-white text-black hover:bg-gray-200 active:bg-gray-300 transition-all duration-300 font-bellefair flex items-center justify-center shadow-lg hover:shadow-xl hover:cursor-pointer shrink-0"
            > 
              EXPLORE
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Button */}
        <div className="lg:hidden w-full flex justify-center pb-12 md:pb-50 ">
          <button 
            className=" w-40 h-40 md:w-56 md:h-56 rounded-full text-base md:text-3xl font-tighter tracking-normal bg-white text-black hover:bg-gray-200 active:bg-gray-300 transition-all duration-300 font-bellefair flex items-center justify-center shadow-lg shrink-0"
          >
            EXPLORE
          </button>
        </div>
      </div>
    )
  }
