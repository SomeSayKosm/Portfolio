import { useState } from 'react'

const NavBar = () => {
    const [ darkModeEnabled, setDarkModeEnabled ] = useState(false);

    return <div className="text-blue-400">
        <div>About Me</div>
        <div>A Game in the Life</div>
        <div>Personal Projects</div>
        Test
    </div>
};

export default NavBar
