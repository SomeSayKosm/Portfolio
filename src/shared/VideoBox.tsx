import clsx from "clsx";

type VideoBoxProps = {
    src: string,
    title: string,
    isLarge?: boolean,
}; 

const VideoBox = (props: VideoBoxProps) => {
    let { src, title, isLarge } = props;

    return (
            <div className="border-2 border-primary-accent w-fit rounded-lg overflow-hidden">
                <iframe 
                    width={clsx(isLarge ? "896" : "560")} 
                    height={clsx(isLarge ? "504" : "315")}  
                    src={src} 
                    title={title} 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                />    
            </div>
    );
};

export default VideoBox;