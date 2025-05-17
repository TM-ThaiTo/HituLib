import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

type Props = {
  s?: string;
  duongDan: string;
  page: number;
  perPage: number;
  totalPages: number;
};

export default function PaginationComponent({ s, duongDan, page, perPage, totalPages }: Props) {
  const getHref = s
    ? (p: number) => `${duongDan}?s=${s}&page=${p}&perPage=${perPage}`
    : (p: number) => `${duongDan}?page=${p}&perPage=${perPage}`;

  const renderPagination = () => {
    const pages = [];
    const maxVisible = 5; // số lượng trang hiển thị xung quanh
    const startPage = Math.max(2, page - 2);
    const endPage = Math.min(totalPages - 1, page + 2);

    // Trang 1
    pages.push(
      <PaginationItem key={1}>
        <PaginationLink href={getHref(1)} isActive={page === 1}>
          1
        </PaginationLink>
      </PaginationItem>,
    );

    // Dấu "..."
    if (startPage > 2) {
      pages.push(
        <PaginationItem key="start-ellipsis">
          <span className="px-2">...</span>
        </PaginationItem>,
      );
    }

    // Các trang xung quanh trang hiện tại
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <PaginationItem key={i}>
          <PaginationLink href={getHref(i)} isActive={i === page}>
            {i}
          </PaginationLink>
        </PaginationItem>,
      );
    }

    // Dấu "..."
    if (endPage < totalPages - 1) {
      pages.push(
        <PaginationItem key="end-ellipsis">
          <span className="px-2">...</span>
        </PaginationItem>,
      );
    }

    // Trang cuối
    if (totalPages > 1) {
      pages.push(
        <PaginationItem key={totalPages}>
          <PaginationLink href={getHref(totalPages)} isActive={page === totalPages}>
            {totalPages}
          </PaginationLink>
        </PaginationItem>,
      );
    }

    return pages;
  };

  return (
    <Pagination className="mt-6">
      <PaginationContent>
        {page > 1 && (
          <PaginationItem>
            <PaginationPrevious href={getHref(page - 1)} />
          </PaginationItem>
        )}

        {renderPagination()}

        {page < totalPages && (
          <PaginationItem>
            <PaginationNext href={getHref(page + 1)} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
