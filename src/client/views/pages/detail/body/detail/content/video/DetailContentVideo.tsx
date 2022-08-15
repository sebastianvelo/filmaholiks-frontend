import Container from "client/common/components/container/Container";
import Headline from "client/common/atom/headline/Headline";
import Video from "client/common/atom/video/Video";
import { FunctionComponent } from "react";

export interface DetailContentVideoProps {
    title?: string;
    src?: string;
    className?: string;
}

const DetailContentVideo: FunctionComponent<DetailContentVideoProps> = (props: DetailContentVideoProps) => (
    <Container>
        <Headline>{props.title}</Headline>
        <div className={props.className}>
            <Video src={props.src ?? 'https://www.youtube.com/embed/dQw4w9WgXcQ'} />
        </div>
    </Container>
)

export default DetailContentVideo;