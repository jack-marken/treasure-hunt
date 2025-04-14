import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router"
import './index.css'
import Home from './Home.tsx'
import Adventure from './Adventure.tsx'

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
