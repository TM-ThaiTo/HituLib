import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import React from 'react';
import Icons from '@/components/shares/icons';
import { ACCESS_OPTIONS, AVAILABILITY_OPTIONS, LOCATION_OPTIONS } from '@/constants/opac-search';
import { useTranslations } from 'next-intl';

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
  const t = useTranslations('opac.search.advanced_filters.access');

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

  const availabilityOptions = AVAILABILITY_OPTIONS(filter, t, handleAvailabilityChange);
  const locationOptions = LOCATION_OPTIONS(filter, t, handleLocationChange);
  const accessOptions = ACCESS_OPTIONS(t);

  return (
    <section className="flex flex-col gap-4">
      {/* tình trạng */}
      <div>
        <h3 className="mb-4 text-sm font-medium">{t('status')}</h3>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
          {availabilityOptions.map((item) => (
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

      {/* vị trí */}
      <div>
        <h3 className="mb-4 text-sm font-medium">{t('location')}</h3>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
          {locationOptions.map((item) => (
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

      {/* loại truy cập */}
      <div>
        <h3 className="mb-4 text-sm font-medium">{t('access_type')}</h3>
        <RadioGroup
          value={filter.accessType ?? 'all'}
          onValueChange={(val) => onChange({ accessType: val })}
          className="space-y-2"
        >
          {accessOptions.map((item) => (
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
