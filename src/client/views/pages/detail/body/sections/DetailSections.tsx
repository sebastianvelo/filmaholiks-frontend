import Tabs from "client/common/components/tabs/Tabs";
import CardsSection, { CardsSectionProps } from "client/views/components/cards-section/CardsSection";
import { FunctionComponent } from "react";

export interface DetailSectionsProps {
    sections?: CardsSectionProps[],
}

const DetailSections: FunctionComponent<DetailSectionsProps> = (props: DetailSectionsProps) => (
    props.sections ?
        (
            <Tabs
                className="border-2 border-primary-dark divide-y-2 divide-primary-dark"
                tabsClassName="md:text-2xl bg-gradient-to-l from-secondary-dark to-black"
                tabs={props.sections?.map(section => ({
                    content: <CardsSection cards={section.cards} key={section.title} id={section.title?.split(" ")[0]} />,
                    label: section.title ?? "error"
                }))}
            />
        ) :
        <></>
);

export default DetailSections;