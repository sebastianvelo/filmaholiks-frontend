import Image, { ImageProps } from "client/common/components/image/Image";
import { FunctionComponent } from "react";

export interface DetailPostersProps {
    poster?: ImageProps;
    backdrop?: ImageProps;
}

const DetailPosters: FunctionComponent<DetailPostersProps> = (props: DetailPostersProps) => (
    <>
        <Image {...props.poster!} className={`hidden lg:block lg:w-1/4 lg:border-2-r border-primary`} />
        <Image {...props.backdrop!} className={`lg:hidden`} />
    </>
)

export default DetailPosters;