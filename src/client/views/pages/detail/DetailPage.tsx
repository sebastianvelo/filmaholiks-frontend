import Tabs from "client/common/components/tabs/Tabs";
import CardsSection, { CardsSectionProps } from "client/views/components/cards-section/CardsSection";
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
        <div>
            {props.searchbar && <SearchBar {...props.searchbar} />}
            <section className={`h-full w-full justify-center xl:px-28`}>
                <Detail {...props.detail} />
                {props.sections && (
                    <Tabs
                        tabsClassName=" md:text-2xl font-bold"
                        tabs={props.sections?.map(section => ({
                            content: <CardsSection cards={section.cards} key={section.title} />,
                            label: section.title ?? "error"
                        }))}
                    />
                )}
                {props.charts && (
                    <Tabs
                        tabsClassName=" md:text-2xl"
                        tabs={props.charts?.map(chart => ({
                            content: <ChartSection chart={chart.chart} key={chart.title} />,
                            label: chart.title ?? "error"
                        }))}
                    />
                )}
            </section>
        </div>
    );
};

export default DetailPage;