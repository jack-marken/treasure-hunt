import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, Route, HashRouter } from 'react-router-dom'
import './index.css'
import Home from './Home.tsx'
import Adventure from './Adventure.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <HashRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="adventure" element={<Adventure />} />
            </Routes>
        </HashRouter>
    </StrictMode>
)
