import NavBarOption from "./NavBarOption"

import { useState } from 'react'

const NavBar = () => {
    const [ darkModeEnabled, setDarkModeEnabled ] = useState(false);

    return <div className="flex justify-between items- w-screen bg-blue-950 border-2 border-blue-600 ">
        <div className="flex justify-start border border-red-300">
            <NavBarOption>About Me</NavBarOption>
            <NavBarOption>A Game in the Life</NavBarOption>
            <NavBarOption>Personal Projects</NavBarOption>
            <NavBarOption>Test</NavBarOption>
        </div>
    return <div className="text-blue-400">
        <div>About Me</div>
        <div>A Game in the Life</div>
        <div>Personal Projects</div>
        Test
    </div>
};

export default NavBar
