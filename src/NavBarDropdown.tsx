import { useState } from "react";
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import NavBarOption from "./NavBarOption";

// @ts-ignore
const chevronIcon : IconProp = "fa-solid fa-chevron-down";

type Props = {
  darkModeEnabled: boolean,
  optionalStyle?: string,
  dropdownOptions: string[],
  children?: React.ReactNode;
};

const NavBarDropdown = ({ darkModeEnabled, optionalStyle, dropdownOptions, children }: Props) => {
  const [ isHovered, setIsHovered ] = useState(false);

  const colorSettings = darkModeEnabled ? "border-blue-600 hover:bg-orange-500 hover:text-slate-800" : "border-amber-600 hover:bg-rose-400 hover:text-slate-800";
  
  const dropdownOptionItems = dropdownOptions.map((option, index) => {
    return <NavBarOption key={index} darkModeEnabled={darkModeEnabled} optionalStyle={"border-t-2"}>
      {option}
    </NavBarOption>
  });

  return (
    <li 
      className={clsx(
        "flex flex-col px-3 py-1 cursor-pointer list-none font-semibold relative box-content",
        colorSettings, 
        optionalStyle
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>
        {children}
        <FontAwesomeIcon
            icon={chevronIcon}
            className="pl-2"
            />      
      </div>
      {isHovered &&
        <ul className="absolute border-r-2 border-b-2 shadow-[-2px_0_0_0_rgba(217,119,6,1)] border-amber-600 top-8 left-0 w-full bg-amber-400 box-content">
          {dropdownOptionItems}
        </ul>
      }
    </li>
  )
};

export default NavBarDropdown;