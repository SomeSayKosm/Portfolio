import NavBarOption from "./NavBarOption"
import DarkModeToggle from "./DarkModeToggle"
import clsx from "clsx"

type Props = {
    darkModeEnabled: boolean,
    setDarkModeEnabled: (darkModeEnabled: boolean) => void,
};

const NavBar = ({darkModeEnabled, setDarkModeEnabled}: Props) => {

    const colorSettings = darkModeEnabled ? "bg-blue-950 text-slate-300 border-blue-600" : "bg-amber-400 text-slate-800 border-amber-600";

    return <nav className={clsx(
        "flex justify-between border-2 w-full sticky top-0",
        colorSettings
    )}>
        <ul className="flex justify-start">
            <NavBarOption darkModeEnabled={darkModeEnabled}>About Me</NavBarOption>
            <NavBarOption darkModeEnabled={darkModeEnabled}>A Game in the Life</NavBarOption>
            <NavBarOption darkModeEnabled={darkModeEnabled}>Personal Projects</NavBarOption>
            <NavBarOption darkModeEnabled={darkModeEnabled}>Test</NavBarOption>
        </ul>
        <div className="flex">
            <DarkModeToggle
                darkModeEnabled={darkModeEnabled}
                setDarkModeEnabled={setDarkModeEnabled}
            />
        </div>
    </nav>
};

export default NavBar
