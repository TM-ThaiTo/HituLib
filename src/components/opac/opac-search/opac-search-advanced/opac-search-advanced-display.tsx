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

export interface DisplayFilterProps {
  filter: {
    sortBy?: string;
    resultsPerPage?: number;
    displayFields?: string[];
  };
  onChange: (changed: Partial<DisplayFilterProps['filter']>) => void;
}

export default function OpacAdvancedDisplay({ filter, onChange }: DisplayFilterProps) {
  const sortOptions = [
    { value: 'relevance', label: 'Độ liên quan' },
    { value: 'newest', label: 'Mới nhất' },
    { value: 'oldest', label: 'Cũ nhất' },
    { value: 'title_asc', label: 'Tên sách (A-Z)' },
    { value: 'title_desc', label: 'Tên sách (Z-A)' },
    { value: 'author_asc', label: 'Tác giả (A-Z)' },
    { value: 'author_desc', label: 'Tác giả (Z-A)' },
  ];

  const resultsPerPageOptions = [
    { value: 10, label: '10 kết quả' },
    { value: 20, label: '20 kết quả' },
    { value: 50, label: '50 kết quả' },
    { value: 100, label: '100 kết quả' },
  ];

  const displayFieldOptions = [
    { value: 'field-title', label: 'Nhan đề', defaultChecked: true, disabled: true },
    { value: 'field-author', label: 'Tác giả', defaultChecked: true, disabled: false },
    { value: 'field-publisher', label: 'Nhà xuất bản', defaultChecked: true, disabled: false },
    { value: 'field-year', label: 'Năm xuất bản', defaultChecked: true, disabled: false },
    { value: 'field-description', label: 'Mô tả', defaultChecked: false, disabled: false },
    { value: 'field-subject', label: 'Chủ đề', defaultChecked: false, disabled: false },
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
        <Label htmlFor="sort-by">Sắp xếp theo</Label>
        <Select
          value={filter.sortBy ?? 'relevance'}
          onValueChange={(val) => onChange({ sortBy: val })}
        >
          <SelectTrigger id="sort-by" className="mt-1 w-full cursor-pointer">
            <SelectValue placeholder="Chọn cách sắp xếp" />
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
        <Label htmlFor="results-per-page">Kết quả mỗi trang</Label>
        <Select
          value={String(filter.resultsPerPage ?? 10)}
          onValueChange={(val) => onChange({ resultsPerPage: Number(val) })}
        >
          <SelectTrigger id="results-per-page" className="mt-1 w-full cursor-pointer">
            <SelectValue placeholder="Chọn số kết quả" />
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
        <h3 className="mb-2 text-sm font-medium">Hiển thị trường</h3>
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
