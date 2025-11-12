import { useState } from 'react'
import './NavBar'
import NavBar from './NavBar'

function App() {
  const [ darkModeEnabled, setDarkModeEnabled ] = useState(false);

  return (
    <>
      <div className="flex flex-col w-screen items-center">
        <NavBar 
          darkModeEnabled={darkModeEnabled}
          setDarkModeEnabled={setDarkModeEnabled}
          />
      </div>
    </>
  )
}

export default App
