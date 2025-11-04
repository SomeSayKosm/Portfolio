import { useState } from 'react'

type Props = {
  children?: React.ReactNode;
};

const NavBarOption = ({ children }: Props) => {
    return <div className = "font-medium text-slate-300 border-r-2 border-blue-600 px-3 py-1 hover:bg-orange-400 hover:text-slate-800 cursor-pointer">
        {children}

    </div>
};

export default NavBarOption;