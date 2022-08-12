import Container from "client/common/components/container/Container";
import Headline from "client/common/components/headline/Headline";
import Video from "client/common/components/video/Video";
import { FunctionComponent } from "react";

export interface DetailVideoProps {
    title?: string;
    src?: string;
    className?: string;
}

const DetailVideo: FunctionComponent<DetailVideoProps> = (props: DetailVideoProps) => (
    <Container>
        <Headline>{props.title}</Headline>
        <div className={props.className}>
            <Video src={props.src ?? 'https://www.youtube.com/embed/dQw4w9WgXcQ'} />
        </div>
    </Container>
)

export default DetailVideo;