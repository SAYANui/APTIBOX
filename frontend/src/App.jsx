import { ThemeProvider } from "@/components/theme-provider"
import { Routes, Route } from "react-router"

import Dashboard from "./pages/dashboard"
import Hero from "./pages/hero"
import Test from "./pages/test"

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
