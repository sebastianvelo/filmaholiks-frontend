import VideoModel from "@model/atom/VideoModel";

interface VideoProps extends VideoModel { }

const Video: React.FC<VideoProps> = (props: VideoProps) => (
    <div className={'relative'} style={{ paddingTop: '56.25%' }}>
        <iframe title={props.title} className={'absolute inset-0 w-full h-full'} src={props.src}></iframe>
    </div>
)

export default Video;