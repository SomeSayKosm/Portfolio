import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import clsx from "clsx"

library.add(fas, far, fab)

// @ts-ignore
const moonIcon : IconProp = "fa-solid fa-moon";
// @ts-ignore
const sunIcon : IconProp = "fa-solid fa-circle";

type DarkModeToggleProps = {
    darkModeEnabled: boolean,
    setDarkModeEnabled: (darkModeEnabled: boolean) => void,
};

const DarkModeToggle = ({darkModeEnabled, setDarkModeEnabled}: DarkModeToggleProps) => {
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
        className="flex items-center py-1 cursor-pointer"
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