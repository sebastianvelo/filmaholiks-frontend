import { IconGitHub, IconLinkedIn, IconMail } from "@components/svg/Svg";

const SocialIcon = (icon: string) => {
    switch (icon) {
        case "linkedin":
            return <IconLinkedIn />;
        case "github":
            return <IconGitHub />;
        case "mail":
            return <IconMail />;
        default:
            return null;
    }
};

interface FooterIconProps {
    id: string;
    name: string;
    url: string;
}

const FooterIcon: React.FC<FooterIconProps> = ({ id, name, url }) => {
    const className = "text-secondary-500 hover:text-primary-500 dark:text-secondary-200 dark:hover:text-primary-500-400 transition-colors";
    return (
        <a key={name} href={url} target="_blank" rel="noopener noreferrer" className={className} aria-label={name}>
            {SocialIcon(id)}
        </a>
    );
};

export default FooterIcon;
