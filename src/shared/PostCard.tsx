import VideoBox from "./VideoBox";
import clsx from "clsx";

type Props = {
    data: {
        title: string,
        content: string,
        date: string,
        video?: {
            src: string,
            title: string,
        }
    },
    rightAligned?: boolean,
}



const PostCard = ({data, rightAligned}: Props) => {
    const hasText = data.content && data.content.length > 0;

    const getAlignmentClass = (rightAligned: boolean | undefined) => {
        if(!hasText) {
            return "justify-center";
        }

        return rightAligned ? "float-right ml-6" : "float-left mr-6";
    }
    
    const graphicContent = (
        data.video &&
            <div className={clsx("mt-1 mb-2 w-fit rounded-lg",
                getAlignmentClass(rightAligned)
            )}>
                <VideoBox 
                    src={data.video.src} 
                    title={data.video.title} 
                    isLarge={!hasText}
                />
            </div>
    )

    return (
        <div className="m-4 p-1 rounded-xl border-2 bg-foreground border-tertiary-1">
            <div className="p-8 rounded-xl border-2 border-primary-accent bg-primary-2">
                <div className={clsx("text-3xl font-semibold text-primary-text",
                    false ? "text-right" : "text-left"
                )}>
                    {data.title}
                </div>
                <div className={clsx("text-sm font-semibold mb-4 text-secondary-text",
                    false ? "text-right" : "text-left"
                )}>
                    {data.date}
                </div>
                <div className={clsx("text-primary-text", 
                    hasText ? "flow-root" :  "flex justify-center")}>
                    {graphicContent}
                    {hasText && <p className="whitespace-pre-wrap">{data.content}</p>}
                </div>
            </div>
        </div>
    );
}

export default PostCard;