import { LineDivider } from "@components/svg/Svg";
import CardsSection, { CardsSectionProps } from "client/views/components/section/impl/cards/CardsSection";
import { FunctionComponent } from "react";

export interface ExplorePageBodyProps {
    sections?: CardsSectionProps[];
}

const ExplorePageBody: FunctionComponent<ExplorePageBodyProps> = (props: ExplorePageBodyProps) => (
    <div className="md:px-12 2xl:px-24 space-y-8 md:py-6 xl:py-24">
        {props.sections?.map(section => (
            <>
                <CardsSection {...section} key={section.title} />
                <LineDivider />
            </>
        ))}
    </div>
)

export default ExplorePageBody;