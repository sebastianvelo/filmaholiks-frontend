import CardsSection, { CardsSectionProps } from "client/views/components/cards-section/CarouselSection";
import ChartSection, { ChartSectionProps } from "client/views/components/chart-section/ChartSection";
import SearchBar, { SearchBarProps } from "client/views/components/searchbar/SearchBar";
import { FunctionComponent } from "react";
import Detail, { DetailProps } from "./detail/Detail";

export interface DetailPageProps {
    title: string;
    detail?: DetailProps,
    searchbar?: SearchBarProps;
    charts?: ChartSectionProps[],
    sections?: CardsSectionProps[],
}


const DetailPage: FunctionComponent<DetailPageProps> = (props: DetailPageProps) => {
    document.title = props.title;
    return (
        <div className="sm:space-y-4">
            {props.searchbar && <SearchBar {...props.searchbar} />}
            <section className={`h-full w-full justify-center space-y-4`}>
                <Detail {...props.detail} />
                {props.charts?.map((chart) => <ChartSection {...chart} key={chart.title} />)}
                {props.sections?.map(section => <CardsSection {...section} key={section.title} />)}
            </section>
        </div>
    );
};

export default DetailPage;