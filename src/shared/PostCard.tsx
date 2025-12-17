import VideoBox from "./VideoBox";

type Props = {
    data: {
        title: string,
        content: string,
        date: string,
    }
}

const PostCard = ({data}: Props) => {
    return (
        <div className="m-4 p-1 rounded-xl border-2 bg-foreground border-tertiary-1">
            <div className="p-8 rounded-xl border-2 border-primary-accent bg-primary-2">
                <div className="text-3xl font-semibold text-primary-text">
                    {data.title}
                </div>
                <div className="text-sm font-semibold mb-4 text-secondary-text">
                    {data.date}
                </div>
                <div className="text-primary-text">
                    <VideoBox src="" title="" />
                    {data.content}
                </div>
            </div>
        </div>
    );
}

export default PostCard;