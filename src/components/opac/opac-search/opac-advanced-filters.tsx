import { useState, useRef } from 'react';

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import Icons from '@/components/shares/icons';
import OpacSearchAdvancedCategory from '@/components/opac/opac-search/opac-search-advanced/opac-search-advanced-category';
import { Separator } from '@/components/ui/separator';
import OpacAdvancedAccess from './opac-search-advanced/opac-search-advanced-access';
import OpacAdvancedDisplay from './opac-search-advanced/opac-search-advanced-display';
import OpacSearchAdvancedAndOr, {
  OpacSearchAdvancedAndOrHandle,
} from './opac-search-advanced/opac-search-advanced-and-or';
import { FilterType } from '@/types/opac-search';
import { useRouter } from '@/hooks/use-router';
interface OpacAdvancedFiltersProps {
  showAdvanced: boolean;
}

export default function OpacAdvancedFilters({ showAdvanced }: OpacAdvancedFiltersProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('material');
  const [filter, setFilter] = useState<Omit<FilterType, 'keywordFilters'>>({
    yearRange: [2000, 2020],
    documentTypes: [],
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

    const encodedFilter = encodeURIComponent(JSON.stringify(finalFilter));

    router.push(`/opac/search?p=&filters=${encodedFilter}`);
  };

  const handleReset = () => {
    setFilter({
      yearRange: [2000, 2020],
      documentTypes: [],
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
          <OpacSearchAdvancedCategory filter={filter} onChange={handleChange} />
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
