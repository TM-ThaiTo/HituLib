type SearchParams = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

type SearchParamsAndId = {
  params: {
    id: string;
  };
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export { SearchParams, SearchParamsAndId };
