// Định nghĩa các kiểu dữ liệu
export type DocumentFormat =
  | 'book'
  | 'ebook'
  | 'journal'
  | 'article'
  | 'thesis'
  | 'multimedia'
  | 'database'
  | 'audio'
  | 'video'
  | 'pdf'
  | 'epub';

export type DocumentAvailability = 'available' | 'on_loan' | 'reserved' | 'reference_only';

export type DocumentLanguage =
  | 'vietnamese'
  | 'english'
  | 'french'
  | 'german'
  | 'chinese'
  | 'japanese'
  | 'korean'
  | 'russian'
  | 'spanish';

export type DocumentAccess = 'open_access' | 'subscription' | 'campus_only' | 'restricted';

export interface Author {
  id: string;
  name: string;
  affiliation?: string;
  orcid?: string;
}

export interface Document {
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
}

export interface BorrowingRecord {
  id: string;
  userId: string;
  documentId: string;
  documentTitle: string;
  borrowDate: string;
  dueDate: string;
  returnDate?: string;
  renewals: number;
  status: 'active' | 'returned' | 'overdue' | 'lost';
}

export interface SearchHistory {
  id: string;
  query: string;
  filters?: Record<string, any>;
  timestamp: string;
  resultsCount: number;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  documentCount: number;
  coverImage?: string;
  subjects?: string[];
  featured?: boolean;
}

export interface PurchaseSuggestion {
  id: string;
  title: string;
  author?: string;
  publisher?: string;
  publicationYear?: number;
  isbn?: string;
  format?: DocumentFormat;
  requestedBy: string;
  requestDate: string;
  status: 'pending' | 'approved' | 'rejected' | 'ordered' | 'received';
  notes?: string;
  price?: number;
  priority: 'low' | 'medium' | 'high';
}

export interface ResearchProject {
  id: string;
  title: string;
  researchers: Author[];
  abstract: string;
  startDate: string;
  endDate?: string;
  status: 'planning' | 'in_progress' | 'completed' | 'published';
  keywords: string[];
  fundingSource?: string;
  fundingAmount?: number;
  publications?: string[];
  documents?: string[];
}
interface FilterOptions {
  format?: string;
  language?: string;
  subject?: string;
  author?: string;
  fromYear?: number;
  toYear?: number;
  availability?: string;
  access?: string;
  collection?: string;
  keyword?: string;
}

/**
 * Interface cho các tùy chọn sắp xếp
 */
interface SortOptions {
  field: keyof Document | 'authorName';
  order: 'asc' | 'desc';
}

/**
 * Interface cho các tùy chọn phân trang
 */
interface PaginationOptions {
  page: number;
  limit: number;
}

/**
 * Interface cho kết quả trả về của hàm getListDocument
 */
interface DocumentListResult {
  documents: Document[];
  totalCount: number;
  currentPage: number;
  totalPages: number;
}

const authors: Author[] = [
  {
    id: '1',
    name: 'Nguyễn Văn A',
    affiliation: 'Đại học Quốc gia Hà Nội',
    orcid: '0000-0001-2345-6789',
  },
  {
    id: '2',
    name: 'Trần Thị B',
    affiliation: 'Đại học Bách khoa Hà Nội',
    orcid: '0000-0002-3456-7890',
  },
  { id: '3', name: 'Lê Văn C', affiliation: 'Đại học Y Hà Nội', orcid: '0000-0003-4567-8901' },
  {
    id: '4',
    name: 'Phạm Thị D',
    affiliation: 'Đại học Kinh tế Quốc dân',
    orcid: '0000-0004-5678-9012',
  },
  {
    id: '5',
    name: 'Hoàng Văn E',
    affiliation: 'Đại học Sư phạm Hà Nội',
    orcid: '0000-0005-6789-0123',
  },
  { id: '6', name: 'John Smith', affiliation: 'Harvard University', orcid: '0000-0006-7890-1234' },
  {
    id: '7',
    name: 'Maria Garcia',
    affiliation: 'University of Oxford',
    orcid: '0000-0007-8901-2345',
  },
  { id: '8', name: 'Zhang Wei', affiliation: 'Peking University', orcid: '0000-0008-9012-3456' },
  {
    id: '9',
    name: 'Tanaka Yuki',
    affiliation: 'University of Tokyo',
    orcid: '0000-0009-0123-4567',
  },
  {
    id: '10',
    name: 'Kim Min-ji',
    affiliation: 'Seoul National University',
    orcid: '0000-0010-1234-5678',
  },
];

