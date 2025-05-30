import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Camera, Info } from 'lucide-react';
import Link from 'next/link';

export default function OpacMainPage() {
  return (
    <>
      <div className="max-w-screen-container flex min-h-screen mt-4">
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
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Camera className="h-4 w-4" />
                    <span className="hidden sm:inline">Quét mã vạch</span>
                  </Button>
                </Link>
              </CardHeader>
              <CardContent>
                {/* <OpacSearchBar homePage={true} onExtendedSearch={() => setShowExtendedSearch(!showExtendedSearch)} /> */}

                {/* <OpacExtendedSearch query="" visible={showExtendedSearch} onClose={() => setShowExtendedSearch(false)} /> */}
              </CardContent>
              <CardFooter className="border-t bg-blue-50">
                <div className="flex items-start text-sm text-gray-600">
                  <Info className="mt-0.5 mr-2 h-5 w-5 flex-shrink-0 text-blue-600" />
                  <p>
                    Bạn có thể tìm kiếm tài liệu trong Tài liệu nội sinh, từ các đơn vị liên kết,
                    học liệu mở (OER), hoặc từ các nguồn bên ngoài. Nếu không tìm thấy tài liệu bạn
                    cần, bạn có thể gửi đề xuất mua.
                  </p>
                </div>
              </CardFooter>
            </Card>
          </div>
        </main>
      </div>
    </>
  );
}
