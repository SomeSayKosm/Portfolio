type Props = {
    data: {
        title: string,
        content: string,
        date: string,
    }
}

const PostCard = ({data}: Props) => {
    return (
        <div className="m-4 p-1 rounded-xl border-2 bg-foreground border-accent-3">
            <div className="p-8 rounded-xl border-2 border-accent-2 bg-fill-2">
                <div className="text-3xl font-semibold text-text-2">
                    {data.title}
                </div>
                <div className="text-sm mb-4 text-text-3">
                    {data.date}
                </div>
                <div className="text-text-2">
                    {data.content}
                </div>
            </div>
        </div>
    );
}

export default PostCard;