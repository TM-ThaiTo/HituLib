type CategoryFilterType = {
  category: string;
  yearRange: [number, number];
  documentTypes: string[];
  languages?: string[];
};

type FilterType = CategoryFilterType & {
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

export type { CategoryFilterType, FilterType };
