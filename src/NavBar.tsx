import NavBarOption from "./NavBarOption"
import DarkModeToggle from "./DarkModeToggle"
import clsx from "clsx"

type DarkModeToggleProps = {
    darkModeEnabled: boolean,
    setDarkModeEnabled: (darkModeEnabled: boolean) => void,
};

const NavBar = ({darkModeEnabled, setDarkModeEnabled}: DarkModeToggleProps) => {

    const colorSettings = darkModeEnabled ? "bg-blue-950 text-slate-300 border-blue-600" : "bg-indigo-300 text-slate-800 border-violet-400";

    return <div className={clsx("flex justify-between items- w-screen border-2",
        colorSettings
    )}>
        <div className="flex justify-start">
            <NavBarOption darkModeEnabled={darkModeEnabled}>About Me</NavBarOption>
            <NavBarOption darkModeEnabled={darkModeEnabled}>A Game in the Life</NavBarOption>
            <NavBarOption darkModeEnabled={darkModeEnabled}>Personal Projects</NavBarOption>
            <NavBarOption darkModeEnabled={darkModeEnabled}>Test</NavBarOption>
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
