import { ThemeProvider } from "@/components/theme-provider"
import { Routes, Route } from "react-router"

import Home from "./pages/home"
import Hero from "./pages/hero"
import Login from "./pages/login"
import Signup from "./pages/signup"

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Home />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
