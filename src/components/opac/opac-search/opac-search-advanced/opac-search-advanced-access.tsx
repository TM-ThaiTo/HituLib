import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import React from 'react';
import Icons from '@/components/shares/icons';

export interface AccessFilterProps {
  filter: {
    available?: boolean;
    fulltext?: boolean;
    onlineAccess?: boolean;
    openAccess?: boolean;
    accessType?: string;
    locations?: string[];
    availability?: string[];
  };
  onChange: (changed: Partial<AccessFilterProps['filter']>) => void;
  onReset?: () => void;
}

export default function OpacAdvancedAccess({ filter, onChange }: AccessFilterProps) {
  const handleLocationChange = (location: string) => {
    const prev = filter.locations || [];
    if (prev.includes(location)) {
      onChange({ locations: prev.filter((l) => l !== location) });
    } else {
      onChange({ locations: [...prev, location] });
    }
  };

  const handleAvailabilityChange = (availability: string) => {
    const prev = filter.availability || [];
    if (prev.includes(availability)) {
      onChange({ availability: prev.filter((l) => l !== availability) });
    } else {
      onChange({ availability: [...prev, availability] });
    }
  };

  const ItemsAvailability = [
    {
      id: 'availability-available',
      label: 'Có sẵn',
      checked: filter.availability?.includes('available') || false,
      onChange: () => handleAvailabilityChange('available'),
    },
    {
      id: 'availability-online',
      label: 'Truy cập trực tuyến',
      checked: filter.availability?.includes('onlineAccess') || false,
      onChange: () => handleAvailabilityChange('onlineAccess'),
    },
    {
      id: 'availability-fulltext',
      label: 'Có toàn văn',
      checked: filter.availability?.includes('fulltext') || false,
      onChange: () => handleAvailabilityChange('fulltext'),
    },
    {
      id: 'availability-open-access',
      label: 'Truy cập mở',
      checked: filter.availability?.includes('openAccess') || false,
      onChange: () => handleAvailabilityChange('openAccess'),
    },
  ];

  const ItemsLocation = [
    {
      id: 'location-main',
      label: 'Thư viện trung tâm',
      checked: filter.locations?.includes('main') || false,
      icon: <Icons.mapPin className="h-4 w-4 text-red-600" />,
      onChange: () => handleLocationChange('main'),
    },
    {
      id: 'location-it',
      label: 'Thư viện khoa CNTT',
      checked: filter.locations?.includes('it') || false,
      icon: <Icons.mapPin className="h-4 w-4 text-blue-600" />,
      onChange: () => handleLocationChange('it'),
    },
    {
      id: 'location-engineering',
      label: 'Thư viện khoa Kỹ thuật',
      checked: filter.locations?.includes('engineering') || false,
      icon: <Icons.mapPin className="h-4 w-4 text-green-600" />,
      onChange: () => handleLocationChange('engineering'),
    },
    {
      id: 'location-economics',
      label: 'Thư viện khoa Kinh tế',
      checked: filter.locations?.includes('economics') || false,
      icon: <Icons.mapPin className="h-4 w-4 text-amber-600" />,
      onChange: () => handleLocationChange('economics'),
    },
  ];

  const ItemsAccessType = [
    {
      id: 'access-all',
      label: 'Tất cả',
      value: 'all',
    },
    {
      id: 'access-free',
      label: 'Miễn phí',
      value: 'free',
    },
    {
      id: 'access-subscription',
      label: 'Yêu cầu đăng ký',
      value: 'subscription',
    },
    {
      id: 'access-restricted',
      label: 'Hạn chế truy cập',
      value: 'restricted',
    },
  ];

  return (
    <section className="flex flex-col gap-4">
      <div>
        <h3 className="mb-4 text-sm font-medium">Tình trạng</h3>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
          {ItemsAvailability.map((item) => (
            <div key={item.id} className="flex items-center space-x-2">
              <Checkbox id={item.id} checked={item.checked} onCheckedChange={item.onChange} />
              <Label htmlFor={item.id} className="cursor-pointer text-sm">
                {item.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Separator className="my-4" />

      <div>
        <h3 className="mb-4 text-sm font-medium">Vị trí</h3>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
          {ItemsLocation.map((item) => (
            <div key={item.id} className="flex items-center space-x-2">
              <Checkbox id={item.id} checked={item.checked} onCheckedChange={item.onChange} />
              <div className="flex items-center space-x-2">
                {item.icon}
                <Label htmlFor={item.id} className="cursor-pointer text-sm">
                  {item.label}
                </Label>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Separator className="my-4" />

      <div>
        <h3 className="mb-4 text-sm font-medium">Loại truy cập</h3>
        <RadioGroup
          value={filter.accessType ?? 'all'}
          onValueChange={(val) => onChange({ accessType: val })}
          className="space-y-2"
        >
          {ItemsAccessType.map((item) => (
            <div key={item.id} className="flex items-center space-x-2">
              <RadioGroupItem value={item.value} id={item.id} />
              <Label htmlFor={item.id} className="cursor-pointer text-sm">
                {item.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </section>
  );
}
