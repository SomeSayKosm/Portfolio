import { useState } from 'react'
import clsx from 'clsx';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import NavBar from './NavBar'

library.add(fas, far, fab)

function App() {
  const [ darkModeEnabled, setDarkModeEnabled ] = useState(false);

  const colorSettings = darkModeEnabled ? 
    {
      content:"bg-sky-950",
      trim:"bg-slate-950",
    } : 
    {
      content:"bg-amber-50",
      trim:"bg-indigo-950",
    }

  return (
    <>
      <div className={clsx(
        "flex flex-col w-screen items-center justify-start",
        colorSettings.trim
      )}>
        <div className={clsx(
          "max-w-6xl w-full min-h-[2000px]",
          colorSettings.content
        )}>
          <div className="h-64 text-center">Banner Placeholder</div>
          <NavBar 
            darkModeEnabled={darkModeEnabled}
            setDarkModeEnabled={setDarkModeEnabled}
            />
        </div>
      </div>
    </>
  )
}

export default App
