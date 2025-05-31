import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, { params }: { params: { categoryId: string } }) {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get('page') || '1', 10);
  const pageSize = parseInt(searchParams.get('pageSize') || '20', 10);
  const { categoryId } = params;
  const results = Array.from({ length: pageSize }, (_, i) => ({
    id: (page - 1) * pageSize + i + 1,
    title: `Tài liệu danh mục ${categoryId} #${(page - 1) * pageSize + i + 1}`,
  }));
  return NextResponse.json({
    categoryId,
    page,
    pageSize,
    total: 100,
    results,
  });
}
