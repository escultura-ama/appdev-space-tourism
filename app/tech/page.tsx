import { Button } from "@/components/ui/button"
import backgroundImage from "@/public/technology-assets/background-technology-desktop.jpg"
import backgroundImageTablet from "@/public/technology-assets/background-technology-tablet.jpg"
import backgroundImageMobile from "@/public/technology-assets/background-technology-mobile.jpg"

export default function Tech() {
  return (
    <>
      {/* Mobile - max-width 420px */}
      <div 
        className="flex md:hidden min-h-svh p-6"
        style={{
          backgroundImage: `url(${backgroundImageMobile.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          maxWidth: '420px'
        }}
      >
        <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
          <div>
            <h1 className="font-medium">Project readyxxx!</h1>
            <p>You may now add components and start building.</p>
            <p>We&apos;ve already added the button component for you.</p>
            <Button className="mt-2">Button</Button>
          </div>
          <div className="font-mono text-xs text-muted-foreground">
            (Press <kbd>d</kbd> to toggle dark mode)
          </div>
        </div>
      </div>

      {/* Tablet - max-width 769px */}
      <div 
        className="hidden md:flex lg:hidden min-h-svh p-6"
        style={{
          backgroundImage: `url(${backgroundImageTablet.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          maxWidth: '769px'
        }}
      >
        <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
          <div>
            <h1 className="font-medium">Project readyxxxx!</h1>
            <p>You may now add components and start building.</p>
            <p>We&apos;ve already added the button component for you.</p>
            <Button className="mt-2">Button</Button>
          </div>
          <div className="font-mono text-xs text-muted-foreground">
            (Press <kbd>d</kbd> to toggle dark mode)
          </div>
        </div>
      </div>

      {/* Desktop - no max-width */}
      <div 
        className="hidden lg:flex min-h-svh p-6"
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
          <div>
            <h1 className="font-medium">Project ready!xxxxx</h1>
            <p>You may now add components and start building.</p>
            <p>We&apos;ve already added the button component for you.</p>
            <Button className="mt-2">Button</Button>
          </div>
          <div className="font-mono text-xs text-muted-foreground">
            (Press <kbd>d</kbd> to toggle dark mode)
          </div>
        </div>
      </div>
    </>
  )
}
