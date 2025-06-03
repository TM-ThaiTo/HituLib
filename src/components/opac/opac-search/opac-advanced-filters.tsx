import { useState, useRef } from 'react';

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import Icons from '@/components/shares/icons';
import OpacSearchAdvancedCategory, {
  CategoryFilterType,
} from '@/components/opac/opac-search/opac-search-advanced/opac-search-advanced-category';
import { Separator } from '@/components/ui/separator';
import OpacAdvancedAccess from './opac-search-advanced/opac-search-advanced-access';
import OpacAdvancedDisplay from './opac-search-advanced/opac-search-advanced-display';
import OpacSearchAdvancedAndOr, {
  OpacSearchAdvancedAndOrHandle,
} from './opac-search-advanced/opac-search-advanced-and-or';

export type FilterType = CategoryFilterType & {
  accessType?: string;
  available?: boolean;
  fulltext?: boolean;
  onlineAccess?: boolean;
  openAccess?: boolean;
  locations?: string[];
  availability?: string[];
  sortBy?: string;
  resultsPerPage?: number;
  displayFields?: string[];
  keywordFilters: { field: string; keyword: string; logic?: string }[];
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
  const [filter, setFilter] = useState<Omit<FilterType, 'keywordFilters'>>({
    category: 'all',
    author: '',
    yearRange: [2000, 2020],
    documentTypes: [],
    accessType: 'all',
    available: false,
    fulltext: false,
    onlineAccess: false,
    openAccess: false,
    locations: [],
    availability: [],
    sortBy: 'relevance',
    resultsPerPage: 10,
    displayFields: [],
  });

  const keywordFilterRef = useRef<OpacSearchAdvancedAndOrHandle>(null);

  const handleChange = (changed: Partial<Omit<FilterType, 'keywordFilters'>>) => {
    setFilter((prev) => ({ ...prev, ...changed }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const keywordFilters = keywordFilterRef.current?.getKeywordFilters() || [];

    const finalFilter: FilterType = {
      ...filter,
      keywordFilters: keywordFilters,
    };

    if (onApply) onApply(finalFilter);
  };

  const handleReset = () => {
    setFilter({
      category: 'all',
      author: '',
      yearRange: [2000, 2020],
      documentTypes: [],
      accessType: 'all',
      available: false,
      fulltext: false,
      onlineAccess: false,
      openAccess: false,
      locations: [],
      availability: [],
      sortBy: 'relevance',
      resultsPerPage: 10,
      displayFields: [],
    });
    keywordFilterRef.current?.resetFilters();
  };

  if (!showAdvanced) return null;

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4 rounded border p-4">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <OpacSearchAdvancedAndOr ref={keywordFilterRef} />

        <Separator />

        <TabsList className="mb-4 grid w-full grid-cols-3">
          <TabsTrigger
            value="material"
            className="cursor-pointer data-[state=active]:bg-blue-600 data-[state=active]:text-white"
          >
            <Icons.bookOpen className="mr-2 h-4 w-4" />
            Loại tài liệu
          </TabsTrigger>
          <TabsTrigger
            value="access"
            className="cursor-pointer data-[state=active]:bg-blue-600 data-[state=active]:text-white"
          >
            <Icons.bookA className="mr-2 h-4 w-4" />
            Truy cập
          </TabsTrigger>
          <TabsTrigger
            value="display"
            className="cursor-pointer data-[state=active]:bg-blue-600 data-[state=active]:text-white"
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
          <OpacAdvancedAccess filter={filter} onChange={handleChange} />
        </TabsContent>
        <TabsContent value="display">
          <OpacAdvancedDisplay filter={filter} onChange={handleChange} />
        </TabsContent>
      </Tabs>

      <Separator className="my-4" />

      <div className="mt-2 flex justify-between gap-2">
        <Button type="button" variant="outline" onClick={handleReset} className="cursor-pointer">
          <Icons.refreshCw className="mr-2 h-4 w-4" />
          Đặt lại
        </Button>
        <Button type="submit" className="bg-primary cursor-pointer text-white">
          <Icons.check className="mr-1 h-4 w-4" />
          Áp dụng
        </Button>
      </div>
    </form>
  );
}
