type Props = {
    darkModeEnabled: boolean,
    title: string,
    content: string,
    date: string,
}

const PostCard = ({darkModeEnabled, title, content, date}: Props) => {

    return (
        <div>
            <div>{title}</div>
            <div>{date}</div>
            <div>{content}</div>
        </div>
    );
}

export default PostCard;