import { FunctionComponent } from "react";

interface VideoProps {
    title?: string;
    src: string;
}

const Video: FunctionComponent<VideoProps> = (props: VideoProps) => {
    return (
        <div className={'relative'} style={{ paddingTop: '56.25%' }}>
            <iframe title={props.title} className={'absolute inset-0 w-full h-full'} src={props.src}></iframe>
        </div>
    );
}

export default Video;