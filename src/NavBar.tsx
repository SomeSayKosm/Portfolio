import NavBarOption from "./NavBarOption"
import NavBarDropdown from "./NavBarDropdown"
import DarkModeToggle from "./DarkModeToggle"

type Props = {
    darkModeEnabled: boolean,
    setDarkModeEnabled: (darkModeEnabled: boolean) => void,
};

const NavBar = ({darkModeEnabled, setDarkModeEnabled}: Props) => {
    return <nav className="flex justify-between border-2 w-full sticky top-0 select-none dark:bg-blue-950 dark:text-slate-300 dark:border-blue-600 bg-amber-400 text-slate-800 border-amber-600">
        <ul className="flex justify-start">
            <NavBarOption linkUrl={"/about"} optionalStyle={"border-r-2"}>About Me</NavBarOption>
            <NavBarOption linkUrl={"/a-game-in-the-life"}>A Game in the Life</NavBarOption>
            <NavBarDropdown 
                optionalStyle={"border-x-2"} 
                dropdownOptions={
                    [{ label: "Project: Blue", linkUrl: "/project-blue" }, 
                    { label: "two", linkUrl: "/test" }]}
                >
                    Personal Projects
            </NavBarDropdown>
            <NavBarOption linkUrl={"/test"} optionalStyle={"border-r-2"}>Test</NavBarOption>
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
