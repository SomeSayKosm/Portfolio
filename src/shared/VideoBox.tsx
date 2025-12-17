type VideoBoxProps = {
    src: string,
    title: string,
};

const VideoBox = (props: VideoBoxProps) => {
    let { src, title } = props;

    src = "https://www.youtube.com/embed/HOFfTBZYNVs?si=0bjanA0SwRE5AA3K"; // Placeholder
    title = "Project Blue: Dev Vlog #1";

    return (
        <div className="mb-2 p-1 bg-accent-2 border-0 border-accent-2 w-fit rounded-lg">
            <div className="border-0 border-accent-2 w-fit rounded-lg overflow-hidden">
                <iframe 
                    width="560" 
                    height="315" 
                    src={src} 
                    title={title} 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                />    
            </div>
        </div>
    );
};

export default VideoBox;