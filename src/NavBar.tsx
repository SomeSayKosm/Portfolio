import NavBarOption from "./NavBarOption"
import DarkModeToggle from "./DarkModeToggle"

type DarkModeToggleProps = {
    darkModeEnabled: boolean,
    setDarkModeEnabled: (darkModeEnabled: boolean) => void,
};

const NavBar = ({darkModeEnabled, setDarkModeEnabled}: DarkModeToggleProps) => {
    return <div className="flex justify-between items- w-screen bg-blue-950 border-2 border-blue-600 ">
        <div className="flex justify-start border border-red-300">
            <NavBarOption>About Me</NavBarOption>
            <NavBarOption>A Game in the Life</NavBarOption>
            <NavBarOption>Personal Projects</NavBarOption>
            <NavBarOption>Test</NavBarOption>
        </div>
        <div className="flex">
            <DarkModeToggle
                darkModeEnabled={darkModeEnabled}
                setDarkModeEnabled={setDarkModeEnabled}
            />
        </div>
    </div>
};

export default NavBar
