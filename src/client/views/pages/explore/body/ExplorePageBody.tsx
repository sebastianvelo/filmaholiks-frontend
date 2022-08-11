import CardsSection, { CardsSectionProps } from "client/views/components/sections/cards-section/CardsSection";
import { FunctionComponent } from "react";

export interface ExplorePageBodyProps {
    sections?: CardsSectionProps[];
}

const ExplorePageBody: FunctionComponent<ExplorePageBodyProps> = (props: ExplorePageBodyProps) => (
    <div className="2xl:px-16 space-y-16">
        {props.sections?.map(section => <CardsSection {...section} key={section.title} />)}
    </div>
)

export default ExplorePageBody;