const documents: Document[] = [
  {
    id: '1',
    title: 'Giáo trình Toán cao cấp',
    authors: [authors[0], authors[4]],
    publicationYear: 2020,
    publisher: 'NXB Đại học Quốc gia Hà Nội',
    format: 'book',
    language: 'vietnamese',
    subjects: ['Toán học', 'Giáo trình'],
    abstract:
      'Giáo trình Toán cao cấp dành cho sinh viên năm nhất các ngành kỹ thuật và khoa học tự nhiên.',
    isbn: '978-604-913-234-5',
    callNumber: 'QA303.N5',
    availability: 'available',
    location: 'Kho sách tầng 2',
    coverImage: '/mathematics-textbook.png',
    access: 'open_access',
    keywords: ['toán cao cấp', 'giải tích', 'đại số tuyến tính'],
    collections: ['1', '3'],
  },
  {
    id: '2',
    title: 'Cơ sở Vật lý đại cương',
    authors: [authors[1]],
    publicationYear: 2019,
    publisher: 'NXB Giáo dục',
    format: 'book',
    language: 'vietnamese',
    subjects: ['Vật lý', 'Giáo trình'],
    abstract: 'Giáo trình Cơ sở Vật lý đại cương dành cho sinh viên các ngành kỹ thuật.',
    isbn: '978-604-0-12345-6',
    callNumber: 'QC21.T7',
    availability: 'on_loan',
    location: 'Kho sách tầng 2',
    coverImage: '/physics-textbook.png',
    access: 'open_access',
    keywords: ['vật lý đại cương', 'cơ học', 'điện từ học'],
    collections: ['1'],
  },
  {
    id: '3',
    title: 'Advances in Machine Learning Algorithms',
    authors: [authors[5], authors[6]],
    publicationYear: 2021,
    publisher: 'Springer',
    format: 'ebook',
    language: 'english',
    subjects: ['Computer Science', 'Artificial Intelligence', 'Machine Learning'],
    abstract:
      'This book presents the latest advances in machine learning algorithms and their applications.',
    isbn: '978-3-030-12345-6',
    doi: '10.1007/978-3-030-12345-6',
    availability: 'available',
    coverImage: '/abstract-book-cover.png',
    access: 'subscription',
    citations: 45,
    fullTextUrl: 'https://example.com/ebooks/advances-ml-algorithms',
    keywords: ['machine learning', 'artificial intelligence', 'algorithms', 'deep learning'],
    collections: ['2', '4'],
  },
  {
    id: '4',
    title: 'Nghiên cứu ứng dụng trí tuệ nhân tạo trong y học',
    authors: [authors[2], authors[3]],
    publicationYear: 2022,
    format: 'thesis',
    language: 'vietnamese',
    subjects: ['Y học', 'Trí tuệ nhân tạo', 'Nghiên cứu ứng dụng'],
    abstract:
      'Luận án nghiên cứu các ứng dụng của trí tuệ nhân tạo trong chẩn đoán và điều trị bệnh.',
    availability: 'reference_only',
    location: 'Phòng luận văn tầng 3',
    access: 'campus_only',
    keywords: ['trí tuệ nhân tạo', 'y học', 'chẩn đoán hình ảnh', 'học máy'],
    collections: ['5'],
  },
  {
    id: '5',
    title: 'Journal of Educational Psychology',
    authors: [],
    publicationYear: 2023,
    publisher: 'American Psychological Association',
    format: 'journal',
    language: 'english',
    subjects: ['Psychology', 'Education'],
    issn: '0022-0663',
    availability: 'available',
    location: 'Phòng tạp chí tầng 1',
    access: 'subscription',
    keywords: ['psychology', 'education', 'learning', 'teaching'],
    collections: ['6'],
  },
  {
    id: '6',
    title: 'The Impact of Climate Change on Biodiversity in Southeast Asia',
    authors: [authors[7], authors[9]],
    publicationYear: 2022,
    format: 'article',
    language: 'english',
    subjects: ['Environmental Science', 'Ecology', 'Climate Change'],
    abstract:
      'This article examines the effects of climate change on biodiversity in Southeast Asian ecosystems.',
    doi: '10.1038/s41558-022-1234-5',
    availability: 'available',
    access: 'open_access',
    citations: 12,
    fullTextUrl: 'https://example.com/articles/climate-change-biodiversity',
    keywords: ['climate change', 'biodiversity', 'Southeast Asia', 'ecology'],
    collections: ['7'],
  },
  {
    id: '7',
    title: 'Introduction to Quantum Computing',
    authors: [authors[8]],
    publicationYear: 2021,
    publisher: 'MIT Press',
    format: 'pdf',
    language: 'english',
    subjects: ['Computer Science', 'Quantum Computing', 'Physics'],
    abstract:
      'An introduction to the principles of quantum computing and its potential applications.',
    isbn: '978-0-262-12345-6',
    availability: 'available',
    access: 'subscription',
    fullTextUrl: 'https://example.com/pdf/intro-quantum-computing',
    keywords: ['quantum computing', 'quantum mechanics', 'qubits', 'quantum algorithms'],
    collections: ['2', '8'],
  },
  {
    id: '8',
    title: 'Lịch sử Việt Nam',
    authors: [authors[0], authors[4]],
    publicationYear: 2018,
    publisher: 'NXB Chính trị Quốc gia',
    format: 'book',
    language: 'vietnamese',
    subjects: ['Lịch sử', 'Việt Nam'],
    abstract: 'Tổng quan về lịch sử Việt Nam từ thời kỳ dựng nước đến hiện đại.',
    isbn: '978-604-57-3456-7',
    callNumber: 'DS556.N5',
    availability: 'available',
    location: 'Kho sách tầng 2',
    access: 'open_access',
    keywords: ['lịch sử', 'Việt Nam', 'dân tộc'],
    collections: ['9'],
  },
  {
    id: '9',
    title: 'Lecture Series: Modern Cryptography',
    authors: [authors[6]],
    publicationYear: 2020,
    format: 'video',
    language: 'english',
    subjects: ['Computer Science', 'Cryptography', 'Information Security'],
    abstract: 'A series of video lectures covering the fundamentals of modern cryptography.',
    availability: 'available',
    access: 'campus_only',
    fullTextUrl: 'https://example.com/videos/modern-cryptography',
    keywords: ['cryptography', 'security', 'encryption', 'lectures'],
    collections: ['10'],
  },
  {
    id: '10',
    title: 'Classical Music Collection: Mozart Symphonies',
    authors: [],
    publicationYear: 2015,
    publisher: 'Vienna Philharmonic',
    format: 'audio',
    language: 'english',
    subjects: ['Music', 'Classical Music'],
    abstract: "A collection of Mozart's symphonies performed by the Vienna Philharmonic Orchestra.",
    availability: 'available',
    access: 'subscription',
    fullTextUrl: 'https://example.com/audio/mozart-symphonies',
    keywords: ['classical music', 'Mozart', 'symphony', 'orchestra'],
    collections: ['11'],
  },
];

