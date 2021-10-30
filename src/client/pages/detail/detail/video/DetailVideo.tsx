import Container from "client/common/components/container/Container";
import Video from "client/common/components/video/Video";
import { FunctionComponent } from "react";

export interface DetailVideoProps {
    title?: string;
    src?: string;
}

const DetailVideo: FunctionComponent<DetailVideoProps> = (props: DetailVideoProps) => (
        <Container>
            <Video src={props.src ?? 'https://www.youtube.com/embed/dQw4w9WgXcQ'} />
        </Container>
    )

export default DetailVideo;