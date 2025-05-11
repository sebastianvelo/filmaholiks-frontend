export interface DetailContentDescriptionProps {
    title: string;
    description: string;
}

const DetailContentDescription: React.FC<DetailContentDescriptionProps> = (props: DetailContentDescriptionProps) => (
    <div className="mb-8">
        <h2 className="text-xl font-semibold text-black/90 dark:text-white/90 mb-2">{props.title}</h2>
        <p className="text-black/90 dark:text-white/80 text-sm md:text-lg leading-relaxed text-justify">
            {props.description}
        </p>
    </div>
);

export default DetailContentDescription;