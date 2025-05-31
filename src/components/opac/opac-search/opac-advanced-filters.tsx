import { useState } from 'react';

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import OpacSearchAdvancedCategory, {
  CategoryFilterType,
} from '@/components/opac/opac-search/opac-search-advanced/opac-search-advanced-category';
import { Input } from '@/components/ui/input';
import Icons from '@/components/shares/icons';
import { Separator } from '@/components/ui/separator';

export type FilterType = CategoryFilterType & {
  // Thêm các trường filter khác nếu cần
};

interface OpacAdvancedFiltersProps {
  showAdvanced: boolean;
  categories: { id: number; name: string }[];
  onApply?: (filter: FilterType) => void;
}

export default function OpacAdvancedFilters({
  showAdvanced,
  categories,
  onApply,
}: OpacAdvancedFiltersProps) {
  const [activeTab, setActiveTab] = useState('material');
  const [filter, setFilter] = useState<FilterType>({
    category: 'all',
    author: '',
    yearRange: [2000, 2020],
    documentTypes: [],
  });

  const handleChange = (changed: Partial<FilterType>) => {
    setFilter((prev) => ({ ...prev, ...changed }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onApply) onApply(filter);
  };

  const handleReset = () => {
    setFilter({ category: 'all', author: '', yearRange: [2000, 2020], documentTypes: [] });
  };

  if (!showAdvanced) return null;

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4 rounded border p-4">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="flex-1">
            <Label htmlFor="category">Danh mục</Label>
            <Select
              value={filter.category}
              onValueChange={(val) => handleChange({ category: val })}
            >
              <SelectTrigger id="category" className="mt-1 w-full">
                <SelectValue placeholder="Tất cả" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả</SelectItem>
                {categories.map((cat) => (
                  <SelectItem key={cat.id} value={String(cat.id)}>
                    {cat.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex-1">
            <Label htmlFor="author">Tác giả</Label>
            <Input
              id="author"
              value={filter.author}
              onChange={(e) => handleChange({ author: e.target.value })}
              placeholder="Nhập tên tác giả"
              className="mt-1"
            />
          </div>
        </div>

        <Separator />

        <TabsList className="mb-4 grid w-full grid-cols-3">
          <TabsTrigger
            value="material"
            className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
          >
            <Icons.bookOpen className="mr-2 h-4 w-4" />
            Loại tài liệu
          </TabsTrigger>
          <TabsTrigger
            value="access"
            className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
          >
            <Icons.bookA className="mr-2 h-4 w-4" />
            Truy cập
          </TabsTrigger>
          <TabsTrigger
            value="display"
            className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
          >
            <Icons.filter className="mr-2 h-4 w-4" />
            Hiển thị
          </TabsTrigger>
        </TabsList>

        <Separator />

        <TabsContent value="material">
          <OpacSearchAdvancedCategory
            filter={filter}
            onChange={handleChange}
            categories={categories}
          />
        </TabsContent>
        <TabsContent value="access">
          <div>Chức năng lọc truy cập (placeholder)</div>
        </TabsContent>
        <TabsContent value="display">
          <div>Chức năng lọc hiển thị (placeholder)</div>
        </TabsContent>
      </Tabs>
      <div className="mt-2 flex justify-between gap-2">
        <Button type="button" variant="outline" onClick={handleReset}>
          <Icons.refreshCw className="mr-2 h-4 w-4" />
          Đặt lại
        </Button>
        <Button type="submit" className="bg-primary text-white">
          <Icons.check className="mr-1 h-4 w-4" />
          Áp dụng
        </Button>
      </div>
    </form>
  );
}
