import clsx from "clsx";

type Props = {
    darkModeEnabled: boolean,
    data: {
        title: string,
        content: string,
        date: string,
    }
}

const PostCard = ({darkModeEnabled, data}: Props) => {
    const colorSettings = darkModeEnabled ? 
    { 
        body: "bg-blue-900",
        primaryText: "text-slate-200 border-blue-600",
        secondaryText: "",
    } : {
        body: "bg-amber-200",
        primaryText: "text-orange-950 border-amber-600",
        secondaryText: "text-orange-800"
    };

    return (
        <div 
            className={clsx(
                "m-4 p-1 rounded-xl border-2 border-amber-500 bg-amber-50"
        )}>
            <div 
                className={clsx(
                    "p-8 rounded-xl border-2 border-amber-600",
                    colorSettings.body
            )}>
                <div 
                    className={clsx(
                        "text-3xl font-semibold",
                        colorSettings.primaryText
                )}>
                    {data.title}
                </div>
                <div 
                    className={clsx(
                        "text-sm mb-4",
                        colorSettings.secondaryText
                )}>
                    {data.date}
                </div>
                <div 
                    className={clsx(
                        colorSettings.primaryText
                )}>
                    {data.content}
                </div>
            </div>
        </div>
    );
}

export default PostCard;