import SearchBar, { SearchBarProps } from "client/views/components/common/searchbar/SearchBar";
import DetailPageBody, { DetailPageBodyProps } from "./body/DetailPageBody";

export interface DetailPageProps {
    title: string;
    searchbar: SearchBarProps;
    body: DetailPageBodyProps;
}

const DetailPage: React.FC<DetailPageProps> = (props: DetailPageProps) => {
    document.title = props.title;
    
    return (
        <div className="relative">
            <SearchBar {...props.searchbar} />
            <DetailPageBody {...props.body} />
        </div>
    );
};

export default DetailPage;