import Tabs from "client/common/components/tabs/Tabs";
import CardsSection, { CardsSectionProps } from "client/views/components/sections/cards-section/CardsSection";
import { FunctionComponent } from "react";

export interface DetailSectionsProps {
    sections?: CardsSectionProps[],
}

const DetailSections: FunctionComponent<DetailSectionsProps> = (props: DetailSectionsProps) => (
    props.sections ?
        (
            <Tabs
                tabsClassName="px-2 border-b-2 dark:border-primary border-secondary md:text-2xl bg-primary dark:bg-black bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50"
                tabs={props.sections?.map(section => ({
                    content: <CardsSection cards={section.cards} key={section.title} id={section.title?.split(" ")[0]} />,
                    label: section.title ?? "error"
                }))}
            />
        ) :
        <></>
);

export default DetailSections;