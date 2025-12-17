import NavBarOption from "./NavBarOption"
import NavBarDropdown from "./NavBarDropdown"
import DarkModeToggle from "./DarkModeToggle"

type Props = {
    darkModeEnabled: boolean,
    setDarkModeEnabled: (darkModeEnabled: boolean) => void,
};

const dropdownOptions = [{ label: "Project: Blue", linkUrl: "/project-blue" }, { label: "two", linkUrl: "/test" }];

const NavBar = ({darkModeEnabled, setDarkModeEnabled}: Props) => {
    return <nav className="flex justify-between w-full sticky top-0 select-none bg-secondary-3 border-2 border-secondary-accent">
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
