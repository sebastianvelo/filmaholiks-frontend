import CardsSection, { CardsSectionProps } from "client/views/components/section/impl/cards/CardsSection";
import { FunctionComponent } from "react";

export interface ExplorePageBodyProps {
    sections?: CardsSectionProps[];
}

const ExplorePageBody: FunctionComponent<ExplorePageBodyProps> = (props: ExplorePageBodyProps) => (
    <div className="2xl:px-24 space-y-8 py-6 md:py-24">
        {props.sections?.map(section => <CardsSection {...section} key={section.title} />)}
    </div>
)

export default ExplorePageBody;