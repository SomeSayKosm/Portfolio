import clsx from 'clsx';
import { Link } from 'react-router-dom';

type Props = {
  linkUrl: string,
  optionalStyle?: string,
  children?: React.ReactNode;
};

const NavBarOption = ({ linkUrl, optionalStyle, children }: Props) => {
    return <Link to={linkUrl} className={clsx(
        "px-3 py-1 cursor-pointer list-none bg-fill-1 border-accent-1 hover:bg-hover-fill-1 group",
        optionalStyle
      )}>
        <span className="font-semibold text-text-1 group-hover:text-hover-text-1">
          {children}
        </span>
      </Link>
};

export default NavBarOption;