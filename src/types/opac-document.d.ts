interface DocumentType {
  id: string;
  title: string;
  authors: Author[];
  publicationYear: number;
  publisher?: string;
  format: DocumentFormat;
  language: DocumentLanguage;
  subjects: string[];
  abstract?: string;
  isbn?: string;
  issn?: string;
  doi?: string;
  callNumber?: string;
  availability: DocumentAvailability;
  location?: string;
  coverImage?: string;
  access: DocumentAccess;
  citations?: number;
  fullTextUrl?: string;
  keywords: string[];
  collections?: string[];
  documentItems?: DocumentItem[];
}

interface DocumentItem {
  id: string;
  location: string;
  classification: string;
  status: string;
}

interface AuthorType {
  id: string;
  name: string;
  affiliation?: string;
  orcid?: string;
}

export { AuthorType, DocumentType };