const collections: Collection[] = [
  {
    id: '1',
    name: 'Giáo trình đại cương',
    description: 'Bộ sưu tập các giáo trình đại cương dành cho sinh viên năm nhất và năm hai.',
    documentCount: 45,
    coverImage: '/abstract-geometric-shapes.png',
    subjects: ['Toán học', 'Vật lý', 'Hóa học', 'Sinh học'],
    featured: true,
  },
  {
    id: '2',
    name: 'Computer Science & Technology',
    description:
      'Collection of books and resources on computer science and information technology.',
    documentCount: 78,
    coverImage: '/abstract-mathematics.png',
    subjects: [
      'Computer Science',
      'Information Technology',
      'Programming',
      'Artificial Intelligence',
    ],
    featured: true,
  },
  {
    id: '3',
    name: 'Toán học cao cấp',
    description: 'Bộ sưu tập sách và tài liệu về toán học cao cấp.',
    documentCount: 32,
    subjects: ['Toán học', 'Giải tích', 'Đại số', 'Hình học'],
    featured: false,
  },
  {
    id: '4',
    name: 'Artificial Intelligence & Machine Learning',
    description: 'Resources on artificial intelligence, machine learning, and data science.',
    documentCount: 56,
    subjects: ['Artificial Intelligence', 'Machine Learning', 'Data Science', 'Neural Networks'],
    featured: true,
  },
  {
    id: '5',
    name: 'Luận văn và luận án',
    description: 'Bộ sưu tập luận văn thạc sĩ và luận án tiến sĩ của trường.',
    documentCount: 120,
    subjects: ['Luận văn', 'Luận án', 'Nghiên cứu'],
    featured: false,
  },
  {
    id: '6',
    name: 'Tạp chí khoa học quốc tế',
    description: 'Bộ sưu tập các tạp chí khoa học quốc tế có uy tín.',
    documentCount: 95,
    subjects: ['Tạp chí', 'Khoa học', 'Quốc tế'],
    featured: true,
  },
  {
    id: '7',
    name: 'Environmental Studies',
    description: 'Collection of resources on environmental science and sustainability.',
    documentCount: 42,
    subjects: ['Environmental Science', 'Ecology', 'Climate Change', 'Sustainability'],
    featured: false,
  },
  {
    id: '8',
    name: 'Quantum Physics & Computing',
    description: 'Resources on quantum physics and quantum computing.',
    documentCount: 28,
    subjects: ['Quantum Physics', 'Quantum Computing', 'Quantum Mechanics'],
    featured: false,
  },
  {
    id: '9',
    name: 'Lịch sử và Văn hóa Việt Nam',
    description: 'Bộ sưu tập sách và tài liệu về lịch sử và văn hóa Việt Nam.',
    documentCount: 67,
    subjects: ['Lịch sử', 'Văn hóa', 'Việt Nam'],
    featured: true,
  },
  {
    id: '10',
    name: 'Multimedia Resources',
    description: 'Collection of video lectures, tutorials, and educational multimedia.',
    documentCount: 53,
    subjects: ['Video', 'Multimedia', 'Lectures', 'Tutorials'],
    featured: false,
  },
  {
    id: '11',
    name: 'Music & Arts',
    description: 'Collection of resources on music, fine arts, and performing arts.',
    documentCount: 39,
    subjects: ['Music', 'Arts', 'Performance', 'History of Art'],
    featured: false,
  },
];

