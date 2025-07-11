import React, { useEffect, useRef, useState } from 'react';
import { FilterType } from '@/types/opac-search';
import { useRouter } from '@/hooks/use-router';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Icons from '@/components/shares/icons';
import {
  AVAILABILITY_OPTIONS,
  DOCUMENT_TYPE_OPTIONS,
  LANGUAGE_OPTIONS,
  LOCATION_OPTIONS,
} from '@/constants/opac-search';
import { useTranslations } from 'next-intl';

interface OpacSearchBarSelectProps {
  filters: any;
  q: any;
}

const OpacSearchBar: React.FC<OpacSearchBarSelectProps> = ({ filters, q }) => {
  const router = useRouter();
  const t = useTranslations('opac.search');
  const accessLocale = useTranslations('opac.search.advanced_filters.access');
  const categoryLocale = useTranslations('opac.search.advanced_filters.category');

  const [filter, setFilter] = useState<Omit<FilterType, 'keywordFilters'>>({
    yearRange: [2000, new Date().getFullYear()],
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

  const keywordFilterRef = useRef<any>(null);

  useEffect(() => {
    if (filters) {
      setFilter({
        yearRange: filters.yearRange || [2000, new Date().getFullYear()],
        documentTypes: filters.documentTypes || [],
        available: filters.available || false,
        fulltext: filters.fulltext || false,
        onlineAccess: filters.onlineAccess || false,
        openAccess: filters.openAccess || false,
        locations: filters.locations || [],
        availability: filters.availability || [],
        sortBy: filters.sortBy || 'relevance',
        resultsPerPage: filters.resultsPerPage || 10,
        displayFields: filters.displayFields || [],
      });
    }
  }, [filters]);

  const hasFilterChanged = true; // You can implement logic to check if filters have changed

  //**
  // hàm thay đổi giá trị search
  // */
  const onChange = (changedFilters: Partial<Omit<FilterType, 'keywordFilters'>>) => {
    setFilter((prevFilter) => ({ ...prevFilter, ...changedFilters }));
  };

  //**
  //  hàm xác nhận search
  //*/
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const keywordFilters = keywordFilterRef.current?.getKeywordFilters() || [];

    const finalFilter: FilterType = {
      ...filter,
      keywordFilters: keywordFilters,
    };

    const encodedFilter = encodeURIComponent(JSON.stringify(finalFilter));

    router.push(`/opac/search?p=${q}&filters=${encodedFilter}`); // Include the original query 'p'
  };

  //**
  // hàm reset
  // */
  const handleReset = () => {
    setFilter({
      yearRange: [2000, new Date().getFullYear()],
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
    keywordFilterRef.current?.resetFilters(); // Reset keyword filters if applicable.
    router.push('/opac/search');
  };

  //**
  // các hàm xử lý thay đổi thành phần
  // */
  const handleCheckboxDocument = (document: string) => {
    const exists = filter.documentTypes.includes(document);
    const newTypes = exists
      ? filter.documentTypes.filter((t) => t !== document)
      : [...filter.documentTypes, document];
    onChange({ documentTypes: newTypes });
  };
  const handleLocationChange = (location: string) => {
    const prev = filter.locations || [];
    if (prev.includes(location)) {
      onChange({ locations: prev.filter((l) => l !== location) });
    } else {
      onChange({ locations: [...prev, location] });
    }
  };
  const handleLanguageCheckbox = (language: string) => {
    const langs = filter.languages || [];
    const exists = langs.includes(language);
    const newLangs = exists ? langs.filter((l) => l !== language) : [...langs, language];
    onChange({ languages: newLangs });
  };
  const handleAvailabilityChange = (availability: string) => {
    const prev = filter.availability || [];
    if (prev.includes(availability)) {
      onChange({ availability: prev.filter((l) => l !== availability) });
    } else {
      onChange({ availability: [...prev, availability] });
    }
  };
  const handleYearRangeChange = (year: number[]) => {
    onChange({ yearRange: [year[0], year[1]] });
  };
  const documentOptions = DOCUMENT_TYPE_OPTIONS(categoryLocale);
  const languageOptions = LANGUAGE_OPTIONS(categoryLocale);
  const locationOptions = LOCATION_OPTIONS(filter, accessLocale, handleLocationChange);
  const availabilityOptions = AVAILABILITY_OPTIONS(filter, accessLocale, handleAvailabilityChange);

  return (
    <Card className="max-w-[400px] border border-gray-200">
      {/* --- Card Header --- */}
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center text-lg">{t('filters.title')}</CardTitle>
        <Button onClick={handleReset} type="button" variant="outline" className="cursor-pointer">
          <Icons.refreshCw className="mr-2 h-4 w-4" />
          {t('filters.reset')}
        </Button>
      </CardHeader>

      {/* --- Card Content --- */}
      <CardContent className="px-4">
        <Separator />
        <Accordion type="multiple" defaultValue={['documentType', 'publicationYear', 'status']}>
          {/* --- loại sách --- */}
          <AccordionItem value="documentType" className="border-b border-gray-200">
            <AccordionTrigger className="py-3 text-sm font-medium hover:no-underline">
              {t('filters.document_type')}
            </AccordionTrigger>
            <AccordionContent className="accordion-content">
              <div className="flex flex-col space-y-3">
                {documentOptions.map((type) => (
                  <div key={type.id} className="flex items-center space-x-3">
                    <Checkbox
                      id={`doc-type-${type.id}`}
                      checked={filter.documentTypes.includes(type.id)}
                      onCheckedChange={() => handleCheckboxDocument(type.id)}
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
            </AccordionContent>
          </AccordionItem>

          {/* --- năm --- */}
          <AccordionItem value="publicationYear">
            <AccordionTrigger className="py-3 text-sm font-medium hover:no-underline">
              {t('filters.publication_year')}
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col space-y-4 px-2">
                <div className="flex justify-between text-sm">
                  <span>
                    {t('filters.from')} {filter.yearRange?.[0] ?? 1900}
                  </span>
                  <span>
                    {t('filters.to')} {filter.yearRange?.[1] ?? 2023}
                  </span>
                </div>
                <Slider
                  min={1900}
                  max={new Date().getFullYear()}
                  step={1}
                  value={filter.yearRange ?? [1900, new Date().getFullYear()]}
                  onValueChange={handleYearRangeChange}
                />
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* --- tình trạng--- */}
          <AccordionItem value="status">
            <AccordionTrigger className="py-3 text-sm font-medium hover:no-underline">
              {t('filters.status')}
            </AccordionTrigger>
            <AccordionContent>
              {availabilityOptions.map((item) => (
                <div key={item.id} className="flex items-center space-x-3">
                  <Checkbox id={item.id} checked={item.checked} onCheckedChange={item.onChange} />
                  <Label htmlFor={item.id} className="cursor-pointer text-sm">
                    {item.label}
                  </Label>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>

          {/* --- vị trí  --- */}
          <AccordionItem value="location">
            <AccordionTrigger className="py-3 text-sm font-medium hover:no-underline">
              {t('filters.location')}
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col space-y-2">
                {locationOptions.map((item) => (
                  <div key={item.id} className="flex items-center space-x-3">
                    <Checkbox id={item.id} checked={item.checked} onCheckedChange={item.onChange} />
                    <div className="flex items-center space-x-3">
                      {item.icon}
                      <Label htmlFor={item.id} className="cursor-pointer text-sm">
                        {item.label}
                      </Label>
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* --- ngôn ngữ --- */}
          <AccordionItem value="language">
            <AccordionTrigger className="py-3 text-sm font-medium hover:no-underline">
              {t('filters.language')}
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col space-y-2">
                {languageOptions.map((lang) => (
                  <div key={lang.id} className="flex items-center space-x-3">
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
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Separator className="my-4" />

        <Button
          onClick={handleSubmit}
          disabled={!hasFilterChanged}
          className="w-full cursor-pointer rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
        >
          {t('filters.apply')}
        </Button>
      </CardContent>
    </Card>
  );
};

export default OpacSearchBar;
