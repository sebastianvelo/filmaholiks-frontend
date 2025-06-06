import { IconGitHub, IconGlobe, IconLinkedIn, IconMail } from "@components/svg/Svg";

const SocialIcon = (icon: string) => {
    switch (icon) {
        case "linkedin":
            return <IconLinkedIn />;
        case "github":
            return <IconGitHub />;
        case "mail":
            return <IconMail />;
        case "portfolio":
            return <IconGlobe />
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
    const className = "text-secondary-800 hover:text-primary-500 dark:text-secondary-300 dark:hover:text-primary-500 transition-colors";
    return (
        <a key={name} href={url} target="_blank" rel="noopener noreferrer" className={className} aria-label={name}>
            {SocialIcon(id)}
        </a>
    );
};

export default FooterIcon;
