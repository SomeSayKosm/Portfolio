import NavBarOption from "./NavBarOption"
import NavBarDropdown from "./NavBarDropdown"
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
            <NavBarOption darkModeEnabled={darkModeEnabled} optionalStyle={"border-r-2"}>About Me</NavBarOption>
            <NavBarOption darkModeEnabled={darkModeEnabled}>A Game in the Life</NavBarOption>
            <NavBarDropdown darkModeEnabled={darkModeEnabled} optionalStyle={"border-x-2"} dropdownOptions={["one", "two", "three"]}>Personal Projects</NavBarDropdown>
            <NavBarOption darkModeEnabled={darkModeEnabled} optionalStyle={"border-r-2"}>Test</NavBarOption>
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
