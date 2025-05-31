import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get('q') || '';
  const page = parseInt(searchParams.get('page') || '1', 10);
  const pageSize = parseInt(searchParams.get('pageSize') || '20', 10);

  // Dữ liệu mẫu
  const results = Array.from({ length: pageSize }, (_, i) => ({
    id: (page - 1) * pageSize + i + 1,
    title: `Kết quả cho "${q}" #${(page - 1) * pageSize + i + 1}`,
    description: `Mô tả cho kết quả ${(page - 1) * pageSize + i + 1}`,
  }));

  return NextResponse.json({
    q,
    page,
    pageSize,
    total: 100,
    results,
  });
}
