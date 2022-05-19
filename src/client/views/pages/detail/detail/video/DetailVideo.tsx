import Container from "client/common/components/container/Container";
import Headline from "client/common/components/headline/Headline";
import Video from "client/common/components/video/Video";
import { FunctionComponent } from "react";

export interface DetailVideoProps {
    title?: string;
    src?: string;
}

const DetailVideo: FunctionComponent<DetailVideoProps> = (props: DetailVideoProps) => (
    <Container>
        <Headline>{props.title}</Headline>
        <Video src={props.src ?? 'https://www.youtube.com/embed/dQw4w9WgXcQ'} />
    </Container>
)

export default DetailVideo;