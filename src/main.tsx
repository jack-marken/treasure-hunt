// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router"
import './index.css'
import App from './App.tsx'
import Home from './Home.tsx'
import Adventure from './Adventure.tsx'

        // <Route index element={<App />} />
createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
        <Route path="/treasure-hunt">
            <Route index element={<Home />} />
            <Route path="adventure" element={<Adventure />} />
        </Route>
    </Routes>
  </BrowserRouter>,
)
