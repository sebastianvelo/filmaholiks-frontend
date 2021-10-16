import { FunctionComponent } from "react";
import ComponentStyle from "style/ComponentStyle";

interface VideoProps {
    title?: string;
    src: string;
}

const Video: FunctionComponent<VideoProps> = (props: VideoProps) => {
    return (
        <div className={ComponentStyle.VIDEO_WRAPPER} style={{ paddingTop: '56.25%' }}>
            <iframe title={props.title} className={ComponentStyle.VIDEO} src={props.src}></iframe>
        </div>
    );
}

export default Video;