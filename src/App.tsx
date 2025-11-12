import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
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
