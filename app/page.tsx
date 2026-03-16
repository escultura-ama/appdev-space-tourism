import { Button } from "@/components/ui/button"
import { Nav } from "@/components/Nav"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col p-6 bg-[url('/background-home-mobile.jpg')] sm:bg-[url('/background-home-tablet.jpg')] lg:bg-[url('/background-home-desktop.jpg')] bg-cover bg-center bg-no-repeat">
      <Nav />

      <div className="flex flex-1 items-center justify-center">
        <div>
          <div className="hero-content">
            <h1 className="text-primaryText tracking-wider md:text-xl lg:text-3xl lg:text-widest">"SO, YOU WANT TO TRAVEL TO"</h1>
            <br />
            <p>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
            <p>We&apos;ve already added the button component for you.</p>
            <Button className="mt-2">Button</Button>
          </div>
          <div className="font-mono text-xs text-muted-foreground">
            (Press <kbd>d</kbd> to toggle dark mode)
          </div>
        </div>
      </div>
    </div>
  )
}
