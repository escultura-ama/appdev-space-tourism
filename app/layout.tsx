import { Bellefair, Barlow_Condensed, Barlow } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import HomeBG from "@/components/ui/HomeBG";
import { cn } from "@/lib/utils";


const fontSerif = Bellefair({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
});

const fontSansCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sans-condensed",
});

const fontSans = Barlow({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased dark", 
        fontSerif.variable,
        fontSansCondensed.variable,
        fontSans.variable
      )}
    >
      <body className="font-sans bg-background text-foreground min-h-screen">
        <ThemeProvider>
          <HomeBG /> 
          
          <main className="relative z-10 min-h-screen">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}