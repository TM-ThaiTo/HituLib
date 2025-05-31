import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    categories: [
      { id: 1, name: 'Sách' },
      { id: 2, name: 'Báo' },
      { id: 3, name: 'Tạp chí' },
    ],
  });
}
