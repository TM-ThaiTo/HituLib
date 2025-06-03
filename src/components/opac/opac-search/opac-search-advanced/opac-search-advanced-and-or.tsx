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

// Define the interface for the exposed handle
export interface OpacSearchAdvancedAndOrHandle {
  getKeywordFilters: () => { field: string; keyword: string; logic?: string }[];
  resetFilters: () => void;
}

// Use forwardRef to allow parent component to get a ref to this component
const OpacSearchAdvancedAndOr = forwardRef<OpacSearchAdvancedAndOrHandle>((props, ref) => {
  const searchFields = [
    { label: 'Tất cả trường', value: 'all' },
    { label: 'Nhan đề', value: 'title' },
    { label: 'Tác giả', value: 'author' },
    { label: 'Chủ đề', value: 'subject' },
    { label: 'Nhà xuất bản', value: 'publisher' },
    { label: 'ISBN/ISSN', value: 'isbn' },
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
        <div key={idx} className="flex flex-col items-start gap-2 sm:flex-row sm:items-center">
          <Select
            value={filter.field}
            onValueChange={(val) => handleChangeFilter(idx, 'field', val)}
          >
            <SelectTrigger className="w-[200px] cursor-pointer">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {searchFields.map((field) => (
                <SelectItem key={field.value} value={field.value}>
                  {field.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Input
            placeholder="Nhập từ khóa tìm kiếm"
            value={filter.keyword}
            onChange={(e) => handleChangeFilter(idx, 'keyword', e.target.value)}
            className="flex-1"
          />

          {idx < filters.length - 1 ? (
            <Select
              value={filter.logic}
              onValueChange={(val) => handleChangeFilter(idx, 'logic', val)}
            >
              <SelectTrigger className="w-[100px]">
                <SelectValue />
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
              className="text-muted-foreground flex items-center gap-2 text-sm"
            >
              <Icons.plus size={16} className="mr-1" />
              Thêm dòng
            </Button>
          )}

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
      ))}
    </div>
  );
});

export default OpacSearchAdvancedAndOr;
