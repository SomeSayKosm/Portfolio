import clsx from 'clsx';
import { Link } from 'react-router-dom';

type Props = {
  linkUrl: string,
  optionalStyle?: string,
  children?: React.ReactNode;
};

const NavBarOption = ({ linkUrl, optionalStyle, children }: Props) => {
    return <Link to={linkUrl} className={clsx(
        "group px-3 py-1 cursor-pointer list-none dark:bg-blue-950 dark:border-blue-600 dark:hover:bg-violet-950 bg-amber-400 border-amber-600 hover:bg-rose-400",
        optionalStyle
      )}>
        <span className="font-semibold text-amber-800 dark:text-blue-200 dark:group-hover:text-amber-200">
          {children}
        </span>
      </Link>
};

export default NavBarOption;