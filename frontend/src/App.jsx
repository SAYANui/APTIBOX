import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "./components/ui/button"

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <nav>
        <ModeToggle />
      </nav>
    </ThemeProvider>
  )
}

export default App
