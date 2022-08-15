import CardsSection, { CardsSectionProps } from "client/views/components/section/impl/cards/CardsSection";
import { FunctionComponent } from "react";
import TabsWrapper from "../TabsWrapper";

export interface DetailSectionsProps {
    sections?: CardsSectionProps[],
}

const DetailSections: FunctionComponent<DetailSectionsProps> = (props: DetailSectionsProps) => (
    props.sections ?
        (
            <TabsWrapper
                tabs={props.sections?.map(section => ({
                    content: <CardsSection cards={section.cards} key={section.title} id={section.title?.split(" ")[0]} />,
                    label: section.title ?? "error"
                }))}
            />
        ) :
        <></>
);

export default DetailSections;