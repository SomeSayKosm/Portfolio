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
        "flex flex-col px-3 py-1 cursor-pointer list-none font-semibold relative text-secondary-1 border-secondary-accent hover:bg-hover hover:text-hover-text",
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
        <ul className={"flex flex-col absolute top-8 left-0 w-full box-content border-r-2 border-b-2 border-secondary-accent shadow-[-2px_0_0_0_var(--color-secondary-accent)] bg-foreground"}>
          {dropdownOptionItems}
        </ul>
      }
    </li>
  )
};

export default NavBarDropdown;