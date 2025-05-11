import { LineDivider } from "@components/svg/Svg";
import CardsSection, { CardsSectionProps } from "client/views/components/common/cards/CardsSection";

export interface ExplorePageBodyProps {
    sections?: CardsSectionProps[];
}

const ExplorePageBody: React.FC<ExplorePageBodyProps> = (props: ExplorePageBodyProps) => (
    <div className="2xl:w-3/4 2xl:mx-auto space-y-8 md:py-6 xl:py-24 md:px-12">
        {props.sections?.map(section => (
            <div key={section.title}>
                <CardsSection {...section} />
                <LineDivider />
            </div>
        ))}
    </div>
)

export default ExplorePageBody;