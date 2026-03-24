export default function HomeBG() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* This renders ONLY your local image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/assets/destination/background-destination-desktop.jpg')" 
        }}
      />
      
      {/* We keep this one very faint overlay just so white text remains readable 
          against bright stars, but you can delete this div if you want it 100% raw */}
      <div className="absolute inset-0 bg-black/10" />
    </div>
  )
}