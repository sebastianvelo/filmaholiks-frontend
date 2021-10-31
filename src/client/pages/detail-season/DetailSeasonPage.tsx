import { AxiosRequestConfig } from "axios";
import MediaSection, { MediaSectionProps } from "client/components/section/MediaSection";
import { useFetch } from "client/hooks/useFetch";
import { DetailSeasonPageParams } from "client/util/params/Params";
import { FunctionComponent } from "react";
import { useParams } from "react-router";
import Detail, { DetailProps } from "./detail/Detail";

export interface DetailSeasonPageBlueprintProps {
    getPage: (id: string, season: string) => AxiosRequestConfig<DetailSeasonPageProps>;
}

export interface DetailSeasonPageProps {
    detail: DetailProps,
    sections?: MediaSectionProps[],
}

const DetailSeasonPage: FunctionComponent<DetailSeasonPageBlueprintProps> = (props: DetailSeasonPageBlueprintProps) => {
    const { id, season }: DetailSeasonPageParams = useParams();
    const page = useFetch<DetailSeasonPageProps>(props.getPage(id, season));
    const skeletonSections = Array(3).fill({ cards: null });
    return (
        <>
            <section className={`w-full justify-center divide-y divide-primary`}>
                <Detail {...page?.data?.detail} loading={page?.loading} />
                {(page?.data?.sections ?? skeletonSections).map(section => <MediaSection {...section} key={section.title} />)}
            </section>
        </>
    );
}

export default DetailSeasonPage;