import { AxiosRequestConfig } from "axios";
import MediaSection, { MediaSectionProps } from "client/components/section/MediaSection";
import { useFetch } from "client/hooks/useFetch";
import { IdParams } from "client/util/params/Params";
import { FunctionComponent } from "react";
import { useParams } from "react-router";
import Detail, { DetailProps } from "./detail/Detail";

export interface DetailPageBlueprintProps {
    getPage: (id: string) => AxiosRequestConfig<DetailPageProps>;
}

export interface DetailPageProps {
    detail: DetailProps,
    sections?: MediaSectionProps[],
}

const DetailPage: FunctionComponent<DetailPageBlueprintProps> = (props: DetailPageBlueprintProps) => {
    const { id }: IdParams = useParams();
    const page = useFetch<DetailPageProps>(props.getPage(id));
    const skeletonSections = Array(3).fill({ cards: null });
    return (
        <>
            <section className={`w-full justify-center`}>
                <Detail {...page?.data?.detail} loading={page?.loading} />
                {(page?.data?.sections ?? skeletonSections).map(section => <MediaSection {...section} key={section.title} />)}
            </section>
        </>
    );
}

export default DetailPage;