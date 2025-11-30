import NavBarOption from "./NavBarOption"
import NavBarDropdown from "./NavBarDropdown"
import DarkModeToggle from "./DarkModeToggle"

type Props = {
    darkModeEnabled: boolean,
    setDarkModeEnabled: (darkModeEnabled: boolean) => void,
};

const dropdownOptions = [{ label: "Project: Blue", linkUrl: "/project-blue" }, { label: "two", linkUrl: "/test" }];

const NavBar = ({darkModeEnabled, setDarkModeEnabled}: Props) => {
    return <nav className="flex justify-between border-2 w-full sticky top-0 select-none bg-fill-1 border-accent-1">
        <ul className="flex justify-start">
            <NavBarOption linkUrl={"/about"} optionalStyle={"border-r-2"}>About Me</NavBarOption>
            <NavBarOption linkUrl={"/a-game-in-the-life"}>A Game in the Life</NavBarOption>
            <NavBarDropdown 
                optionalStyle={"border-x-2"} 
                dropdownOptions={dropdownOptions}>
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
