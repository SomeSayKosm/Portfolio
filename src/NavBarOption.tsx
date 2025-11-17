import clsx from 'clsx';

type Props = {
  darkModeEnabled: boolean,
  optionalStyle?: string,
  children?: React.ReactNode;
};

const NavBarOption = ({ darkModeEnabled, optionalStyle, children }: Props) => {
    const colorSettings = darkModeEnabled ? "border-blue-600 hover:bg-orange-500 hover:text-slate-800" : "border-amber-600 hover:bg-rose-400 hover:text-slate-800";
    
    return <li className={clsx(
      "px-3 py-1 cursor-pointer list-none font-semibold",
      colorSettings,
      optionalStyle
    )}>
        {children}

    </li>
};

export default NavBarOption;