import TabsContainer from "@components/modern-tabs/TabsContainer";
import CardsSection, { CardsSectionProps } from "client/views/components/section/impl/cards/CardsSection";
import { FunctionComponent } from "react";

export interface DetailSectionsProps {
    sections?: CardsSectionProps[],
}

const DetailSections: FunctionComponent<DetailSectionsProps> = (props: DetailSectionsProps) => (
    props.sections ?
        (
            <TabsContainer
                tabs={props.sections.map(section => ({
                    id: `sect-${section.title}`,
                    content: <CardsSection cards={section.cards} key={section.title} id={section.title?.split(" ")[0]} />,
                    label: section.title ?? "error"
                }))}
            />
        ) :
        <></>
);

export default DetailSections;