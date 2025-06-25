import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import React from 'react';
import { useTranslations } from 'next-intl';

export interface DisplayFilterProps {
  filter: {
    sortBy?: string;
    resultsPerPage?: number;
    displayFields?: string[];
  };
  onChange: (changed: Partial<DisplayFilterProps['filter']>) => void;
}

export default function OpacAdvancedDisplay({ filter, onChange }: DisplayFilterProps) {
  const t = useTranslations('opac.search.advanced_filters.display');

  const sortOptions = [
    { value: 'relevance', label: t('sort_options.relevance') },
    { value: 'newest', label: t('sort_options.newest') },
    { value: 'oldest', label: t('sort_options.oldest') },
    { value: 'title_asc', label: t('sort_options.title_asc') },
    { value: 'title_desc', label: t('sort_options.title_desc') },
    { value: 'author_asc', label: t('sort_options.author_asc') },
    { value: 'author_desc', label: t('sort_options.author_desc') },
  ];

  const resultsPerPageOptions = [
    { value: 10, label: t('results_options.10') },
    { value: 20, label: t('results_options.20') },
    { value: 50, label: t('results_options.50') },
    { value: 100, label: t('results_options.100') },
  ];

  const displayFieldOptions = [
    { value: 'field-title', label: t('field_options.title'), defaultChecked: true, disabled: true },
    { value: 'field-author', label: t('field_options.author'), defaultChecked: true, disabled: false },
    { value: 'field-publisher', label: t('field_options.publisher'), defaultChecked: true, disabled: false },
    { value: 'field-year', label: t('field_options.year'), defaultChecked: true, disabled: false },
    { value: 'field-description', label: t('field_options.description'), defaultChecked: false, disabled: false },
    { value: 'field-subject', label: t('field_options.subject'), defaultChecked: false, disabled: false },
  ];

  const handleFieldChange = (field: string, checked: boolean) => {
    const prevFields = filter.displayFields || [];
    if (checked) {
      onChange({ displayFields: [...prevFields, field] });
    } else {
      onChange({ displayFields: prevFields.filter((f) => f !== field) });
    }
  };

  return (
    <section className="flex flex-col gap-4">
      {/* Sắp xếp theo */}
      <div>
        <Label htmlFor="sort-by">{t('sort_by')}</Label>
        <Select
          value={filter.sortBy ?? 'relevance'}
          onValueChange={(val) => onChange({ sortBy: val })}
        >
          <SelectTrigger id="sort-by" className="mt-1 w-full cursor-pointer">
            <SelectValue placeholder={t('sort_placeholder')} />
          </SelectTrigger>
          <SelectContent>
            {sortOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="results-per-page">{t('results_per_page')}</Label>
        <Select
          value={String(filter.resultsPerPage ?? 10)}
          onValueChange={(val) => onChange({ resultsPerPage: Number(val) })}
        >
          <SelectTrigger id="results-per-page" className="mt-1 w-full cursor-pointer">
            <SelectValue placeholder={t('results_placeholder')} />
          </SelectTrigger>
          <SelectContent>
            {resultsPerPageOptions.map((option) => (
              <SelectItem key={option.value} value={String(option.value)}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium">{t('display_fields')}</h3>
        <div className="flex flex-col gap-2">
          {displayFieldOptions.map((field) => (
            <div key={field.value} className="flex items-center space-x-2">
              <Checkbox
                id={field.value}
                onCheckedChange={(checked: boolean) => handleFieldChange(field.value, checked)}
                disabled={field.disabled}
                defaultChecked={field.defaultChecked}
              />
              <Label htmlFor={field.value} className="cursor-pointer text-sm">
                {field.label}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
