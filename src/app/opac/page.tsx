import OpacDocumentLatest from '@/components/opac/opac-document-latest';
import OpacSearchBar from '@/components/opac/opac-search/opac-search-bar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Camera, Info } from 'lucide-react';
import Link from 'next/link';

export default async function OpacMainPage() {

  return (
    <>
      <div className="max-w-screen-container mt-4 flex min-h-screen">
        <main className="flex-1 bg-gray-50">
          <div className="">
            <div className="mb-8 text-center">
              <h1 className="mb-2 text-3xl font-bold text-blue-600">Thư viện trực tuyến</h1>
              <p className="mx-auto max-w-2xl text-gray-600">
                Tìm kiếm, khám phá và truy cập hàng ngàn tài liệu học thuật, sách, tạp chí và tài
                nguyên giáo dục mở từ nhiều nguồn khác nhau.
              </p>
            </div>

            <Card className="mb-8 border-t-4 border-t-blue-600">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-blue-600">Tìm kiếm tài liệu</CardTitle>
                <Link href="/opac/barcode">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex cursor-pointer items-center gap-1"
                  >
                    <Camera className="h-4 w-4" />
                    <span className="hidden sm:inline">Quét mã vạch</span>
                  </Button>
                </Link>
              </CardHeader>
              <CardContent>
                <OpacSearchBar />
              </CardContent>
              <CardFooter className="border-t bg-blue-50">
                <div className="flex items-start text-sm text-gray-600">
                  <Info className="mt-0.5 mr-2 h-full w-5 flex-shrink-0 text-blue-600" />
                  <p>
                    Bạn có thể tìm kiếm tài liệu trong Tài liệu nội sinh, từ các đơn vị liên kết,
                    học liệu mở (OER), hoặc từ các nguồn bên ngoài. Nếu không tìm thấy tài liệu bạn
                    cần, bạn có thể gửi đề xuất mua.
                  </p>
                </div>
              </CardFooter>
            </Card>

            <OpacDocumentLatest />

          </div>
        </main>
      </div>
    </>
  );
}
