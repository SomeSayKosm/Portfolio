import { useState } from 'react'
import clsx from 'clsx';
import NavBar from './NavBar'

function App() {
  const [ darkModeEnabled, setDarkModeEnabled ] = useState(false);

  const colorSettings = darkModeEnabled ? 
    {
      content:"bg-sky-950",
      trim:"bg-slate-950",
    } : 
    {
      content:"bg-yellow-50",
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
