import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import NavBar from './NavBar';
import ProjectBlue from './pages/ProjectBlue';


library.add(fas, far, fab)

function App() {
  const [ darkModeEnabled, setDarkModeEnabled ] = useState(false);

  return (
    <>
      <div className="flex flex-col w-screen items-center justify-start bg-backdrop transition-colors duration-300">
        <div className="max-w-6xl w-full min-h-[2000px] bg-foreground">
          <div className="h-64 text-center">Banner Placeholder</div>
          <NavBar darkModeEnabled={darkModeEnabled} setDarkModeEnabled={setDarkModeEnabled} />
          <Routes>
            <Route path="/about" element={<div className="max-w-6xl w-full min-h-[2000px] p-4">About Me Page Placeholder</div>} />
            <Route path="/a-game-in-the-life" element={<div className="max-w-6xl w-full min-h-[2000px] p-4">A Game in the Life Page Placeholder</div>} />
            <Route path="/test" element={<div className="max-w-6xl w-full min-h-[2000px] p-4">Test Page Placeholder</div>} />
            <Route path="/project-blue" element={<ProjectBlue />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
