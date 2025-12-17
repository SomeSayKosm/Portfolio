import clsx from 'clsx';
import { Link } from 'react-router-dom';

type Props = {
  linkUrl: string,
  optionalStyle?: string,
  children?: React.ReactNode;
};

const NavBarOption = ({ linkUrl, optionalStyle, children }: Props) => {
    return <Link to={linkUrl} className={clsx(
        "px-3 py-1 cursor-pointer list-none bg-secondary-3 border-secondary-accent hover:bg-hover group",
        optionalStyle
      )}>
        <span className="font-semibold text-secondary-1 group-hover:text-hover-text">
          {children}
        </span>
      </Link>
};

export default NavBarOption;