const borrowingRecords: BorrowingRecord[] = [
  {
    id: '1',
    userId: 'user1',
    documentId: '1',
    documentTitle: 'Giáo trình Toán cao cấp',
    borrowDate: '2023-01-15',
    dueDate: '2023-02-15',
    returnDate: '2023-02-10',
    renewals: 0,
    status: 'returned',
  },
  {
    id: '2',
    userId: 'user1',
    documentId: '2',
    documentTitle: 'Cơ sở Vật lý đại cương',
    borrowDate: '2023-03-01',
    dueDate: '2023-04-01',
    renewals: 1,
    status: 'active',
  },
  {
    id: '3',
    userId: 'user2',
    documentId: '8',
    documentTitle: 'Lịch sử Việt Nam',
    borrowDate: '2023-02-20',
    dueDate: '2023-03-20',
    returnDate: '2023-03-18',
    renewals: 0,
    status: 'returned',
  },
  {
    id: '4',
    userId: 'user3',
    documentId: '1',
    documentTitle: 'Giáo trình Toán cao cấp',
    borrowDate: '2023-03-10',
    dueDate: '2023-04-10',
    renewals: 0,
    status: 'active',
  },
  {
    id: '5',
    userId: 'user2',
    documentId: '2',
    documentTitle: 'Cơ sở Vật lý đại cương',
    borrowDate: '2023-01-05',
    dueDate: '2023-02-05',
    returnDate: '2023-02-07',
    renewals: 0,
    status: 'returned',
  },
];

const searchHistory: SearchHistory[] = [
  {
    id: '1',
    query: 'toán cao cấp',
    filters: { format: 'book', language: 'vietnamese' },
    timestamp: '2023-03-15T10:30:45',
    resultsCount: 5,
  },
  {
    id: '2',
    query: 'machine learning',
    filters: { format: 'ebook', language: 'english' },
    timestamp: '2023-03-14T14:22:10',
    resultsCount: 12,
  },
  {
    id: '3',
    query: 'quantum computing',
    timestamp: '2023-03-12T09:15:30',
    resultsCount: 3,
  },
  {
    id: '4',
    query: 'lịch sử việt nam',
    filters: { format: 'book', language: 'vietnamese' },
    timestamp: '2023-03-10T16:45:20',
    resultsCount: 8,
  },
  {
    id: '5',
    query: 'climate change',
    filters: { format: 'article', access: 'open_access' },
    timestamp: '2023-03-08T11:05:15',
    resultsCount: 6,
  },
];

