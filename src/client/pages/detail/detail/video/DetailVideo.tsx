import Container from "components/container/Container";
import Headline from "components/headline/Headline";
import Video from "components/video/Video";
import { FunctionComponent } from "react";

export interface DetailVideoProps {
    title?: string;
    src?: string;
}

const DetailVideo: FunctionComponent<DetailVideoProps> = (props: DetailVideoProps) => {
    return (
        <Container>
            <Headline>{props.title}</Headline>
            <Video src={props.src ?? 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'} />
        </Container>
    );
}

export default DetailVideo;