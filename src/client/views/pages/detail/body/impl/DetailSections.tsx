import TabsContainer from "@components/modern-tabs/TabsContainer";
import { LineDivider } from "client/common/components/svg/Svg";
import CardsSection, { CardsSectionProps } from "client/views/components/common/cards/CardsSection";

export interface DetailSectionsProps {
    sections?: CardsSectionProps[],
}

const DetailSections: React.FC<DetailSectionsProps> = (props: DetailSectionsProps) => (
    props.sections ?
        (
            <>
                <TabsContainer
                    tabs={props.sections.filter(section => (section.cards?.length ?? 0) > 0).map(section => ({
                        id: `sect-${section.title}`,
                        content: <CardsSection cards={section.cards} key={section.title} id={section.title?.split(" ")[0]} />,
                        label: section.title ?? "error"
                    }))}
                />
                <LineDivider />
            </>
        ) :
        <></>
);

export default DetailSections;