import SearchBarModel from "model/components/SearchBarModel";
import { CardsSectionModel } from "model/components/section/Section";

export interface SearchResultPageBodyModel {
    results?: CardsSectionModel;
}

interface SearchResultPageModel {
    title: string;
    searchbar: SearchBarModel;
    body: SearchResultPageBodyModel;
}

export default SearchResultPageModel;