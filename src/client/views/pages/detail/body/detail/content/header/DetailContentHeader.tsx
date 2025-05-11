import MediaType from "shared/types/MediaType";

export interface DetailContentHeaderProps {
    title: string;
    subtitle?: string;
    mediaType?: MediaType;
}

const DetailContentHeader: React.FC<DetailContentHeaderProps> = (props: DetailContentHeaderProps) => (
    <div className="mb-6">
        <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-2 flex items-center">
            {props.title}
            <span className="ml-4 text-sm font-normal px-2 py-1 bg-yellow-500 rounded-md text-black">
                {props.mediaType}
            </span>
        </h1>
        {props.subtitle && (
            <div className="flex flex-wrap items-center gap-4 text-white/70">
                <span>{props.subtitle}</span>
            </div>
        )}
    </div>
);

export default DetailContentHeader;