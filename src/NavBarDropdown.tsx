import { useState } from "react";
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import NavBarOption from "./NavBarOption";

// @ts-ignore
const chevronIcon : IconProp = "fa-solid fa-chevron-down";

type Props = {
  optionalStyle?: string,
  dropdownOptions: {label: string, linkUrl: string}[],
  children?: React.ReactNode;
};

const NavBarDropdown = ({ optionalStyle, dropdownOptions, children }: Props) => {
  const [ isHovered, setIsHovered ] = useState(false);
  
  const dropdownOptionItems = dropdownOptions.map((option, index) => {
    return <NavBarOption key={index} linkUrl={option.linkUrl} optionalStyle={"border-t-2"}>
      {option.label}
    </NavBarOption>
  });

  return (
    <li 
      className={clsx(
        "flex flex-col px-3 py-1 cursor-pointer list-none font-semibold relative dark:bg-blue-950 dark:border-blue-600 dark:hover:bg-violet-950 bg-amber-400 border-amber-600 hover:bg-rose-400",
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
        <ul className={"flex flex-col absolute border-r-2 border-b-2 top-8 left-0 w-full box-content dark:border-blue-600 dark:shadow-[-2px_0_0_0_rgba(37,99,235,1)] border-amber-600 shadow-[-2px_0_0_0_rgba(217,119,6,1)]"}>
          {dropdownOptionItems}
        </ul>
      }
    </li>
  )
};

export default NavBarDropdown;