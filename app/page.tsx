

 export default function Page() {
  return (
    <div className="bg-home-bg relative min-h-screen flex flex-col overflow-x-hidden">
      
      {/* Main Container */}
      <div className="flex-1 flex flex-col lg:flex-row items-center lg:items-end justify-between px-6 md:px-40 lg:px-36 pb-24 lg:pb-32 md:mb-16 md:ml-18 md:mr-18">
        
        {/* Left Content */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left w-full lg:max-w-[540px] mt-24 md:mt-48 lg:mt-10">
          <h1 className="font-barlow condensed,sans-serif text-primaryText tracking-wider md:text-xl lg:text-3xl lg:text-widest uppercase">
            So, you want to travel to
          </h1>
          
          <h2 className="font-bellefair text-6xl text-white text-[80px] md:text-[130px] lg:text-[175px] leading-[100px] md:leading-[150px] lg:leading-[172px] mt-6 mb-10 md:mb-12 md:text-9xl uppercase">
            Space
          </h2>
          
         <p className="font-barlow text-primaryText text-[20px] md:text-[20px] lg:text-[25px] leading-[25px] md:leading-[28px] lg:leading-[32px] md:mt-6 mx-auto lg:mx-0 max-w-[327px] md:max-w-[444px] lg:max-w-none wordSpacing-[3px] letterspacing-[5px]">
  Let’s face it; if you want to go to space, you might as well{" "}
  <span className="lg:whitespace-nowrap">
    genuinely go to outer
  </span>{" "}
  space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
</p>
        </div>

        {/* Right Button (Explore) */}
        <div className="flex md:ml-10  mt-20 md:mt-40 lg:mt-0 flex items-center justify-between">
          <button
            className="group relative w-40 h-40 md:w-64 md:h-64 lg:w-62 lg:h-62 rounded-full bg-white text-black text-[20px] md:text-[31px] font-bellefair uppercase tracking-[1.25px] md:tracking-[1px] transition-all duration-500 flex items-center justify-center cursor-pointer md:mr-5 md:mb-23"
          >
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-white/10 scale-100 group-hover:scale-150 transition-transform duration-500 ease-out"  />
            <span className="relative z-10">Explore</span>
          </button>
        </div>

      </div>
    </div>
  );
}