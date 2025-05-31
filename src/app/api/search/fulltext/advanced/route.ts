import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  // Dữ liệu mẫu
  return NextResponse.json({
    received: body,
    results: [
      { id: 1, title: 'Kết quả nâng cao 1', description: 'Mô tả nâng cao 1' },
      { id: 2, title: 'Kết quả nâng cao 2', description: 'Mô tả nâng cao 2' },
    ],
    total: 2,
  });
}
