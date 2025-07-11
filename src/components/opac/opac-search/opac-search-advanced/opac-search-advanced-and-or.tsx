import { Input } from '@/components/ui/input';
import { useState, forwardRef, useImperativeHandle } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Icons from '@/components/shares/icons';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';

// Define the interface for the exposed handle
export interface OpacSearchAdvancedAndOrHandle {
  getKeywordFilters: () => { field: string; keyword: string; logic?: string }[];
  resetFilters: () => void;
}

// Use forwardRef to allow parent component to get a ref to this component
const OpacSearchAdvancedAndOr = forwardRef<OpacSearchAdvancedAndOrHandle>((props, ref) => {
  const t = useTranslations('opac.search.advanced_filters.and_or');

  const searchFields = [
    { label: t('search_fields.all'), value: 'all' },
    { label: t('search_fields.title'), value: 'title' },
    { label: t('search_fields.author'), value: 'author' },
    { label: t('search_fields.subject'), value: 'subject' },
    { label: t('search_fields.publisher'), value: 'publisher' },
    { label: t('search_fields.isbn'), value: 'isbn' },
  ];

  const logicOptions = ['AND', 'OR'];

  // Keep local state for filters
  const [filters, setFilters] = useState([
    { field: 'all', keyword: '', logic: 'AND' },
    { field: 'title', keyword: '', logic: 'AND' },
    { field: 'author', keyword: '' },
  ]);

  const handleChangeFilter = (index: number, key: string, value: string) => {
    const newFilters = [...filters];
    newFilters[index] = { ...newFilters[index], [key]: value };
    setFilters(newFilters);
  };

  const handleAddFilter = () => {
    setFilters([...filters, { field: 'all', keyword: '', logic: 'AND' }]);
  };

  const handleRemoveFilter = (index: number) => {
    if (filters.length > 1) {
      setFilters(filters.filter((_, i) => i !== index));
    }
  };

  // Expose the getKeywordFilters and resetFilters functions via the ref
  useImperativeHandle(ref, () => ({
    getKeywordFilters: () => filters,
    resetFilters: () =>
      setFilters([
        { field: 'all', keyword: '', logic: 'AND' },
        { field: 'title', keyword: '', logic: 'AND' },
        { field: 'author', keyword: '' },
      ]), // Reset to default initial state
  }));

  return (
    <div className="space-y-4">
      {filters.map((filter, idx) => (
        <div key={idx} className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
          {/* Select Field */}
          <Select
            value={filter.field}
            onValueChange={(val) => handleChangeFilter(idx, 'field', val)}
          >
            <SelectTrigger className="w-full sm:w-[200px]">
              <SelectValue placeholder={t('field_placeholder')} />
            </SelectTrigger>
            <SelectContent>
              {searchFields.map((field) => (
                <SelectItem key={field.value} value={field.value}>
                  {field.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Keyword Input */}
          <Input
            placeholder={t('keyword_placeholder')}
            value={filter.keyword}
            onChange={(e) => handleChangeFilter(idx, 'keyword', e.target.value)}
            className="w-full flex-1"
          />

          {/* Logic Select / Add Button */}
          <div className="flex items-center gap-2">
            {idx < filters.length - 1 ? (
              <Select
                value={filter.logic}
                onValueChange={(val) => handleChangeFilter(idx, 'logic', val)}
              >
                <SelectTrigger className="w-[100px]">
                  <SelectValue placeholder={t('logic_placeholder')} />
                </SelectTrigger>
                <SelectContent>
                  {logicOptions.map((logic) => (
                    <SelectItem key={logic} value={logic}>
                      {logic}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            ) : (
              <Button
                variant="ghost"
                onClick={handleAddFilter}
                className="text-muted-foreground flex items-center gap-1 text-sm"
              >
                <Icons.plus size={16} />
                {t('add_row')}
              </Button>
            )}

            {/* Delete Button */}
            {filters.length > 1 && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleRemoveFilter(idx)}
                className="hover:text-destructive text-red-500"
              >
                <Icons.trash2 size={16} />
              </Button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
});

export default OpacSearchAdvancedAndOr;
