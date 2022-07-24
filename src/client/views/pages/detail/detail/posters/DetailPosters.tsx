import Image, { ImageProps } from "client/common/components/image/Image";
import { FunctionComponent } from "react";

export interface DetailPostersProps {
    poster?: ImageProps;
    backdrop?: ImageProps;
}

const DetailPosters: FunctionComponent<DetailPostersProps> = (props: DetailPostersProps) => (
    <>
        <Image {...props.poster!} className={`hidden md:block md:w-1/4 md:border-2-r border-primary`} />
        <Image {...props.backdrop!} className={`md:hidden border-b-2 border-primary`} />
    </>
)

export default DetailPosters;