import { useState } from 'react'
import './NavBar'
import NavBar from './NavBar'

function App() {
  const [ darkModeEnabled, setDarkModeEnabled ] = useState(false);

  return (
    <>
      <NavBar 
        darkModeEnabled={darkModeEnabled}
        setDarkModeEnabled={setDarkModeEnabled}
      />
    </>
  )
}

export default App
