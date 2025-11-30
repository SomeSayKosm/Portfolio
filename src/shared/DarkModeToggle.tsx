import clsx from "clsx"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// @ts-ignore
const moonIcon : IconProp = "fa-solid fa-moon";
// @ts-ignore
const sunIcon : IconProp = "fa-solid fa-circle";

type Props = {
    darkModeEnabled: boolean,
    setDarkModeEnabled: (darkModeEnabled: boolean) => void,
};

const DarkModeToggle = ({darkModeEnabled, setDarkModeEnabled}: Props) => {
    const colorSettings = darkModeEnabled ? { 
        slider: "bg-blue-800 justify-end border border-blue-500",
        icon: moonIcon,
        iconColor: "text-yellow-200"
     } : {
        slider: "bg-indigo-400 justify-start border border-indigo-600",
        icon: sunIcon,
        iconColor: "text-yellow-500"
     }

    return <div 
        className="flex items-center py-1 cursor-pointer mr-4"
        onClick={() => {
            setDarkModeEnabled(!darkModeEnabled);
        }}    
    >
        <div className={clsx(
            "flex items-center h-6 w-16 rounded-full",
            colorSettings.slider
        )}>
            <FontAwesomeIcon 
                icon={colorSettings.icon} 
                className={clsx(
                    "text-sm p-1",
                    colorSettings.iconColor
                )}
            />
        </div>
    </div>

}

export default DarkModeToggle;