type CategoryFilterType = {
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

type AdvancedType = {
  id: string;
  label: string;
  checked: boolean;
  icon?: JSX.Element;
  onChange: (checked: boolean) => void;
};

export type { CategoryFilterType, FilterType, AdvancedType };
