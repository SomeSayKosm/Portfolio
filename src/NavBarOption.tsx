import clsx from 'clsx';
import { Link } from 'react-router-dom';

type Props = {
  linkUrl: string,
  optionalStyle?: string,
  children?: React.ReactNode;
};

const NavBarOption = ({ darkModeEnabled, optionalStyle, children }: Props) => {
    const colorSettings = darkModeEnabled ? "bg-blue-950  border-blue-600 hover:bg-indigo-500" : "bg-amber-400 border-amber-600 hover:bg-rose-400";
    // hover:text-slate-800
    
    return <li className={clsx(
      "px-3 py-1 cursor-pointer list-none font-semibold",
      colorSettings,
      optionalStyle
    )}>
        {children}

    </li>
};

export default NavBarOption;