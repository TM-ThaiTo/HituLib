import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const documentType = searchParams.get('documentType') || 'all';
  const limit = parseInt(searchParams.get('limit') || '10', 10);
  const results = Array.from({ length: limit }, (_, i) => ({
    id: i + 1,
    title: `Tài liệu phổ biến ${documentType} #${i + 1}`,
  }));
  return NextResponse.json({ documentType, results });
}
