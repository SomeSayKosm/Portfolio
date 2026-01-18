import clsx from "clsx";

type VideoBoxProps = {
    src: string,
    title: string,
    rightAligned?: boolean,
};

const VideoBox = (props: VideoBoxProps) => {
    let { src, title, rightAligned } = props;

    return (
        <div className={clsx("mt-1 mb-2 w-fit rounded-lg",
            rightAligned ? "float-right ml-6" : "float-left  mr-6"
         )}>
            <div className="border-2 border-primary-accent w-fit rounded-lg overflow-hidden">
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