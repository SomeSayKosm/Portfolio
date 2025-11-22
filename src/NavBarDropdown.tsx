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

  const colorSettings = darkModeEnabled ? {
    base: "border-blue-600 hover:bg-indigo-500",
    list: "border-blue-600 shadow-[-2px_0_0_0_rgba(37,99,235,1)]"
  } : {
    base: "border-amber-600 hover:bg-rose-400",
    list: "border-amber-600 shadow-[-2px_0_0_0_rgba(217,119,6,1)]"
  };
  
  const dropdownOptionItems = dropdownOptions.map((option, index) => {
    return <NavBarOption key={index} darkModeEnabled={darkModeEnabled} optionalStyle={"border-t-2"}>
      {option}
    </NavBarOption>
  });

  return (
    <li 
      className={clsx(
        "flex flex-col px-3 py-1 cursor-pointer list-none font-semibold relative box-content",
        colorSettings.base, 
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
        <ul className={clsx(
          "absolute border-r-2 border-b-2 top-8 left-0 w-full box-content",
          colorSettings.list
        )}>
          {dropdownOptionItems}
        </ul>
      }
    </li>
  )
};

export default NavBarDropdown;