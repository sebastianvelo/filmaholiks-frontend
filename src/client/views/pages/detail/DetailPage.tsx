import SearchBar, { SearchBarProps } from "client/views/components/searchbar/SearchBar";
import { FunctionComponent } from "react";
import DetailChart, { DetailChartProps } from "./chart/DetailChart";
import Detail, { DetailProps } from "./detail/Detail";
import DetailSections, { DetailSectionsProps } from "./sections/DetailSections";

export interface DetailPageProps extends DetailSectionsProps, DetailChartProps {
    title: string;
    detail?: DetailProps,
    searchbar?: SearchBarProps;
}


const DetailPage: FunctionComponent<DetailPageProps> = (props: DetailPageProps) => {
    document.title = props.title;
    return (
        <>
            {props.searchbar && <SearchBar {...props.searchbar} />}
            <section className={`h-full w-full justify-center xl:px-28`}>
                <Detail {...props.detail} />
                <DetailSections {...props} />
                <DetailChart {...props} />
            </section>
        </>
    );
};

export default DetailPage;