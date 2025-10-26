import { ThemeProvider } from "@/components/theme-provider"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import hero from "./assets/hero.jpg"

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <section className="container mx-auto px-4 py-24 sm:py-32">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

          {/* Column 1: Text Content & CTA */}
          <div className="flex flex-col space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Discover Your Potential.
              <br />
              Ace Your Next Test.
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Practice realistic aptitude tests designed to help you succeed. 
              Get instant feedback, detailed solutions, and track your progress.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="w-full sm:w-auto">
                Start a Free Test
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Browse All Tests
              </Button>
            </div>
          </div>

          {/* Column 2: Image/Visual */}
          <div className="flex items-center justify-center">
            {/* Hero image (imported) */}
            <div className="flex h-80 w-full max-w-md items-center justify-center rounded-xl bg-muted">
              <img src={hero} alt="Hero" className="h-80 w-full max-w-md rounded-xl object-cover" />
            </div>
          </div>
        </div>
      </section>
    </ThemeProvider>
  )
}

export default App
