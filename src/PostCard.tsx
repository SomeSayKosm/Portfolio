import clsx from "clsx";

type Props = {
    data: {
        title: string,
        content: string,
        date: string,
    }
}

const PostCard = ({data}: Props) => {
    const colorSettings = { 
        body: "dark:bg-blue-900 bg-amber-200",
        primaryText: "dark:text-slate-200 dark:border-blue-600 text-orange-950 border-amber-600",
        secondaryText: "dark:text-indigo-300 text-orange-800",
    }  

    return (
        <div 
            className={clsx(
                "m-4 p-1 rounded-xl border-2 dark:bg-sky-950 dark:border-cyan-600 border-amber-500 bg-amber-50 "
        )}>
            <div 
                className={clsx(
                    "p-8 rounded-xl border-2 dark:border-cyan-500 border-amber-600",
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