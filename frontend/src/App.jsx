import { ThemeProvider } from "@/components/theme-provider"
import { Routes, Route } from "react-router"

import Home from "./pages/home"
import Hero from "./pages/hero"

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/dashboard" element={<Home />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
