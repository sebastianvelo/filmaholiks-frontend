export interface DetailContentInfoProps {
    data: {
        title: string;
        description: string;
    }[];
    theresVideo?: boolean;
}

const DetailContentInfo: React.FC<DetailContentInfoProps> = (props: DetailContentInfoProps) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {props.data?.map((item, index) => item && (
                <div
                    key={index}
                    className="backdrop-blur-lg bg-white/50 dark:bg-white/5 rounded-md p-2 md:p-4 hover:bg-white/10 transition-colors border-l-2 border-secondary-500 dark:border-primary-500"
                >
                    <h3 className="text-black/60 dark:text-white/60 text-sm font-medium mb-1">{item.title}</h3>
                    <p className="text-black/80 dark:text-white text-xs md:text-sm font-medium">{item.description}</p>
                </div>
            ))}
        </div>
    );
}

export default DetailContentInfo;