const purchaseSuggestions: PurchaseSuggestion[] = [
  {
    id: '1',
    title: 'Deep Learning with Python',
    author: 'François Chollet',
    publisher: 'Manning Publications',
    publicationYear: 2021,
    isbn: '978-1-61729-554-6',
    format: 'book',
    requestedBy: 'user1',
    requestDate: '2023-02-10',
    status: 'approved',
    notes: 'Sách cần thiết cho khóa học Trí tuệ nhân tạo.',
    price: 49.99,
    priority: 'high',
  },
  {
    id: '2',
    title: 'Giáo trình Kinh tế vĩ mô',
    author: 'Nguyễn Văn X',
    publisher: 'NXB Kinh tế',
    publicationYear: 2022,
    format: 'book',
    requestedBy: 'user2',
    requestDate: '2023-02-15',
    status: 'pending',
    priority: 'medium',
  },
  {
    id: '3',
    title: 'The Art of Computer Programming, Vol. 4B',
    author: 'Donald E. Knuth',
    publisher: 'Addison-Wesley Professional',
    publicationYear: 2022,
    isbn: '978-0-201-85713-3',
    format: 'book',
    requestedBy: 'user3',
    requestDate: '2023-02-20',
    status: 'ordered',
    notes: 'Bổ sung cho bộ sách hiện có.',
    price: 79.99,
    priority: 'medium',
  },
  {
    id: '4',
    title: 'Journal of Quantum Information Science',
    publisher: 'Scientific Research Publishing',
    format: 'journal',
    requestedBy: 'user4',
    requestDate: '2023-03-01',
    status: 'rejected',
    notes: 'Đã có bản điện tử trong cơ sở dữ liệu hiện tại.',
    priority: 'low',
  },
  {
    id: '5',
    title: 'Handbook of Mathematical Functions',
    author: 'NIST',
    publisher: 'Cambridge University Press',
    publicationYear: 2020,
    format: 'ebook',
    requestedBy: 'user5',
    requestDate: '2023-03-05',
    status: 'pending',
    price: 120,
    priority: 'high',
  },
];

const researchProjects: ResearchProject[] = [
  {
    id: '1',
    title: 'Ứng dụng học máy trong dự báo dịch bệnh',
    researchers: [authors[0], authors[2]],
    abstract:
      'Nghiên cứu ứng dụng các thuật toán học máy để dự báo sự lây lan của dịch bệnh truyền nhiễm.',
    startDate: '2022-01-01',
    endDate: '2023-12-31',
    status: 'in_progress',
    keywords: ['học máy', 'dịch tễ học', 'dự báo', 'y tế công cộng'],
    fundingSource: 'Quỹ Phát triển Khoa học và Công nghệ Quốc gia (NAFOSTED)',
    fundingAmount: 500000000,
    publications: ['6'],
    documents: ['4'],
  },
  {
    id: '2',
    title: 'Phát triển vật liệu nano ứng dụng trong xử lý nước thải',
    researchers: [authors[1], authors[4]],
    abstract: 'Nghiên cứu phát triển và ứng dụng vật liệu nano trong xử lý nước thải công nghiệp.',
    startDate: '2021-07-01',
    endDate: '2023-06-30',
    status: 'in_progress',
    keywords: ['vật liệu nano', 'xử lý nước thải', 'môi trường', 'công nghệ xanh'],
    fundingSource: 'Bộ Khoa học và Công nghệ',
    fundingAmount: 700000000,
  },
  {
    id: '3',
    title: 'Quantum Algorithms for Optimization Problems',
    researchers: [authors[5], authors[8]],
    abstract:
      'account/research on developing quantum algorithms for solving complex optimization problems.',
    startDate: '2022-03-01',
    status: 'planning',
    keywords: ['quantum computing', 'algorithms', 'optimization', 'computational complexity'],
    fundingSource: 'National Science Foundation',
    fundingAmount: 250000,
  },
  {
    id: '4',
    title: 'Nghiên cứu tác động của biến đổi khí hậu đến đa dạng sinh học ở Việt Nam',
    researchers: [authors[3], authors[7]],
    abstract:
      'Đánh giá tác động của biến đổi khí hậu đến đa dạng sinh học tại các hệ sinh thái ở Việt Nam.',
    startDate: '2020-01-01',
    endDate: '2022-12-31',
    status: 'completed',
    keywords: ['biến đổi khí hậu', 'đa dạng sinh học', 'hệ sinh thái', 'bảo tồn'],
    fundingSource: 'Bộ Tài nguyên và Môi trường',
    fundingAmount: 600000000,
    publications: ['6'],
  },
  {
    id: '5',
    title: 'Development of AI-based Medical Diagnostic Tools',
    researchers: [authors[2], authors[6], authors[9]],
    abstract:
      'account/research on developing artificial intelligence tools for medical diagnosis and treatment planning.',
    startDate: '2021-09-01',
    status: 'in_progress',
    keywords: ['artificial intelligence', 'medical diagnosis', 'healthcare', 'machine learning'],
    fundingSource: 'World Health Organization',
    fundingAmount: 350000,
    documents: ['4'],
  },
];

type SimplifiedDocument = {
  coverImage: string;
  title: string;
  authors: string[];
  id: string;
};

async function getListDocument(): Promise<SimplifiedDocument[]> {
  return documents.map((doc) => ({
    coverImage: doc.coverImage || '',
    title: doc.title,
    authors: doc.authors.map((author) => author.name),
    id: doc.id,
  }));
}
export {
  authors,
  documents,
  borrowingRecords,
  searchHistory,
  purchaseSuggestions,
  researchProjects,
  getListDocument,
};
