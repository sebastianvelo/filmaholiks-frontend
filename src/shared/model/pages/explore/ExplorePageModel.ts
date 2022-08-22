import SearchBarModel from "shared/model/components/SearchBarModel";
import { CardsSectionModel } from "shared/model/components/section/Section";

export interface ExplorePageBodyModel {
    sections?: CardsSectionModel[];
}

interface ExplorePageModel {
    title: string;
    searchbar: SearchBarModel;
    body: ExplorePageBodyModel;
}

export default ExplorePageModel;