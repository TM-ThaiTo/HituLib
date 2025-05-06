import Icons from '@/components/shares/icons';
import Link from 'next/link';

export default function IconAction() {
    const iconSize = 18;
    const iconColorBlack = 'black';
    const iconColorBlue = '#3B82F6';

    const icons = [
        {
            blackIcon: <Icons.spaceX size={iconSize} color={iconColorBlack} />,
            blueIcon: <Icons.spaceX size={iconSize} color={iconColorBlue} />,
            href: 'https://x.com',
        },
        {
            blackIcon: <Icons.facebook size={iconSize} color={iconColorBlack} />,
            blueIcon: <Icons.facebook size={iconSize} color={iconColorBlue} />,
            href: 'https://facebook.com',
        },
        {
            blackIcon: <Icons.youtube size={iconSize} color={iconColorBlack} />,
            blueIcon: <Icons.youtube size={iconSize} color={iconColorBlue} />,
            href: 'https://youtube.com',
        },
    ];

    const IconButton = ({
        blackIcon,
        blueIcon,
        href,
    }: {
        blackIcon: React.ReactNode;
        blueIcon: React.ReactNode;
        href: string;
    }) => {
        return (
            <Link
                href={href}
                className="group relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-gray-300 bg-white"
            >
                <div className="absolute transform transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0">
                    {blackIcon}
                </div>
                <div className="absolute translate-y-[200%] transform opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {blueIcon}
                </div>
            </Link>
        );
    };

    return (
        <div className="flex items-center space-x-4">
            <div className="flex justify-center gap-2 p-4">
                {icons.map((icon, index) => (
                    <IconButton
                        key={index}
                        blackIcon={icon.blackIcon}
                        blueIcon={icon.blueIcon}
                        href={icon.href}
                    />
                ))}
            </div>
        </div>
    );
}
