import Icons from '@/components/shares/icons';
import SearchButton from './components/icon-search';
import { IconButton } from './components/icon-button';

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

  return (
    <div className="flex items-center space-x-4">
      <div className="flex justify-center gap-2">
        {icons.map((icon, index) => (
          <IconButton
            key={index}
            blackIcon={icon.blackIcon}
            blueIcon={icon.blueIcon}
            href={icon.href}
          />
        ))}
      </div>

      <div className="flex justify-center">
        <SearchButton />
      </div>
    </div>
  );
}
