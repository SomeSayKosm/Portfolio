import clsx from 'clsx';

type Props = {
  darkModeEnabled: boolean,
  children?: React.ReactNode;
};



const NavBarOption = ({ darkModeEnabled, children }: Props) => {
    const colorSettings = darkModeEnabled ? "border-blue-600 hover:bg-orange-500 hover:text-slate-800" : "border-amber-600 hover:bg-rose-400 hover:text-slate-800";
    
    return <li className={clsx(
      "border-r-2 px-3 py-1 cursor-pointer list-none font-semibold",
      colorSettings
    )}>
        {children}

    </li>
};

export default NavBarOption;