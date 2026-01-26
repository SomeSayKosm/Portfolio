import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import NavBar from './shared/NavBar';
import ProjectBlue from './pages/ProjectBlue';
import ProjectBlueBanner from './pages/ProjectBlueBanner';
import ProjectKickstep from './pages/ProjectKickstep';
import ProjectKickstepBanner from './pages/ProjectKickstepBanner';

library.add(fas, far, fab)

function App() {
  const [ darkModeEnabled, setDarkModeEnabled ] = useState(false);

  return (
    <>
      <div className="flex flex-col w-screen items-center justify-start bg-background transition-colors duration-300">
        <div className="max-w-6xl w-full min-h-[2000px] bg-foreground">
          <Routes>
            <Route path="/about" element={<div className="h-64 text-center">Banner About</div>} />
            <Route path="/a-game-in-the-life" element={<div className="h-64 text-center">Banner Game</div>} />
            <Route path="/project-blue" element={<ProjectBlueBanner />} />
            <Route path="/project-kickstep" element={<ProjectKickstepBanner />} />
          </Routes>
          <NavBar darkModeEnabled={darkModeEnabled} setDarkModeEnabled={setDarkModeEnabled} />
          <Routes>
            <Route path="/about" element={<div className="max-w-6xl w-full min-h-[2000px] p-4">About Me Page Placeholder</div>} />
            <Route path="/a-game-in-the-life" element={<div className="max-w-6xl w-full min-h-[2000px] p-4">A Game in the Life Page Placeholder</div>} />
            <Route path="/project-blue" element={<ProjectBlue />} />
            <Route path="/project-kickstep" element={<ProjectKickstep />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
