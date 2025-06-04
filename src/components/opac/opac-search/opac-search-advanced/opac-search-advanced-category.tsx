import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import Icons from '@/components/shares/icons';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { CategoryFilterType } from '@/types/opac-search';

const DOCUMENT_TYPE_OPTIONS = [
  {
    id: 'material-book',
    label: 'Sách in',
    icon: <Icons.bookOpen className="mr-1 ml-1 h-4 w-4 text-blue-700" />,
    color: 'text-blue-700',
  },
  {
    id: 'material-journal',
    label: 'Tạp chí/Báo',
    icon: <Icons.news className="mr-1 ml-1 h-4 w-4 text-purple-500" />,
    color: 'text-purple-500',
  },
  {
    id: 'material-thesis',
    label: 'Luận văn/Luận án',
    icon: <Icons.news className="mr-1 ml-1 h-4 w-4 text-orange-500" />,
    color: 'text-orange-500',
  },
  {
    id: 'material-video',
    label: 'Video/Đa phương tiện',
    icon: <Icons.camera className="mr-1 ml-1 h-4 w-4 text-red-500" />,
    color: 'text-red-500',
  },
  {
    id: 'material-database',
    label: 'Cơ sở dữ liệu',
    icon: <Icons.database className="mr-1 ml-1 h-4 w-4 text-blue-400" />,
    color: 'text-blue-400',
  },
  {
    id: 'material-ebook',
    label: 'Sách điện tử',
    icon: <Icons.bookA className="mr-1 ml-1 h-4 w-4 text-green-600" />,
    color: 'text-green-600',
  },
  {
    id: 'material-audio',
    label: 'Âm thanh',
    icon: <Icons.music className="mr-1 ml-1 h-4 w-4 text-orange-400" />,
    color: 'text-orange-400',
  },
];

const LANGUAGE_OPTIONS = [
  {
    id: 'language-vietnamese',
    label: 'Tiếng Việt',
    icon: <Icons.mapPin className="mr-1 h-4 w-4 text-red-500" />,
  },
  {
    id: 'language-english',
    label: 'Tiếng Anh',
    icon: <Icons.languages className="mr-1 h-4 w-4 text-blue-500" />,
  },
  {
    id: 'language-chinese',
    label: 'Tiếng Trung',
    icon: <Icons.languages className="mr-1 h-4 w-4 text-yellow-500" />,
  },
  {
    id: 'language-japanese',
    label: 'Tiếng Nhật',
    icon: <Icons.languages className="mr-1 h-4 w-4 text-pink-500" />,
  },
];

interface Props {
  filter: CategoryFilterType;
  onChange: (changed: Partial<CategoryFilterType>) => void;
}

export default function OpacSearchAdvancedCategory({ filter, onChange }: Props) {
  const handleCheckbox = (id: string) => {
    const exists = filter.documentTypes.includes(id);
    const newTypes = exists
      ? filter.documentTypes.filter((t) => t !== id)
      : [...filter.documentTypes, id];
    onChange({ documentTypes: newTypes });
  };

  const handleLanguageCheckbox = (id: string) => {
    const langs = filter.languages || [];
    const exists = langs.includes(id);
    const newLangs = exists ? langs.filter((l) => l !== id) : [...langs, id];
    onChange({ languages: newLangs });
  };

  const renderSlider = () => {
    return (
      <div className="flex flex-1 flex-col">
        <Label htmlFor="year">Năm xuất bản</Label>
        <div className="mt-1 mb-2 flex items-center">
          <Icons.calendar className="mr-1 h-4 w-4 text-gray-500" />
          <span className="text-muted-foreground text-sm">
            Từ năm:{' '}
            <b>
              {filter.yearRange[0]} đến {filter.yearRange[1]}
            </b>
          </span>
        </div>
        <Slider
          id="year"
          min={1800}
          max={2025}
          step={1}
          value={filter.yearRange}
          defaultValue={[2000, 2020]}
          onValueChange={(vals) => onChange({ yearRange: [vals[0], vals[1]] })}
          className="w-full cursor-pointer"
        />
        <div className="text-muted-foreground mt-2 flex justify-between text-sm">
          <span>{1800}</span>
          <span>{2025}</span>
        </div>
      </div>
    );
  };

  const renderCheckboxDocumentType = () => {
    return (
      <div>
        <Label className="mb-2 block">Loại tài liệu</Label>
        <div className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-2">
          {DOCUMENT_TYPE_OPTIONS.map((type) => (
            <div key={type.id} className="flex items-center space-x-2">
              <Checkbox
                id={`doc-type-${type.id}`}
                checked={filter.documentTypes.includes(type.id)}
                onCheckedChange={() => handleCheckbox(type.id)}
                className="border-blue-300"
              />
              <Label
                htmlFor={`doc-type-${type.id}`}
                className="flex cursor-pointer items-center text-sm select-none"
              >
                {type.icon}
                <span className="font-medium text-gray-800">{type.label}</span>
              </Label>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderLanguges = () => {
    return (
      <div>
        <Label className="mb-2 block">Ngôn ngữ</Label>
        <div className="grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-2">
          {LANGUAGE_OPTIONS.map((lang) => (
            <div key={lang.id} className="flex items-center space-x-2">
              <Checkbox
                id={`lang-${lang.id}`}
                checked={(filter.languages || []).includes(lang.id)}
                onCheckedChange={() => handleLanguageCheckbox(lang.id)}
                className="border-blue-300"
              />
              <Label
                htmlFor={`lang-${lang.id}`}
                className="flex cursor-pointer items-center text-sm select-none"
              >
                {lang.icon}
                <span className="font-medium text-gray-800">{lang.label}</span>
              </Label>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-4">
      {renderCheckboxDocumentType()}
      <Separator className="my-4" />
      {renderSlider()}
      <Separator className="my-4" />
      {renderLanguges()}
    </div>
  );
}
