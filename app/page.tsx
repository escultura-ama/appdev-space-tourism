import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="flex min-h-svh p-6">
      <div >
          <div className="px-8 items-center lg:items-start justify-center text-center flex flex-col lg:text-left">
             <h1 className="text-primaryText tracking-wider md:text-xl lg:text-3xl lg:text-widest">"SO, YOU WANT TO TRAVEL TO"</h1>
             <br></br>
          <p>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
          <p>We&apos;ve already added the button component for you.</p>
          <Button className="mt-2">Button</Button>
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          (Press <kbd>d</kbd> to toggle dark mode)
        </div>
      </div>
    </div>
  )
}
